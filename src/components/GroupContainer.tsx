import type { ReactNode } from "react"

interface GroupContainerProps {
  label: string,
  children: ReactNode
}

export const GroupContainer = ({ label, children }: GroupContainerProps) => {
  return (
    <div className="border border-border rounded-lg p-3">
      <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">{label}</p>
      <div>
        {children}
      </div>
    </div>
  )
}
