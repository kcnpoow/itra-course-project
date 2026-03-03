import { createFileRoute } from "@tanstack/react-router";

import { Signin } from "@/pages/auth";

export const Route = createFileRoute("/auth/signin")({
  component: Signin,
});
