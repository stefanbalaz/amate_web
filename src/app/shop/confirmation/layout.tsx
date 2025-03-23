import { twMerge } from "tailwind-merge";
import { selectedDesignStyle } from "@/lib/utilities/designStyle/designStyle";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { main } = selectedDesignStyle || {};

  return (
    <>
      <div
        className={twMerge(
          "block w-full dark:bg-surface-dark dark:text-white",
          main?.designAdditionalClassName
        )}
      >
        <div className="">{children}</div>
      </div>
    </>
  );
};

export default Layout;
