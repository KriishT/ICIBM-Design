import { Calendar, MapPin, Mail } from "lucide-react";

export default function TopBar() {
  return (
    <div className="bg-[#005bbb] text-white py-2 px-4">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center text-sm gap-2">
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <span className="flex items-center gap-2">
            <Calendar size={16} />
            August 2–5, 2026
          </span>

          <span className="flex items-center gap-2">
            <MapPin size={16} />
            University at Buffalo, New York, USA
          </span>
        </div>

        <a
          href="mailto:icibm2026@gmail.com"
          className="flex items-center gap-2 hover:text-gray-200"
        >
          <Mail size={16} />
          icibm2026@gmail.com
        </a>
      </div>
    </div>
  );
}
