import type { LucideIcon } from "lucide-react";

export interface SidebarSubItemI {
    title : string,
    url : string,
    icon  : LucideIcon
}

export interface SidebarI {
    title : string,
    items : SidebarSubItemI[]
}