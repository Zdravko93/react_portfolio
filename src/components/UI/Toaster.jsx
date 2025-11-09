import { Toaster } from "react-hot-toast";

import { useTheme } from "../../context/ThemeContext";

export default function CustomToaster() {
  const { theme } = useTheme();

  const themeBorder =
    theme === "dark" ? "1px solid #374151" : "1px solid #e5e7eb";

  return (
    <Toaster
      position="bottom-right"
      toastOptions={{
        style: {
          background: "#1f2937",
          color: "#f9fafb",
          fontSize: "0.75rem",
          padding: "0.5rem 0.75rem",
          borderRadius: "0.375rem",
          border: themeBorder,
        },
        success: {
          iconTheme: {
            primary: "#00ff88",
            secondary: "#1f2937",
          },
        },
        error: {
          iconTheme: {
            primary: "#ff4d4f",
            secondary: "#1f2937",
          },
        },
      }}
    />
  );
}
