import { SiGoogle, SiFacebook } from "@icons-pack/react-simple-icons";

import { Button } from "@/shared/shadcn/components/ui/button";
import {
  Field,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
} from "@/shared/shadcn/components/ui/field";
import { Input } from "@/shared/shadcn/components/ui/input";

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

        <FieldSeparator>or continue with</FieldSeparator>

        <Field>
          <Button type="button" variant="outline">
            <SiGoogle /> Login with Google
          </Button>

          <Button type="button" variant="outline">
            <SiFacebook /> Login with Facebook
          </Button>
        </Field>
      </FieldGroup>
    </form>
  );
};
