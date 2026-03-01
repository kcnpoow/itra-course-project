import type { ColumnDef } from "@tanstack/react-table";

import type { Inventory } from "@/entities/inventory/model";

export const inventoryColumns: ColumnDef<Inventory>[] = [
  { accessorKey: "id", header: "Id" },
  {
    accessorKey: "name",
    header: "Name",
  },
];
