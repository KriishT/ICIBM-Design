export default function SponsorsPage() {
  return (
    <div className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-12 text-center text-gray-800">
          Sponsors
        </h1>

        <div className="bg-blue-50 border-l-4 border-[#005bbb] p-6 rounded">
          <h3 className="font-bold text-lg mb-2">Interested in Sponsoring?</h3>
          <p className="text-gray-700">
            For sponsorship opportunities, please contact us at{" "}
            <a
              href="mailto:icibm2026@gmail.com"
              className="text-[#005bbb] hover:underline font-semibold"
            >
              icibm2026@gmail.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
