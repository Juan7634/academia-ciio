import "react-router";
import type { BreadcrumbItemsI } from "./schema/BreadCrumbI";

declare module "react-router" {
  interface RouteHandle {
    breadcrumb?: BreadcrumbItemsI[];
  }
}