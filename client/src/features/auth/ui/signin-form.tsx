import { AxiosError } from "axios";
import { useForm } from "react-hook-form";
import { Link } from "@tanstack/react-router";
import { useMutation } from "@tanstack/react-query";

import { Socials } from "./socials";
import { authApi } from "../api";
import type { SigninDto } from "../model";
import { Button } from "@/shared/shadcn/components/ui/button";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
} from "@/shared/shadcn/components/ui/field";
import { Input } from "@/shared/shadcn/components/ui/input";
import { Alert, AlertDescription } from "@/shared/shadcn/components/ui/alert";
import { Spinner } from "@/shared/shadcn/components/ui/spinner";
import { useAuthStore } from "@/shared/store/auth-store";

export const SigninForm = () => {
  const auth = useAuthStore();

  const form = useForm<SigninDto>({
    defaultValues: {
      email: "kcnpoow@gmail.com",
      password: "123456",
    },
  });

  const signinMutation = useMutation({
    mutationFn: authApi.signin,
    onSuccess: (data) => {
      auth.login(data);
    },
    onError: (error) => {
      if (error instanceof AxiosError) {
        if (error.status === 401) {
          form.setError("root", {
            message: "Incorrect email or password",
          });
        }
      }
    },
  });

  const onSubmit = (data: SigninDto) => {
    signinMutation.mutate(data);
  };

  return (
    <form noValidate onSubmit={form.handleSubmit(onSubmit)}>
      <fieldset disabled={signinMutation.isPending}>
        <FieldGroup>
          <Field>
            <FieldLabel>Email</FieldLabel>

            <Input
              {...form.register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address",
                },
                onChange: () => {
                  form.clearErrors("root");
                },
              })}
            />

            {form.formState.errors.email && (
              <FieldError>{form.formState.errors.email.message}</FieldError>
            )}
          </Field>

          <Field>
            <div className="flex justify-between">
              <FieldLabel>Password</FieldLabel>

              <Link className="text-sm text-muted-foreground" to="/auth">
                Forgot password?
              </Link>
            </div>

            <Input
              type="password"
              {...form.register("password", {
                required: "Password is required",
                onChange: () => {
                  form.clearErrors("root");
                },
              })}
            />

            {form.formState.errors.password && (
              <FieldError>{form.formState.errors.password.message}</FieldError>
            )}
          </Field>

          {form.formState.errors.root && (
            <Field>
              <Alert variant="destructive">
                <AlertDescription className="justify-center">
                  {form.formState.errors.root.message}
                </AlertDescription>
              </Alert>
            </Field>
          )}

          <Field>
            <Button type="submit">
              {signinMutation.isPending ? <Spinner /> : "Login"}
            </Button>
          </Field>

          <FieldSeparator className="*:data-[slot=field-separator-content]:bg-card">
            or continue with
          </FieldSeparator>

          <Field>
            <Socials />
          </Field>
        </FieldGroup>
      </fieldset>
    </form>
  );
};
