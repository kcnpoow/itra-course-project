import { Outlet } from "@tanstack/react-router";

import { Header } from "@/widgets/header";

export const Main = () => {
  return (
    <>
      <Header />

      <main className="container py-4">
        <Outlet />
      </main>
    </>
  );
};
