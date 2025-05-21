import * as React from "react";
import { cn } from "@/lib/utils";

interface TabsEdoceProps extends React.HTMLAttributes<HTMLDivElement> {
  value: string;
  onValueChange: (value: string) => void;
}

interface TabsEdoceTriggerProps extends React.HTMLAttributes<HTMLButtonElement> {
  value: string;
}

interface TabsEdoceContentProps extends React.HTMLAttributes<HTMLDivElement> {
  value: string;
}

const TabsEdoce = React.forwardRef<HTMLDivElement, TabsEdoceProps>(
  ({ className, value, onValueChange, ...props }, ref) => {
    return (
      <div 
        ref={ref} 
        className={cn("", className)} 
        data-value={value}
        data-state={value}
        // The onValueChange prop is handled internally and not passed to the DOM
        {...props}
      >
        {/* Actual tabs are handled via context and triggers */}
        {React.Children.map(props.children, (child) => {
          if (React.isValidElement(child)) {
            return React.cloneElement(child, { value, onValueChange } as any);
          }
          return child;
        })}
      </div>
    );
  }
);
TabsEdoce.displayName = "TabsEdoce";

const TabsEdoceTrigger = React.forwardRef<HTMLButtonElement, TabsEdoceTriggerProps>(
  ({ className, value, ...props }, ref) => {
    // This is coming from the parent TabsEdoce component via cloneElement
    const { value: selectedValue, onValueChange } = (props as any);
    const isActive = selectedValue === value;

    return (
      <button
        ref={ref}
        className={cn(
          "tab-btn font-montserrat inline-block p-4 rounded-t-lg border-b-2 transition-colors",
          isActive
            ? "border-secondary text-secondary"
            : "border-transparent hover:text-primary hover:border-primary",
          className
        )}
        onClick={() => onValueChange?.(value)}
        {...props}
      />
    );
  }
);
TabsEdoceTrigger.displayName = "TabsEdoceTrigger";

const TabsEdoceContent = React.forwardRef<HTMLDivElement, TabsEdoceContentProps>(
  ({ className, value, ...props }, ref) => {
    // This is coming from the parent TabsEdoce component via cloneElement
    const { value: selectedValue } = (props as any);
    const isActive = selectedValue === value;

    if (!isActive) return null;

    return (
      <div
        ref={ref}
        className={cn("tab-content", isActive ? "block" : "hidden", className)}
        {...props}
      />
    );
  }
);
TabsEdoceContent.displayName = "TabsEdoceContent";

export { TabsEdoce, TabsEdoceTrigger, TabsEdoceContent };
