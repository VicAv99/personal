import * as icons from "lucide-react";

interface IconProps extends icons.LucideProps {
  name: keyof typeof icons;
}

export function Icon({ name, color, size, ...props }: IconProps) {
  const LucideIcon = icons[name] as icons.LucideIcon;

  return <LucideIcon {...props} color={color} size={size} />;
}
