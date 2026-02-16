import { SigninForm } from "@/features/auth";
import { Auth } from "@/shared/layouts/auth";

export const Signin = () => {
  return (
    <Auth title="Signin">
      <SigninForm />
    </Auth>
  );
};
