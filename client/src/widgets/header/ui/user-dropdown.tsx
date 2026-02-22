import { useMutation } from "@tanstack/react-query";
import { LogOutIcon } from "lucide-react";

import { authApi } from "@/features/auth";
import type { User } from "@/entities/user";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/shared/shadcn/components/ui/dropdown-menu";
import { useAuthStore } from "@/shared/store/auth-store";
import { Avatar, AvatarFallback } from "@/shared/shadcn/components/ui/avatar";

interface Props {
  user: User;
}

export const UserDropdown = ({ user }: Props) => {
  const logoutMutation = useMutation({ mutationFn: authApi.logout });

  const { logout } = useAuthStore();

  const handleLogout = () => {
    logoutMutation.mutate();

    logout();
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Avatar>
          <AvatarFallback>AS</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end">
        <DropdownMenuGroup>
          <DropdownMenuItem variant="destructive" onSelect={handleLogout}>
            <LogOutIcon /> Sign Out
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
