import { useNavigate } from "@tanstack/react-router";
import { useMutation } from "@tanstack/react-query";
import { PlusIcon, TrashIcon } from "lucide-react";
import clsx from "clsx";

import { ActionButton } from "./action-button";
import { inventoryApi } from "@/entities/inventory";

interface Props {
  className?: string;
}

export const InventoryToolbar = ({ className }: Props) => {
  const navigate = useNavigate();

  const createMutation = useMutation({
    mutationFn: inventoryApi.create,
    onSuccess: (data) => {
      navigate({
        to: "/personal/$inventoryId",
        params: { inventoryId: String(data.id) },
      });
    },
  });

  const deleteMutation = useMutation({
    mutationFn: async () => {},
  });

  const isAnyPending = createMutation.isPending || deleteMutation.isPending;

  return (
    <div className={clsx("flex gap-4", className)}>
      <ActionButton
        title="Create Inventory"
        icon={<PlusIcon />}
        tooltip="Create"
        disabled={isAnyPending}
        loading={createMutation.isPending}
        onClick={() => createMutation.mutate()}
      />

      <ActionButton
        icon={<TrashIcon />}
        tooltip="Delete"
        variant="destructive"
        disabled={isAnyPending}
        loading={deleteMutation.isPending}
        onClick={() => deleteMutation.mutate()}
      />
    </div>
  );
};
