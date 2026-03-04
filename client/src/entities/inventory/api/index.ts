import type { GetInventoryDto, Inventory, UpdateSettingsDto } from "../model";
import { api } from "@/shared/api/base";

class InventoryApi {
  private readonly BASE_URL = "/inventories";

  public create = async (): Promise<Inventory> => {
    const url = `${this.BASE_URL}`;

    const response = await api.post(url);

    return response.data;
  };

  public get = async (data: GetInventoryDto): Promise<Inventory> => {
    const url = `${this.BASE_URL}/${data.inventoryId}`;

    const response = await api.get(url);

    return response.data;
  };

  public getOwned = async () => {
    const url = `${this.BASE_URL}/owned`;

    const response = await api.get(url);

    return response.data;
  };

  public updateSettings = async ({
    inventoryId,
    data,
  }: {
    inventoryId: number;
    data: UpdateSettingsDto;
  }) => {
    const url = `${this.BASE_URL}/${inventoryId}/update-settings`;

    const response = await api.patch(url, data);

    return response.data;
  };
}

export const inventoryApi = new InventoryApi();
