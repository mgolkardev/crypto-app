export interface ChipsProperties {
  caption: string;
  isActive?: boolean;
  className?: string;
  onClick?: (caption: string) => void;
}
