import { Separator } from "@radix-ui/react-separator"
import { AppSidebar } from "../components/app-sidebar"
import { SidebarInset, SidebarProvider, SidebarTrigger } from "../components/ui/sidebar"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "../components/ui/breadcrumb"
import { Link, Outlet, useMatches } from "react-router"
import { Fragment } from "react/jsx-runtime"

interface BreadcrumbHandle {
    breadcrumb?: { label: string; route?: string };
}

export const AuthenticatedLayout = () => {

    const matches = useMatches();

    const crumbs = matches
        .filter((m) => (m.handle as BreadcrumbHandle | undefined)?.breadcrumb)
        .map((m) => (m.handle as BreadcrumbHandle).breadcrumb)
        .flat();

    return (
        <SidebarProvider>
            <AppSidebar />
            <SidebarInset>
                <header className="flex h-16 shrink-0 items-center gap-2 border-b">
                    <div className="flex items-center gap-2 px-3">
                        <SidebarTrigger />
                        <Separator orientation="vertical" className="mr-2 h-4" />

                        {/* Breadcrumb dinámico */}
                        <Breadcrumb>
                            <BreadcrumbList>
                                {crumbs.length > 0 && crumbs.map((item, i) => (
                                    <Fragment key={i}>
                                        <BreadcrumbItem>
                                            {item?.route ? (
                                                <Link to={item?.route}>{item?.label}</Link>
                                            ) : (
                                                <BreadcrumbPage>{item?.label}</BreadcrumbPage>
                                            )}
                                        </BreadcrumbItem>

                                        {i < crumbs.length - 1 && (
                                            <BreadcrumbSeparator className="hidden md:block" />
                                        )}
                                    </Fragment>
                                ))}
                            </BreadcrumbList>
                        </Breadcrumb>
                    </div>
                </header>
                <div className="p-5 bg-background">
                    <Outlet />
                </div>
            </SidebarInset>
        </SidebarProvider>
    )
}
