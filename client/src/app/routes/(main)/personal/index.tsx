import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/(main)/personal/")({
  beforeLoad: () => {
    throw redirect({
      to: "/personal/owned",
      replace: true,
    });
  },
});
