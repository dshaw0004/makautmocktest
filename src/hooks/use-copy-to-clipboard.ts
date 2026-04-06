import { useCallback, useRef, useState } from "react"
import { gooeyToast } from "@/components/ui/goey-toaster"

type UseCopyToClipboardProps = {
  text: string
  copyMessage?: string
}

export function useCopyToClipboard({
  text,
  copyMessage = "Copied to clipboard!",
}: UseCopyToClipboardProps) {
  const [isCopied, setIsCopied] = useState(false)
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const handleCopy = useCallback(() => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        gooeyToast.success(copyMessage, {preset: 'bouncy',
  })
        setIsCopied(true)
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current)
          timeoutRef.current = null
        }
        timeoutRef.current = setTimeout(() => {
          setIsCopied(false)
        }, 2000)
      })
      .catch(() => {
        gooeyToast.error("Failed to copy to clipboard.", {preset: 'bouncy',
  })
      })
  }, [text, copyMessage])

  return { isCopied, handleCopy }
}
