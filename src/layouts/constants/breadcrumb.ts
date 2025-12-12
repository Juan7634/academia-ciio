import type { BreadcrumbItemsI } from "../../schema/BreadCrumbI";

export const BREADCRUMB_HOME: BreadcrumbItemsI[] = [
    {
        label: 'Inicio',
        route: null
    }
]

export const BREADCRUMB_SUBJECT: BreadcrumbItemsI[] = [
    {
        label: 'Inicio',
        route: '/app'
    },
    {
        label: 'Materias',
        route: '/app/subjects'
    }

]


export const BREADCRUMB_STUDYPLAN: BreadcrumbItemsI[] = [
    {
        label: 'Inicio',
        route: '/app'
    },
    {
        label: 'Materias',
        route: '/app/subjects'
    },
    {
        label: 'Crear plan de estudio',
        route: null
    }

]

export const BREADCRUMB_STUDYPLAN_REVISE: BreadcrumbItemsI[] = [
    {
        label: 'Inicio',
        route: '/app'
    },
    {
        label: 'Planes de estudio',
        route: null
    }

]
