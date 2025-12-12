import { createBrowserRouter, Navigate, RouterProvider } from "react-router";
import { RootLayout } from "./layouts/RoouteLayout";
import ProtectedRouteForLogin from "./layouts/ProtectedRouteForLogin";
import { LoginPage } from "./pages/auth/LoginPage";
import ProtectedRoute from "./layouts/ProtectedRoute";
import { HomePage } from "./pages/home/HomePage";
import { AuthenticatedLayout } from "./layouts/AuthenticatedLayout";
import { SubjectPage } from "./pages/subjects/SubjectPage";
import { BREADCRUMB_HOME, BREADCRUMB_STUDYPLAN, BREADCRUMB_STUDYPLAN_REVISE, BREADCRUMB_SUBJECT, } from "./layouts/constants/breadcrumb";
import { CreateStudyPlanPage } from "./pages/plans/CreateStudyPlanPage";
import { RevisionPlanTable } from "./pages/plans/RevisionPlanTable";

export const App = () => {



  const router = createBrowserRouter([
    {
      path: "/",
      element: < RootLayout />,
      children: [
        {
          path: '/',
          element: <Navigate to="/app" replace />,
        },
        {
          path: '/auth/login',
          element: (
            <ProtectedRouteForLogin>
              <LoginPage />
            </ProtectedRouteForLogin>
          )
        },
        {
          path: "app",
          element: (
            <ProtectedRoute>
              <AuthenticatedLayout />
            </ProtectedRoute>
          ),
          children: [
            {
              index: true, element: <HomePage />,
              handle: {
                breadcrumb: BREADCRUMB_HOME
              }
            },
            {
              path: 'subjects',
              element: <SubjectPage />,
              handle: {
                breadcrumb: BREADCRUMB_SUBJECT
              }
            }, {
              path: 'plans/create',
              element: <CreateStudyPlanPage />,
              handle: {
                breadcrumb: BREADCRUMB_STUDYPLAN
              }
            },
            {
              path: 'plans/revise',
              element: <RevisionPlanTable />,
              handle: {
                breadcrumb: BREADCRUMB_STUDYPLAN_REVISE
              }
            }
          ]
        }
      ]

    },
  ]);

  return (
    <RouterProvider router={router} />
  )
}
