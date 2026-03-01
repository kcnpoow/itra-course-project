import type { ComponentProps, ReactNode } from "react";

import { Button } from "@/shared/shadcn/components/ui/button";
import { Spinner } from "@/shared/shadcn/components/ui/spinner";

interface Props {
  title?: string;
  icon: ReactNode;
  tooltip?: string;
  variant?: ComponentProps<typeof Button>["variant"];
  disabled: boolean;
  loading: boolean;
  onClick: () => void;
}

export const ActionButton = ({
  title,
  icon,
  tooltip,
  variant = "default",
  disabled,
  loading,
  onClick,
}: Props) => {
  return (
    <Button variant={variant} disabled={disabled} onClick={onClick}>
      {loading ? <Spinner /> : icon} {title}
    </Button>
  );
};
