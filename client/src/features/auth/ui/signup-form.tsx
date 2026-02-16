import { Button } from "@/shared/shadcn/components/ui/button";
import {
  Field,
  FieldGroup,
  FieldLabel,
} from "@/shared/shadcn/components/ui/field";
import { Input } from "@/shared/shadcn/components/ui/input";

export const SignupForm = () => {
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
          <FieldLabel>Confirm password</FieldLabel>

          <Input />
        </Field>

        <Field>
          <Button type="submit">Register</Button>
        </Field>
      </FieldGroup>
    </form>
  );
};
