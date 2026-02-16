import { LoginVariants } from "./login-variants";
import { Button } from "@/shared/shadcn/components/ui/button";
import {
  Field,
  FieldGroup,
  FieldLabel,
} from "@/shared/shadcn/components/ui/field";
import { Input } from "@/shared/shadcn/components/ui/input";
import { Separator } from "@/shared/shadcn/components/ui/separator";

export const SigninForm = () => {
  return (
    <form>
      <FieldGroup>
        <Field>
          <FieldLabel>Email</FieldLabel>

          <Input />
        </Field>

        <Field>
          <FieldLabel>Password</FieldLabel>

          <Input />
        </Field>

        <Field>
          <Button type="submit">Login</Button>
        </Field>

        <Separator />

        <Field>
          <LoginVariants />
        </Field>
      </FieldGroup>
    </form>
  );
};
