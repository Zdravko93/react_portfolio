export type AnchorButtonProps = {
  href: string;
  type?: never;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>;

export type NativeButtonProps = {
  href?: never;
  type?: "button" | "submit" | "reset";
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export type CommonProps = {
  className?: string;
  children: React.ReactNode;
  onClick?: (
    e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>,
  ) => void;
};

export type ButtonProps =
  | (AnchorButtonProps & CommonProps)
  | (NativeButtonProps & CommonProps);
