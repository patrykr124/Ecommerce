
import { cn } from "../lib/utils";

function MaxWithWrapper({ children, className }) {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-screen-2xl px-2.5 md:px-20",
        className
      )}
    >
      {children}
    </div>
  );
}

export default MaxWithWrapper;
