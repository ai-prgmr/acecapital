"use client"

import { useEffect, useRef } from "react"
import { trackBlogRead } from "@/lib/analytics"

interface BlogReadTrackerProps {
  post: string
  category: string
}

/**
 * Fires `blog_read` when the user has either:
 * 1. Scrolled through 75% of the article, OR
 * 2. Spent at least 60 seconds reading the article.
 * Deduplicated so it only fires once per article view.
 */
export default function BlogReadTracker({ post, category }: BlogReadTrackerProps) {
  const trackedRef = useRef(false)

  useEffect(() => {
    trackedRef.current = false

    const fireBlogRead = () => {
      if (trackedRef.current) return
      trackedRef.current = true
      trackBlogRead(post, category)
    }

    // 1. Timer condition: 60 seconds
    const timer = setTimeout(() => {
      fireBlogRead()
    }, 60000)

    // 2. Scroll condition: 75% scroll depth
    const handleScroll = () => {
      if (trackedRef.current) return
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight
      if (scrollHeight <= 0) return
      const scrollPercentage = (window.scrollY / scrollHeight) * 100

      if (scrollPercentage >= 75) {
        fireBlogRead()
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })

    return () => {
      clearTimeout(timer)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [post, category])

  return null
}

