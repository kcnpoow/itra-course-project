import { Link } from "@tanstack/react-router";

import { SignupForm } from "@/features/auth";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/shared/shadcn/components/ui/card";

export const Signup = () => {
  return (
    <Card className="border-none shadow-none">
      <CardHeader>
        <CardTitle>Signup</CardTitle>

        <CardDescription>Enter your credentials to sign up</CardDescription>
      </CardHeader>

      <CardContent>
        <SignupForm />
      </CardContent>

      <CardFooter>
        <p className="mx-auto">
          <span className="text-muted-foreground">
            Already have an account?
          </span>{" "}
          <Link to="/auth/signin">Sign in</Link>
        </p>
      </CardFooter>
    </Card>
  );
};
