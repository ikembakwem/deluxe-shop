import { ComponentProps, FC } from "react";

interface Props extends ComponentProps<"div"> {
  children: React.ReactNode;
  className?: string;
}

export const Container: FC<Props> = ({ children, className }) => {
  return (
    <div
      className={`w-full max-w-containerSmall md:max-w-containerMedium lg:max-w-container xl:max-w-containerLarge px-3 mx-auto ${className}`}
    >
      {children}
    </div>
  );
};
