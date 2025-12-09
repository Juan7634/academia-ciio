import type { ReactNode } from "react"

interface GroupTextProps {
  label: string,
  children: ReactNode
}

export const GroupText = ({ label, children }: GroupTextProps) => {
  return (
    <div className="border border-border rounded-lg p-3">
      <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">{label}</p>
      <p className="font-medium text-foreground text-wrap">{children}</p>
    </div>
  )
}
