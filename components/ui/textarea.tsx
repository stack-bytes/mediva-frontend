import * as React from "react";
import { TextInput, type TextInputProps } from "react-native";
import { cn } from "@/lib/utils";

const Textarea = React.forwardRef<
  React.ElementRef<typeof TextInput>,
  TextInputProps
>(
  (
    {
      className,
      multiline = true,
      numberOfLines = 4,
      placeholderClassName,
      ...props
    },
    ref
  ) => {
    return (
      <TextInput
        ref={ref}
        className={cn(
          "native:text-lg native:leading-[1.25] min-h-[80px] w-full rounded-2xl border border-border bg-card px-3 py-2 text-base text-text-primary placeholder:text-text-foreground web:flex web:ring-offset-background web:focus-visible:outline-none web:focus-visible:ring-2 web:focus-visible:ring-ring web:focus-visible:ring-offset-2 lg:text-sm",
          props.editable === false && "opacity-50 web:cursor-not-allowed",
          className
        )}
        placeholderClassName={cn("text-text-secondary", placeholderClassName)}
        multiline={multiline}
        numberOfLines={numberOfLines}
        textAlignVertical="top"
        {...props}
      />
    );
  }
);

Textarea.displayName = "Textarea";

export { Textarea };
