import { Link } from "@tanstack/react-router";

import { SigninForm } from "@/features/auth";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/shared/shadcn/components/ui/card";
import { Button } from "@/shared/shadcn/components/ui/button";

export const Signin = () => {
  return (
    <Card className="border-none shadow-none">
      <CardHeader>
        <CardTitle>Signin</CardTitle>

        <CardDescription>Enter your credentials to sign in</CardDescription>
      </CardHeader>

      <CardContent>
        <SigninForm />
      </CardContent>

      <CardFooter>
        <p className="mx-auto">
          <span className="text-muted-foreground">Don’t have an account?</span>{" "}
          <Button className="p-0" variant="link" asChild>
            <Link to="/auth/signup">Sign up</Link>
          </Button>
        </p>
      </CardFooter>
    </Card>
  );
};
