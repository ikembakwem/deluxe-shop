import { FC } from "react";

export const Col: FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="w-full shrink-0 grow-0 basis-auto xl:w-1/4 lg:w-1/3 md:w-1/2 px-3 max-w-full">
      {children}
    </div>
  );
};
