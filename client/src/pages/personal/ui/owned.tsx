import { useQuery } from "@tanstack/react-query";

import { DataTable, inventoryColumns } from "@/widgets/data-table";
import { InventoryToolbar } from "@/features/inventory-toolbar";
import { inventoryApi } from "@/entities/inventory";

export const Owned = () => {
  const query = useQuery({
    queryKey: ["inventories", "owned"],
    queryFn: inventoryApi.getOwned,
    initialData: [],
  });

  return (
    <>
      <p className="mb-4 text-muted-foreground text-sm">
        Inventories in this section were created by you. You have full control
        to view, edit, and manage their contents
      </p>

      <InventoryToolbar className="mb-4" />

      <DataTable
        columns={inventoryColumns}
        data={query.data}
        getRowLink={(inventoryId: number) => `/personal/${inventoryId}`}
      />
    </>
  );
};
