"use client"

import React from "react"
import { openAceContactModal } from "@/components/FloatingButtons"

interface OpenContactModalButtonProps {
  className?: string
  children: React.ReactNode
}

export default function OpenContactModalButton({
  className,
  children,
}: OpenContactModalButtonProps) {
  return (
    <button
      type="button"
      onClick={openAceContactModal}
      data-action="open-contact-form"
      className={className}
    >
      {children}
    </button>
  )
}
