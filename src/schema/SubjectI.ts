export type UserRole = "profesor" | "presidente" | "jefe"

export interface User {
  id: string
  email: string
  name: string
  role: UserRole
  department?: string
}

export interface SubjectI {
  id: number
  name: string  
  career : string
  academy : string
  crn : string,
  status? : SubjectStatusI
}

export interface SubjectStatusI {
    code : SubjectStatusType,
    name : string
}

export type SubjectStatusType = "draft" | "pending_president" | "pending_boss" | "approve" | "reject"

export interface Activity {
  id: string
  weekNumber: number
  topic: string
  objective: string
  activities: string
  resources: string
  evaluationCriteria: string
}

export interface Comment {
  id: string
  userId: string
  userName: string
  userRole: UserRole
  content: string
  createdAt: Date
  type: "rechazo" | "observacion"
}

export interface StudyPlan {
  id: string
  subjectId: string
  subjectName: string
  subjectCode: string
  professorId: string
  professorName: string
  semester: string
  year: number
  generalObjective: string
  specificObjectives: string[]
  activities: Activity[]
//   status: PlanStatus
  comments: Comment[]
  createdAt: Date
  updatedAt: Date
  submittedAt?: Date
  approvedAt?: Date
}
