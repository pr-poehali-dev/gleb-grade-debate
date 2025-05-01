
import React from "react";
import * as LucideIcons from "lucide-react";
import { cn } from "@/lib/utils";

export interface IconProps extends React.HTMLAttributes<HTMLElement> {
  name: string;
  size?: number;
  strokeWidth?: number;
  fallback?: string;
}

const Icon = ({
  name,
  size = 24,
  strokeWidth = 2,
  fallback = "CircleAlert",
  className,
  ...props
}: IconProps) => {
  // Get the icon component from lucide-react
  const LucideIcon = LucideIcons[name as keyof typeof LucideIcons] || 
                     LucideIcons[fallback as keyof typeof LucideIcons];

  if (!LucideIcon) {
    return <span>Icon not found</span>;
  }

  return (
    <LucideIcon
      size={size}
      strokeWidth={strokeWidth}
      className={cn("", className)}
      {...props}
    />
  );
};

export default Icon;
