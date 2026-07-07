import { Toaster as Sonner } from "sonner";
import { useTheme } from "@/contexts/ThemeContext";

type ToasterProps = React.ComponentProps<typeof Sonner>;

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme } = useTheme();

  return (
    <Sonner
      theme={theme}
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-white group-[.toaster]:text-navy group-[.toaster]:border-border group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-slate-text",
          actionButton: "group-[.toast]:bg-navy group-[.toast]:text-white",
          cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-slate-text",
        },
      }}
      {...props}
    />
  );
};

export { Toaster };
