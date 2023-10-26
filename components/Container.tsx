import { FC } from "react";

export const Container: FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="w-full max-w-containerSmall md:max-w-containerMedium lg:max-w-container xl:max-w-containerLarge px-3 mx-auto">
      {children}
    </div>
  );
};
