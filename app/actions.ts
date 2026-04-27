"use server"

export async function submitLead(formData: {
  name: string;
  company_name: string;
  email: string;
  profile_name: string;
  note: string;
  file_name: string;
}) {
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
