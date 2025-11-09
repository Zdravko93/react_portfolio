import { useState, useCallback, useEffect } from "react";
import debounce from "lodash.debounce";
import toast from "react-hot-toast";

export function useForm(initialValues, validate) {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});

  // Create a debounced validation function
  const debouncedValidate = useCallback(
    debounce((vals) => {
      const fieldErrors = validate(vals);
      setErrors(fieldErrors);
    }, 300), // 300ms debounce delay
    [validate]
  );

  const handleChange = (e) => {
    const { name, value } = e.target;

    setValues((prev) => {
      const newValues = { ...prev, [name]: value };

      // Run debounced validation on the updated values
      debouncedValidate(newValues);

      return newValues;
    });
  };

  const handleSubmit = (callback) => async (e) => {
    e?.preventDefault?.();

    const validationErrors = validate(values);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      try {
        await callback(); // await the async submit handler
      } catch (error) {
        console.log("Submit callback error:", error);
        toast.dismiss();
        toast.error("An unexpected error occurred during submission.");
      }
    } else {
      toast.dismiss();
      toast.error("Please fill out all fields correctly.");
    }
  };

  // Cleanup debounce on unmount to avoid memory leaks
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
