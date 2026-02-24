import { Outlet } from "@tanstack/react-router";

import { Header } from "@/widgets/header";

export const MainLayout = () => {
  return (
    <>
      <Header />

      <main className="container py-4">
        <Outlet />
      </main>
    </>
  );
};
