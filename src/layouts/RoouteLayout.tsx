import { Outlet, ScrollRestoration } from "react-router";
import { Toaster } from 'sonner'

export const RootLayout = () => {
  return (
    <>
      <Toaster 
       position="top-center"
       expand={true}
       richColors  
      />
      <Outlet />
      <ScrollRestoration />
    </>
  );
}
