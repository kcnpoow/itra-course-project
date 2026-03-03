import { Controller, useForm } from "react-hook-form";
import { useLoaderData } from "@tanstack/react-router";

import { useAutoSave } from "../lib";

import { UpdateSettingsDto } from "../model";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/shared/shadcn/components/ui/field";
import { Input } from "@/shared/shadcn/components/ui/input";
import { Editor } from "@/components/blocks/editor-md/editor";

export const SettingsForm = () => {
  const { inventory } = useLoaderData({
    from: "/(main)/personal/$inventoryId",
  });

  const form = useForm<UpdateSettingsDto>({
    defaultValues: {
      name: inventory.name,
      description: inventory.description,
    },
    mode: "onChange",
  });

  useAutoSave(form, async (data) => {
    console.log(data);
  });

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
    </form>
  );
};
