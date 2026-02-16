import type { ReactNode } from "react";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../shadcn/components/ui/card";

interface Props {
  children: ReactNode;
  title: string;
}

export const Auth = ({ children, title }: Props) => {
  return (
    <div className="flex items-center justify-center min-w-svw min-h-svh">
      <div className="w-full max-w-sm">
        <Card>
          <CardHeader>
            <CardTitle>{title}</CardTitle>
          </CardHeader>

          <CardContent>{children}</CardContent>
        </Card>
      </div>
    </div>
  );
};
