import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { Outlet, ScrollRestoration } from "react-router";
import { Toaster } from 'sonner'

const queryClient = new QueryClient();

export const RootLayout = () => {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Toaster
          position="top-center"
          expand={true}
          richColors
        />


        <Outlet />
        <ScrollRestoration />

        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </>
  );
}
