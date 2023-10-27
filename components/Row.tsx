import { FC } from "react";

export const Row: FC<{ children: React.ReactNode }> = ({ children }) => {
  return <div className="flex flex-wrap">{children}</div>;
};
