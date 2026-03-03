import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { AxiosError } from "axios";

import { authApi } from "../api";
import type { SignupDto } from "../model";
import { Button } from "@/shared/shadcn/components/ui/button";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/shared/shadcn/components/ui/field";
import { Input } from "@/shared/shadcn/components/ui/input";
import { Spinner } from "@/shared/shadcn/components/ui/spinner";

export const SignupForm = () => {
  const form = useForm<SignupDto>({
    defaultValues: {
      email: "kcnpoow@gmail.com",
      password: "123456",
      confirmPassword: "123456",
    },
  });

  const signupMutation = useMutation({
    mutationFn: authApi.signup,
    onError: (error) => {
      if (error instanceof AxiosError) {
        if (error.status === 409) {
          form.setError("email", { message: "Email is already registered" });
        }
      }
    },
  });

  return (
    <form
      noValidate
      onSubmit={form.handleSubmit((data) => signupMutation.mutate(data))}
    >
      <fieldset disabled={signupMutation.isPending}>
        <FieldGroup>
          <Field>
            <FieldLabel>Email</FieldLabel>

            <Input
              type="email"
              {...form.register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address",
                },
              })}
            />

            {form.formState.errors.email && (
              <FieldError>{form.formState.errors.email.message}</FieldError>
            )}
          </Field>

          <Field>
            <FieldLabel>Password</FieldLabel>

            <Input
              type="password"
              {...form.register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters long",
                },
              })}
            />

            {form.formState.errors.password && (
              <FieldError>{form.formState.errors.password.message}</FieldError>
            )}
          </Field>

          <Field>
            <FieldLabel>Confirm password</FieldLabel>

            <Input
              type="password"
              {...form.register("confirmPassword", {
                required: "Confirm password is required",
              })}
            />

            {form.formState.errors.confirmPassword && (
              <FieldError>
                {form.formState.errors.confirmPassword.message}
              </FieldError>
            )}
          </Field>

          <Field>
            <Button type="submit">
              {signupMutation.isPending ? <Spinner /> : "Register"}
            </Button>
          </Field>
        </FieldGroup>
      </fieldset>
    </form>
  );
};
