import { Outlet, ScrollRestoration } from "react-router";

export const RootLayout =() =>  {
  return (
    <>
      <Outlet />
      <ScrollRestoration />
    </>
  );
}
