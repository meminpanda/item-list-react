export interface InputProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
  placeholder?: string;
  disabled?: boolean;
  icon?: string;
  right_icon?: string;
  left_icon?: string;
  required?: boolean;
  value?: string;
  control: any;
  propertyName: string;
  extra_class?: string;
}
