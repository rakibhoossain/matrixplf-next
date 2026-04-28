"use server"

import { headers } from "next/headers";

const rateLimitMap = new Map<string, { count: number; lastReset: number }>();

function isRateLimited(ip: string) {
  const now = Date.now();
  const limit = 15;
  const windowMs = 60 * 1000;

  const current = rateLimitMap.get(ip) || { count: 0, lastReset: now };

  if (now - current.lastReset > windowMs) {
    current.count = 1;
    current.lastReset = now;
  } else {
    current.count++;
  }

  rateLimitMap.set(ip, current);
  return current.count > limit;
}

export async function submitLead(formData: {
  name: string;
  company_name: string;
  email: string;
  profile_name: string;
  note: string;
  file_name: string;
}) {
  const headersList = await headers();
  const ip = headersList.get("x-forwarded-for") || "unknown";

  if (ip != 'unknown' && isRateLimited(ip)) {
    return { success: false, error: "Too many requests. Please try again in a minute." };
  }

  try {
    const response = await fetch("https://whm.matrixglobalplatform.com/api/matrix-lead", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      console.error("API Error:", errorData);
      return { success: false, error: "Failed to submit lead. Please try again." };
    }

    return { success: true };
  } catch (error) {
    console.error("Error submitting lead:", error);
    return { success: false, error: "Something went wrong. Please check your connection and try again." };
  }
}
