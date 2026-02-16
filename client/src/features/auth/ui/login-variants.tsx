import { SiGoogle } from "@icons-pack/react-simple-icons";

import { Button } from "@/shared/shadcn/components/ui/button";

export const LoginVariants = () => {
  return (
    <>
      <Button type="button" variant="outline">
        <SiGoogle />
        Login with Google
      </Button>

      <Button type="button" variant="outline">
        Login with Facebook
      </Button>
    </>
  );
};
