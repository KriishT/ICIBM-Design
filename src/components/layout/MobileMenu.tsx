import { Link, useLocation } from "react-router-dom";

export default function MobileMenu({
  open,
  items,
  close,
}: {
  open: boolean;
  items: any[];
  close: () => void;
}) {
  const location = useLocation();

  if (!open) return null;

  return (
    <div className="lg:hidden bg-white border-t border-gray-200">
      <div className="px-4 py-4 space-y-2">
        {items.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            onClick={close}
            className={`block w-full text-left px-4 py-3 rounded-md text-gray-700 hover:bg-gray-50 ${
              location.pathname === item.path
                ? "bg-gray-100 text-[#005bbb]"
                : ""
            }`}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
