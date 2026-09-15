"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"

export default function NotFound() {
  const router = useRouter()
  
  useEffect(() => {
    // Whenever a user hits a route that doesn't exist (like old website links),
    // immediately redirect them to the home page.
    router.replace("/")
  }, [router])

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground">
      <div className="w-8 h-8 border-4 border-secondary border-t-transparent rounded-full animate-spin mb-4"></div>
      <p className="font-body-lg text-on-surface-variant">Redirecting to home...</p>
    </div>
  )
}
