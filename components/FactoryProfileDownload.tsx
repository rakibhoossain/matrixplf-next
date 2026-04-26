"use client"

import { useState } from "react"
import { Download } from "lucide-react"
import { ProfileDownloadModal } from "./ProfileDownloadModal"

interface FactoryProfileDownloadProps {
  factory: {
    namePart1: string
    namePart2: string
    profilePdf?: string
  }
}

export function FactoryProfileDownload({ factory }: FactoryProfileDownloadProps) {
  const [isOpen, setIsOpen] = useState(false)
  
  return (
    <>
      <button
          onClick={() => setIsOpen(true)}
          className="inline-flex items-center gap-2 bg-[#4cb5e4] hover:bg-[#3ba4d3] text-white text-sm font-semibold px-4 py-2 rounded transition-colors"
      >
          <Download className="w-4 h-4" /> Download Profile
      </button>
      
      <ProfileDownloadModal 
        isOpen={isOpen} 
        onClose={() => setIsOpen(false)} 
        customPdf={factory.profilePdf}
        customTitle={`${factory.namePart1} ${factory.namePart2} - Profile`}
      />
    </>
  )
}
