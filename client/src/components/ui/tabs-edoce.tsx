import * as React from "react";
import { cn } from "@/lib/utils";

// Create a context for the tabs state
type TabsContextValue = {
  value: string;
  onValueChange: (value: string) => void;
};

const TabsContext = React.createContext<TabsContextValue | undefined>(undefined);

function useTabsContext() {
  const context = React.useContext(TabsContext);
  if (!context) {
    throw new Error("Tabs components must be used within a TabsEdoce provider");
  }
  return context;
}

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
  ({ className, value, onValueChange, children, ...props }, ref) => {
    // Create a context value
    const context = React.useMemo(
      () => ({ value, onValueChange }),
      [value, onValueChange]
    );

    return (
      <TabsContext.Provider value={context}>
        <div 
          ref={ref} 
          className={cn("", className)} 
          data-value={value}
          data-state={value}
          {...props}
        >
          {children}
        </div>
      </TabsContext.Provider>
    );
  }
);
TabsEdoce.displayName = "TabsEdoce";

const TabsEdoceTrigger = React.forwardRef<HTMLButtonElement, TabsEdoceTriggerProps>(
  ({ className, value, ...props }, ref) => {
    // Use the context hook to get the current tab state
    const { value: selectedValue, onValueChange } = useTabsContext();
    const isActive = selectedValue === value;

    return (
      <button
        ref={ref}
        role="tab"
        type="button"
        aria-selected={isActive}
        data-state={isActive ? "active" : "inactive"}
        className={cn(
          "tab-btn font-montserrat inline-block p-4 rounded-t-lg border-b-2 transition-colors",
          isActive
            ? "border-secondary text-secondary"
            : "border-transparent hover:text-primary hover:border-primary",
          className
        )}
        onClick={() => onValueChange(value)}
        {...props}
      />
    );
  }
);
TabsEdoceTrigger.displayName = "TabsEdoceTrigger";

const TabsEdoceContent = React.forwardRef<HTMLDivElement, TabsEdoceContentProps>(
  ({ className, value, ...props }, ref) => {
    // Use the context hook to get the current tab state
    const { value: selectedValue } = useTabsContext();
    const isActive = selectedValue === value;

    if (!isActive) return null;

    return (
      <div
        ref={ref}
        role="tabpanel"
        data-state={isActive ? "active" : "inactive"}
        className={cn("tab-content", className)}
        {...props}
      />
    );
  }
);
TabsEdoceContent.displayName = "TabsEdoceContent";

export { TabsEdoce, TabsEdoceTrigger, TabsEdoceContent };
