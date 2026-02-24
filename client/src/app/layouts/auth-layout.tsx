import { Outlet } from "@tanstack/react-router";

export const AuthLayout = () => {
  return (
    <div className="flex items-center justify-center min-w-svw min-h-svh dark:max-sm:bg-card">
      <div className="w-full max-w-sm">
        <Outlet />
      </div>
    </div>
  );
};
