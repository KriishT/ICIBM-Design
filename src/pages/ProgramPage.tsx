export default function ProgramPage() {
  return (
    <div className="py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-gray-800">Program</h1>

        <div className="bg-blue-50 border-l-4 border-[#005bbb] p-6 rounded mb-8">
          <p className="text-gray-700 text-lg">
            The detailed conference program will be announced closer to the
            conference dates.
          </p>
        </div>

        <div className="bg-white border-2 border-gray-200 rounded p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Conference Schedule Overview
          </h2>
          <div className="space-y-4 text-gray-700">
            <p>
              The conference will take place over four days from August 2-5,
              2026, featuring keynote presentations, parallel sessions,
              workshops, and poster sessions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
