import type { GetInventoryDto, Inventory } from "../model";
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
}

export const inventoryApi = new InventoryApi();
