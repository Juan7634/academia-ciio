import type { SubjectStatusType } from "../../schema/SubjectI";

export const subjectStatusData: Record<SubjectStatusType, string> = {
    draft: "bg-muted text-muted-foreground",
    pending_president: "bg-amber-500/10 text-amber-500",
    pending_boss: "bg-orange-500/10 text-orange-500",
    approve: "bg-success text-success",
    reject: "bg-danger/10 text-danger"
}