import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const navigate = useNavigate();

  const keynoteSpeakers = [
    {
      name: "Gary Bader, Ph.D.",
      title: "Professor",
      institution: "University of Toronto",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
    },
    {
      name: "To Be Announced",
      title: "Keynote Speaker",
      institution: "TBA",
      image:
        "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop",
    },
    {
      name: "To Be Announced",
      title: "Keynote Speaker",
      institution: "TBA",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
    },
  ];

  return (
    <>
      <section className="relative bg-gradient-to-r from-[#005bbb] to-[#003d7a] text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://www.buffalo.edu/content/www/advancement/work-with-us/about-the-university/_jcr_content/par/image_386387655.img.1920.612.jpg/1654610309624.jpg"
            alt="University at Buffalo Campus"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-20 relative z-10 text-center">
          <span className="inline-block px-4 py-2 bg-white/10 rounded text-sm font-medium mb-6">
            14th International Conference
          </span>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            International Conference on
            <br />
            Intelligent Biology and Medicine
          </h1>

          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
            ICIBM 2026 brings together leading scholars and experts from
            bioinformatics, computational biology, systems biology,
            computational medicine, and experimental biomedical research. The
            conference provides a collegial and stimulating environment that
            fosters in-depth discussions, collaborations, and networking among
            participants from academia, industry, and government.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <div className="bg-white/10 backdrop-blur-sm px-6 py-4 rounded">
              <div className="text-2xl md:text-3xl font-bold">
                August 2–5, 2026
              </div>
              <div className="text-sm">Conference Dates</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm px-6 py-4 rounded">
              <div className="text-2xl md:text-3xl font-bold">Buffalo, NY</div>
              <div className="text-sm">University at Buffalo</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => navigate("/submission")}
              className="px-8 py-3 bg-white text-[#005bbb] font-semibold rounded hover:bg-gray-100 transition-colors"
            >
              Submit Paper
            </button>
            <button
              onClick={() => navigate("/registration")}
              className="px-8 py-3 bg-transparent border-2 border-white text-white font-semibold rounded hover:bg-white/10 transition-colors"
            >
              Register Now
            </button>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">
              Keynote Speakers
            </h2>
            <p className="text-lg text-gray-600">
              World-renowned experts at the forefront of biomedical research
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {keynoteSpeakers.map((speaker, idx) => (
              <div
                key={idx}
                className="bg-white border border-gray-200 rounded overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="h-64 overflow-hidden bg-gray-100">
                  <img
                    src={speaker.image}
                    alt={speaker.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold text-gray-800 mb-2">
                    {speaker.name}
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">{speaker.title}</p>
                  <p className="text-sm font-semibold text-[#005bbb]">
                    {speaker.institution}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">
            Call for Papers
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            We invite submissions presenting original advances in
            bioinformatics, AI, systems biology, and biomedical informatics.
          </p>
          <button
            onClick={() => navigate("/submission")}
            className="px-8 py-3 bg-[#005bbb] text-white font-semibold rounded hover:bg-[#003d7a] transition-colors"
          >
            View Submission Guidelines
          </button>
        </div>
      </section>
    </>
  );
}
