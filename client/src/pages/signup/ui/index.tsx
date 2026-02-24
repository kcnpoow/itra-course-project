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
import { Button } from "@/shared/shadcn/components/ui/button";

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
          <Button className="p-0" variant="link" asChild>
            <Link to="/auth/signin">Sign in</Link>
          </Button>
        </p>
      </CardFooter>
    </Card>
  );
};
