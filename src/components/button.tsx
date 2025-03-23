import { twMerge } from "tailwind-merge";
import { selectedDesignStyle } from "@/lib/utilities/designStyle/designStyle";
import { ButtonRounded, ButtonSize } from "@/app/types";
import { Children } from "react";

export default function Button({ children }: { children: React.ReactNode }) {
  const { button: buttonDesignStyle } = selectedDesignStyle || {};

  // Button size

  const getButtonSize = (size: ButtonSize) => {
    switch (size) {
      case "small":
        return "px-4 pb-[5px] pt-[6px] text-xs font-medium";

      case "medium":
        return "px-6 pb-2 pt-2.5 text-xs font-medium";

      case "large":
        return "px-7 pb-2.5 pt-3 text-sm font-medium";

      default:
        return "px-4 pb-[5px] pt-[6px] text-xs font-medium";
    }
  };

  // const buttonSize = getButtonSize(buttonDesignStyle?.size);
  const buttonSize =
    typeof buttonDesignStyle?.size === "string"
      ? getButtonSize(buttonDesignStyle?.size as ButtonSize)
      : "";

  // Rounded button

  const getRoundedButton = (rounded: ButtonRounded) => {
    switch (rounded) {
      case "undefined":
        return "";

      case "rounded":
        return "rounded";

      case "rounded-md":
        return "rounded-md";

      case "rounded-full":
        return "rounded-full";

      default:
        return "";
    }
  };

  const roundedButton =
    typeof buttonDesignStyle?.rounded === "string"
      ? getRoundedButton(buttonDesignStyle?.rounded as ButtonRounded)
      : "";

  return (
    <button
      type="button"
      className={twMerge(
        "inline-block  uppercase leading-normal shadow-primary-3 transition duration-150 ease-in-out motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong",
        buttonSize,
        roundedButton,
        buttonDesignStyle?.primary?.color,
        buttonDesignStyle?.primary?.style
      )}
    >
      {/* Primary */}
      {children}
    </button>
  );
}
