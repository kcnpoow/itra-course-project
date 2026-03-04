import { useLoaderData } from "@tanstack/react-router";

import { SettingsForm } from "@/features/inventory-dashboard";

export const Settings = () => {
  const { inventory } = useLoaderData({
    from: "/(main)/personal/$inventoryId",
  });

  return <SettingsForm inventory={inventory} />;
};
