import { useForm } from "react-hook-form";
import { SearchIcon } from "lucide-react";

import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/shared/shadcn/components/ui/input-group";

export const Search = () => {
  const form = useForm();

  const onSubmit = () => {};

  return (
    <form onSubmit={form.handleSubmit(onSubmit)}>
      <InputGroup>
        <InputGroupInput placeholder="Search" />

        <InputGroupAddon align="inline-end">
          <InputGroupButton type="submit">
            <SearchIcon />
          </InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
    </form>
  );
};
