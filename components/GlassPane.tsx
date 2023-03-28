import clsx from "clsx";

interface GlassPaneProps {
  children: React.ReactNode;
  className?: string;
}

const GlassPane: React.FC<GlassPaneProps> = ({ children, className }) => {
  return (
    <div
      className={clsx(
        "glass rounded-2xl border-solid border-2 border-gray-200",
        className
      )}
    >
      {children}
    </div>
  );
};

export default GlassPane;