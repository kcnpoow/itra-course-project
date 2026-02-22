import { Link } from "@tanstack/react-router";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { SiGoogle, SiFacebook } from "@icons-pack/react-simple-icons";

import { authApi } from "../api";
import type { SigninDto } from "../model";
import { Button } from "@/shared/shadcn/components/ui/button";
import {
  Field,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
} from "@/shared/shadcn/components/ui/field";
import { Input } from "@/shared/shadcn/components/ui/input";

export const SigninForm = () => {
  const form = useForm<SigninDto>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const mutation = useMutation({ mutationFn: authApi.signin });

  const onSubmit = (data: SigninDto) => {
    mutation.mutate(data);
  };

  return (
    <form onSubmit={form.handleSubmit(onSubmit)}>
      <FieldGroup>
        <Field>
          <FieldLabel>Email</FieldLabel>

          <Input {...form.register("email")} />
        </Field>

        <Field>
          <div className="flex justify-between">
            <FieldLabel>Password</FieldLabel>

            <Link className="text-sm text-muted-foreground" to="/auth">
              Forgot password?
            </Link>
          </div>

          <Input {...form.register("password")} />
        </Field>

        <Field>
          <Button type="submit">Login</Button>
        </Field>

        <FieldSeparator className="*:data-[slot=field-separator-content]:bg-card">
          or continue with
        </FieldSeparator>

        <Field>
          <Button
            type="button"
            variant="outline"
            onClick={() => authApi.singinWithGoogle()}
            asChild
          >
            <a href="http://localhost:8080/auth/google">
              <SiGoogle /> Login with Google
            </a>
          </Button>

          <Button type="button" variant="outline">
            <SiFacebook /> Login with Facebook
          </Button>
        </Field>
      </FieldGroup>
    </form>
  );
};
