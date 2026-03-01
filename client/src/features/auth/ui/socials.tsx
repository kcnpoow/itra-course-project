import { useEffect } from "react";
import { SiFacebook, SiGoogle } from "@icons-pack/react-simple-icons";

import { useAuthStore } from "@/shared/store/auth-store";
import { Button } from "@/shared/shadcn/components/ui/button";

const SERVER_URL = import.meta.env.VITE_SERVER_URL;

export const Socials = () => {
  const auth = useAuthStore();

  const handleGoogleAuth = () => {
    window.open(
      `${SERVER_URL}/auth/google`,
      "google-login",
      "width=500,height=600",
    );
  };

  useEffect(() => {
    const handler = (event: MessageEvent) => {
      if (event.data.type === "google-auth-success") {
        auth.login(event.data.user);
      }
    };

    window.addEventListener("message", handler);

    return () => {
      window.removeEventListener("message", handler);
    };
  }, []);

  return (
    <>
      <Button type="button" variant="outline" onClick={handleGoogleAuth}>
        <SiGoogle /> Login with Google
      </Button>

      <Button type="button" variant="outline">
        <SiFacebook /> Login with Facebook
      </Button>
    </>
  );
};
