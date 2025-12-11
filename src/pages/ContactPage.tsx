export default function ContactPage() {
  return (
    <div className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">
          Contact
        </h1>

        <div className="bg-white border-2 border-gray-200 rounded-lg p-8 text-center">
          <p className="text-lg text-gray-700 mb-8">
            For general information please contact us at{" "}
            <a
              href="mailto:icibm2026@gmail.com"
              className="text-[#005bbb] hover:underline font-semibold"
            >
              icibm2026@gmail.com
            </a>
          </p>

          <div className="mt-8 text-gray-700">
            <p className="mb-2">
              <strong>Website:</strong>{" "}
              <a
                href="http://icibm2026.iaibm.org"
                className="text-[#005bbb] hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                icibm2026.iaibm.org
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
