import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate,
  useLocation,
} from "react-router-dom";
import { Calendar, MapPin, Mail, Menu, X } from "lucide-react";

// Layout Component with Navigation
function Layout({ children }: { children: React.ReactNode }) {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/submission", label: "Submission" },
    { path: "/important-dates", label: "Important Dates" },
    { path: "/registration", label: "Registration" },
    { path: "/program", label: "Program" },
    { path: "/organization", label: "Organization" },
    { path: "/travel", label: "Travel" },
    { path: "/sponsors", label: "Sponsors" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Top Bar */}
      <div className="bg-[#005bbb] text-white py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center text-sm gap-2">
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <span className="flex items-center gap-2">
              <Calendar size={16} />
              August 2-5, 2026
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

      {/* Navigation */}
      <nav className="bg-white border-b-2 border-gray-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <Link to="/" className="flex items-center gap-4">
              <div className="text-left">
                <h1 className="text-2xl font-bold text-[#005bbb]">
                  ICIBM 2026
                </h1>
                <p className="text-xs text-gray-600">
                  International Conference on Intelligent Biology and Medicine
                </p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-4 py-2 text-sm font-medium transition-colors ${
                    location.pathname === item.path
                      ? "text-[#005bbb] border-b-2 border-[#005bbb]"
                      : "text-gray-700 hover:text-[#005bbb]"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200">
            <div className="px-4 py-4 space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-gray-50"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      {children}

      {/* Footer */}
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
    </div>
  );
}

// Home Page Component
function HomePage() {
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
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#005bbb] to-[#003d7a] text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://www.buffalo.edu/content/www/advancement/work-with-us/about-the-university/_jcr_content/par/image_386387655.img.1920.612.jpg/1654610309624.jpg"
            alt="University at Buffalo Campus"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-20 relative z-10">
          <div className="text-center">
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-white/10 rounded text-sm font-medium">
                14th International Conference
              </span>
            </div>

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
                  August 2-5, 2026
                </div>
                <div className="text-sm">Conference Dates</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-6 py-4 rounded">
                <div className="text-2xl md:text-3xl font-bold">
                  Buffalo, NY
                </div>
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
        </div>
      </section>

      {/* Keynote Speakers */}
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

      {/* Call for Papers Preview */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">
            Call for Papers
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            We invite you to submit papers and abstracts presenting original,
            unpublished work that describes recent advances in all areas of
            bioinformatics, artificial intelligence, systems biology, and
            biomedical informatics.
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

// Submission Page
function SubmissionPage() {
  const topicsBioinformatics = [
    "Genomics and genetics/epigenetics, including integrative & functional genomics, genome evolution",
    "Next-generation sequencing data analysis, 3D genome",
    "Big data science including storage, analysis, modeling, visualization, and cloud",
    "Precision medicine, translational bioinformatics",
    "Drug discovery, design, and re-purposing",
    "Proteomics, and protein structure prediction, function, and interactions",
    "Single-cell sequencing data analysis",
    "Spatial omics data analysis",
    "Microbiome and metagenomics",
    "Multi-dimensional omics data integration",
  ];

  const topicsAI = [
    "Artificial intelligence, machine learning, deep learning, data mining, knowledge discovery",
    "Large language model, foundation model, and computer vision in biomedical",
    "Natural language processing, literature mining, semantic ontology, and health informatics",
    "Evolutionary computing, swarm intelligence / optimization, ensemble methods",
    "Artificial life and artificial immune system",
    "Biomedical image analysis and processing",
    "Digital health and wearable devices",
  ];

  const topicsSystemsBiology = [
    "Modeling and simulation of biological processes, pathways, networks, and interactomes",
    "Modeling of cellular and multi-cellular interaction systems",
    "Synthetic biological systems",
    "Metabolomics, microbiome, and lipidomics",
    "Self-organization in living systems (cells, organisms, swarms, ecosystems, etc.)",
  ];

  const topicsBiomedical = [
    "Cohort discovery, EHR-based phenotyping, predictive modeling",
    "Data quality assessment or validation",
    "Clinical decision support solutions",
    "Informatics to address disparities in health and health care",
    "Interoperability (e.g., ontology, terminology, standards, and others)",
    "Machine learning for clinical applications, genome, and phenome analysis/associations",
    "Mobile health and wearable devices",
    "Human-computer interaction and human factors",
  ];

  return (
    <div className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-gray-800">Submission</h1>

        <div className="bg-blue-50 border-l-4 border-[#005bbb] p-6 rounded mb-8">
          <p className="text-gray-700 text-lg">
            We invite you to submit papers and abstracts presenting original,
            unpublished work that describes recent advances in all areas of
            bioinformatics, artificial intelligence, systems biology, and
            biomedical informatics.
          </p>
        </div>

        {/* Topics Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Bioinformatics */}
          <div className="bg-white border-2 border-gray-200 rounded p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 pb-3 border-b-2 border-[#005bbb]">
              Bioinformatics and Computational Biology
            </h3>
            <ul className="space-y-2">
              {topicsBioinformatics.map((topic, idx) => (
                <li key={idx} className="text-gray-700 flex items-start">
                  <span className="mr-2">•</span>
                  <span>{topic}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* AI and Machine Learning */}
          <div className="bg-white border-2 border-gray-200 rounded p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 pb-3 border-b-2 border-[#005bbb]">
              Artificial Intelligence and Machine Learning
            </h3>
            <ul className="space-y-2">
              {topicsAI.map((topic, idx) => (
                <li key={idx} className="text-gray-700 flex items-start">
                  <span className="mr-2">•</span>
                  <span>{topic}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Systems Biology */}
          <div className="bg-white border-2 border-gray-200 rounded p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 pb-3 border-b-2 border-[#005bbb]">
              Systems Biology
            </h3>
            <ul className="space-y-2">
              {topicsSystemsBiology.map((topic, idx) => (
                <li key={idx} className="text-gray-700 flex items-start">
                  <span className="mr-2">•</span>
                  <span>{topic}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Biomedical Informatics */}
          <div className="bg-white border-2 border-gray-200 rounded p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 pb-3 border-b-2 border-[#005bbb]">
              Biomedical Informatics
            </h3>
            <ul className="space-y-2">
              {topicsBiomedical.map((topic, idx) => (
                <li key={idx} className="text-gray-700 flex items-start">
                  <span className="mr-2">•</span>
                  <span>{topic}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Paper Submission */}
        <div className="space-y-8">
          <div className="bg-white border-2 border-gray-200 rounded p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 pb-3 border-b-2 border-[#005bbb]">
              Paper Submission
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Prospective authors are invited to submit original, unpublished
                work to ICIBM 2026. Selected papers from registered authors will
                be considered for publication in special issues of{" "}
                <strong>Briefings in Bioinformatics</strong>,{" "}
                <strong>Frontiers in Genetics</strong>,<strong> Cancers</strong>
                , and the{" "}
                <strong>
                  Computational and Structural Biotechnology Journal
                </strong>
                .
              </p>
            </div>
          </div>

          {/* Abstract Submission */}
          <div className="bg-white border-2 border-gray-200 rounded p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 pb-3 border-b-2 border-[#005bbb]">
              Abstract Submission
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Abstracts should be ≤400 words using the conference-provided
                template. Papers already published or accepted for publication
                are also welcome.
              </p>
              <p>
                Please submit your abstract to{" "}
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
      </div>
    </div>
  );
}

// Important Dates Page
function ImportantDatesPage() {
  const dates = [
    { event: "Paper Submission Deadline", date: "March 31, 2026" },
    { event: "Notification to Authors", date: "June 1, 2026" },
    { event: "Abstract Submission Deadline", date: "June 15, 2026" },
    { event: "Early Registration Opens", date: "June 1, 2026" },
    { event: "Early Registration Deadline", date: "July 1, 2026" },
    { event: "ICIBM Conference", date: "August 2-5, 2026" },
  ];

  return (
    <div className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">
          Important Dates
        </h1>

        <div className="bg-white border-2 border-gray-200 rounded-lg overflow-hidden">
          <table className="w-full">
            <tbody className="divide-y divide-gray-200">
              {dates.map((item, idx) => (
                <tr key={idx} className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-gray-700">{item.event}</td>
                  <td className="px-6 py-4 text-right font-semibold text-[#005bbb]">
                    {item.date}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

// Registration Page
function RegistrationPage() {
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

// Program Page
function ProgramPage() {
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

// Organization Page
function OrganizationPage() {
  return (
    <div className="py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-gray-800">
          Organization Committee
        </h1>

        <div className="space-y-8">
          <div className="bg-white border-2 border-gray-200 rounded p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 pb-3 border-b-2 border-[#005bbb]">
              General Chairs
            </h2>
            <ul className="space-y-2 text-gray-700">
              <li>Yijun Sun, SUNY Buffalo</li>
              <li>Qianqian Song, University of Florida</li>
              <li>Zhongming Zhao, UTHealth Houston</li>
            </ul>
          </div>

          <div className="bg-white border-2 border-gray-200 rounded p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 pb-3 border-b-2 border-[#005bbb]">
              Keynote Speakers
            </h2>
            <ul className="space-y-2 text-gray-700">
              <li>Gary Bader, University of Toronto</li>
              <li>Additional speakers to be announced</li>
            </ul>
          </div>

          <div className="bg-white border-2 border-gray-200 rounded p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 pb-3 border-b-2 border-[#005bbb]">
              Program Committee
            </h2>
            <ul className="space-y-2 text-gray-700">
              <li>Michael Buck, SUNY Buffalo</li>
              <li>Hongbo Liu, University of Rochester</li>
              <li>Wenyao Xu, SUNY Buffalo</li>
            </ul>
          </div>

          <div className="bg-white border-2 border-gray-200 rounded p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 pb-3 border-b-2 border-[#005bbb]">
              Steering Committee
            </h2>
            <ul className="space-y-2 text-gray-700">
              <li>Marc Halterman, SUNY Buffalo</li>
              <li>Mattia Prosperi, University of Florida</li>
              <li>Jinjun Xiong, SUNY Buffalo</li>
            </ul>
          </div>

          <div className="bg-white border-2 border-gray-200 rounded p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 pb-3 border-b-2 border-[#005bbb]">
              Publication Committee
            </h2>
            <ul className="space-y-2 text-gray-700">
              <li>Li Liu, Arizona State University</li>
              <li>Dawei Li, Texas Tech University</li>
              <li>Jun Wan, Indiana University</li>
            </ul>
          </div>

          <div className="bg-white border-2 border-gray-200 rounded p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 pb-3 border-b-2 border-[#005bbb]">
              Workshop and Tutorial Committee
            </h2>
            <ul className="space-y-2 text-gray-700">
              <li>Leng Han, Indiana University</li>
            </ul>
          </div>

          <div className="bg-white border-2 border-gray-200 rounded p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 pb-3 border-b-2 border-[#005bbb]">
              Session Chairs
            </h2>
            <ul className="space-y-2 text-gray-700">
              <li>Daofeng Li, Washington University in St. Louis</li>
              <li>Xueqiu Lin, Fred Hutchinson Cancer Center</li>
              <li>Jianrong Wang, Michigan State University</li>
              <li>Li Zhao, Rockefeller University</li>
              <li>Wanding Zhou, Children's Hospital of Philadelphia</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

// Travel Page
function TravelPage() {
  return (
    <div className="py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-gray-800">Travel</h1>

        <div className="space-y-8">
          <div className="bg-white border-2 border-gray-200 rounded p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 pb-3 border-b-2 border-[#005bbb]">
              Conference Venue
            </h2>
            <div className="text-gray-700 space-y-2">
              <p className="font-semibold text-lg">University at Buffalo</p>
              <p>Buffalo, New York 14260</p>
              <p>United States</p>
            </div>
          </div>

          <div className="bg-white border-2 border-gray-200 rounded p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 pb-3 border-b-2 border-[#005bbb]">
              Getting to Buffalo
            </h2>
            <div className="space-y-4 text-gray-700">
              <div>
                <h3 className="font-bold mb-2">By Air</h3>
                <p>
                  Buffalo Niagara International Airport (BUF) is located
                  approximately 15 miles from the University at Buffalo campus.
                  The airport offers numerous daily flights from major cities
                  across North America.
                </p>
              </div>
              <div>
                <h3 className="font-bold mb-2">By Car</h3>
                <p>
                  Buffalo is easily accessible via major highways including I-90
                  (New York State Thruway) and I-190.
                </p>
              </div>
              <div>
                <h3 className="font-bold mb-2">By Train</h3>
                <p>
                  Amtrak provides service to Buffalo-Depew Station and
                  Buffalo-Exchange Street Station.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white border-2 border-gray-200 rounded p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 pb-3 border-b-2 border-[#005bbb]">
              Accommodation
            </h2>
            <p className="text-gray-700 mb-4">
              Information about recommended hotels and special conference rates
              will be available soon. Please check back for updates.
            </p>
          </div>

          <div className="bg-white border-2 border-gray-200 rounded p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 pb-3 border-b-2 border-[#005bbb]">
              Local Transportation
            </h2>
            <div className="space-y-2 text-gray-700">
              <p>
                • Taxi and rideshare services (Uber, Lyft) are readily available
              </p>
              <p>• NFTA Metro Rail and bus system serves the Buffalo area</p>
              <p>
                • Rental cars available at the airport and throughout the city
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Sponsors Page
function SponsorsPage() {
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

// Contact Page
function ContactPage() {
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

// Main App Component
export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/submission" element={<SubmissionPage />} />
          <Route path="/important-dates" element={<ImportantDatesPage />} />
          <Route path="/registration" element={<RegistrationPage />} />
          <Route path="/program" element={<ProgramPage />} />
          <Route path="/organization" element={<OrganizationPage />} />
          <Route path="/travel" element={<TravelPage />} />
          <Route path="/sponsors" element={<SponsorsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}
