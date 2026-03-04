import { Controller, useForm } from "react-hook-form";

import { useAutoSave } from "../lib";

import { Inventory } from "@/entities/inventory/model";
import { inventoryApi, UpdateSettingsDto } from "@/entities/inventory";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/shared/shadcn/components/ui/field";
import { Input } from "@/shared/shadcn/components/ui/input";
import { Editor } from "@/components/blocks/editor-md/editor";

interface Props {
  inventory: Inventory;
}

export const SettingsForm = ({ inventory }: Props) => {
  const form = useForm<UpdateSettingsDto>({
    defaultValues: {
      name: inventory.name,
      description: inventory.description,
    },
    mode: "onChange",
  });

  const autoSave = useAutoSave(inventory.id, form, inventoryApi.updateSettings);

  return (
    <form>
      <FieldGroup>
        <Field>
          <FieldLabel>Name</FieldLabel>

          <Input
            className="max-w-xs"
            placeholder="Name"
            {...form.register("name", { required: "Name is required" })}
          />

          <FieldError>{form.formState.errors.description?.message}</FieldError>
        </Field>

        <Field>
          <FieldLabel>Description</FieldLabel>

          <Controller
            control={form.control}
            name="description"
            render={({ field }) => (
              <Editor
                markdown={field.value}
                onMarkdownChange={field.onChange}
              />
            )}
          />
        </Field>
      </FieldGroup>

      {autoSave.isSaving && "pending"}
    </form>
  );
};
