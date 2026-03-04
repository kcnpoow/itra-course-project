import { useEffect, useRef } from "react";
import { FieldValues, UseFormReturn, useWatch } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";

export const useAutoSave = <T extends FieldValues>(
  inventoryId: number,
  form: UseFormReturn<T>,
  mutationFn: (variables: { inventoryId: number; data: T }) => Promise<void>,
  delay = 1000,
) => {
  const timeoutRef = useRef<number>(null);
  const isSavingRef = useRef(false);

  const mutation = useMutation({
    mutationFn,
    onMutate: () => {
      isSavingRef.current = true;
    },
    onSettled: () => {
      isSavingRef.current = false;
    },
  });

  const formData = useWatch({ control: form.control });

  useEffect(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(async () => {
      const isValid = form.formState.isValid;

      if (isValid && !isSavingRef.current) {
        mutation.mutate({
          inventoryId,
          data: formData as T,
        });
      }
    }, delay);

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [inventoryId, formData, delay]);

  return { isSaving: isSavingRef.current };
};
