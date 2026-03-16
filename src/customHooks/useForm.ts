import { useState, useMemo, useEffect, ChangeEvent, FormEvent } from "react";
import toast from "react-hot-toast";

type ValidationErrors<T> = Partial<Record<keyof T, string>>;

// Simple typed debounce utility
function createDebounce<T extends (...args: any[]) => void>(
  fn: T,
  delay: number,
) {
  let timeout: ReturnType<typeof setTimeout>;

  const debounced = (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => fn(...args), delay);
  };

  debounced.cancel = () => {
    clearTimeout(timeout);
  };

  return debounced as T & { cancel: () => void };
}

export function useForm<T extends object>(
  initialValues: T,
  validate: (values: T) => ValidationErrors<T>,
) {
  const [values, setValues] = useState<T>(initialValues);
  const [errors, setErrors] = useState<ValidationErrors<T>>({});

  const debouncedValidate = useMemo(() => {
    return createDebounce((vals: T) => {
      const fieldErrors = validate(vals);
      setErrors(fieldErrors);
    }, 300);
  }, [validate]);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;

    setValues((prev) => {
      const key = name as keyof T;

      const updated = {
        ...prev,
        [key]: value,
      };

      debouncedValidate(updated);
      return updated;
    });
  };

  const handleSubmit =
    (callback: () => Promise<void>) =>
    async (e?: FormEvent<HTMLFormElement>) => {
      e?.preventDefault();

      const validationErrors = validate(values);
      setErrors(validationErrors);

      if (Object.keys(validationErrors).length === 0) {
        try {
          await callback();
        } catch (error: unknown) {
          console.error("Submit callback error:", error);
          toast.dismiss();
          toast.error("An unexpected error occurred during submission.");
        }
      } else {
        toast.dismiss();
        toast.error("Please fill out all fields correctly.");
      }
    };

  useEffect(() => {
    return () => {
      debouncedValidate.cancel();
    };
  }, [debouncedValidate]);

  const resetForm = () => {
    setValues(initialValues);
    setErrors({});
  };

  return {
    values,
    errors,
    handleChange,
    handleSubmit,
    resetForm,
  };
}
