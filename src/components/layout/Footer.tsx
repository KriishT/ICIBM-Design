import { Mail } from "lucide-react";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Information</h3>
            <div className="space-y-2 text-gray-300">
              <p className="flex items-center gap-2">
                <Mail size={16} />
                <a
                  href="mailto:icibm2026@gmail.com"
                  className="hover:text-white"
                >
                  icibm2026@gmail.com
                </a>
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Conference Venue</h3>
            <div className="space-y-2 text-gray-300">
              <p>University at Buffalo</p>
              <p>Buffalo, New York</p>
              <p>United States</p>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Important Links</h3>
            <div className="space-y-2 text-gray-300">
              <Link to="/submission" className="block hover:text-white">
                Submit Paper
              </Link>
              <Link to="/registration" className="block hover:text-white">
                Registration
              </Link>
              <Link to="/program" className="block hover:text-white">
                Program
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center text-gray-400 text-sm">
          <p>
            © 2026 ICIBM - International Conference on Intelligent Biology and
            Medicine. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
