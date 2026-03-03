import { useEffect, useRef } from "react";
import { FieldValues, UseFormReturn } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";

export const useAutoSave = <T extends FieldValues>(
  form: UseFormReturn<T>,
  mutationFn: (variables: T) => Promise<void>,
  delay = 800,
) => {
  const mutation = useMutation({
    mutationFn,
  });

  const timeoutRef = useRef<number>(null);

  const watchedValues = form.watch();

  useEffect(() => {
    if (!form.formState.isValid || !form.formState.isDirty) {
      return;
    }

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      mutation.mutate(watchedValues);
    }, delay);

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [watchedValues, form.formState.isValid, form.formState.isDirty, delay]);
};
