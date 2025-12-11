import React from "react";

export default function RegistrationPage() {
  return (
    <div className="py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-gray-800">
          Register for ICIBM 2026
        </h1>

        <div className="bg-blue-50 border-l-4 border-[#005bbb] p-6 rounded mb-8">
          <p className="text-gray-700">
            Registration information will be available soon. Please check back
            for details on conference registration and fees.
          </p>
        </div>

        <div className="bg-white border-2 border-gray-200 rounded p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Registration Opens
          </h2>
          <p className="text-gray-700 mb-4">
            Early registration opens on <strong>June 1, 2026</strong>.
          </p>
          <p className="text-gray-700">
            Early registration deadline is <strong>July 1, 2026</strong>.
          </p>
        </div>
      </div>
    </div>
  );
}
