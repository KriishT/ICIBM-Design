import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate,
  useLocation,
} from "react-router-dom";
import {
  Calendar,
  MapPin,
  Mail,
  Award,
  FileText,
  Menu,
  X,
  Download,
} from "lucide-react";

// Layout Component with Navigation
function Layout({ children }: { children: React.ReactNode }) {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const navigate = useNavigate();
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
              August 3-5, 2025
            </span>
            <span className="flex items-center gap-2">
              <MapPin size={16} />
              University at Buffalo, New York, USA
            </span>
          </div>
          <a
            href="mailto:icibm2025@gmail.com"
            className="flex items-center gap-2 hover:text-gray-200"
          >
            <Mail size={16} />
            icibm2025@gmail.com
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
                  ICIBM 2025
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
                    href="mailto:icibm2025@gmail.com"
                    className="hover:text-white"
                  >
                    icibm2025@gmail.com
                  </a>
                </p>
                <p className="flex items-center gap-2">
                  <Mail size={16} />
                  <a
                    href="mailto:icibm.common@gmail.com"
                    className="hover:text-white"
                  >
                    icibm.common@gmail.com
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
              © 2025 ICIBM - International Conference on Intelligent Biology and
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
      name: "Julie A. Johnson, Pharm.D.",
      title:
        "Professor of Pharmacology and Medicine; Director, Clinical and Translational Science Institute",
      institution: "The Ohio State University",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop",
    },
    {
      name: "Jiang Bian, Ph.D.",
      title:
        "Professor of Cancer Informatics; Professor of Biostatistics & Health Data Science",
      institution: "Indiana University",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
    },
    {
      name: "Veera Baladandayuthapani, Ph.D.",
      title: "Chair and Professor, Department of Biostatistics",
      institution: "University of Michigan",
      image:
        "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop",
    },
    {
      name: "Qing Nie, Ph.D.",
      title: "UC Presidential Chair, Distinguished Professor",
      institution: "University of California, Irvine",
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
            src="https://images.unsplash.com/photo-1564981797816-1043664bf78d?w=1920&h=600&fit=crop"
            alt="University at Buffalo Campus"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-20 relative z-10">
          <div className="text-center">
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-white/10 rounded text-sm font-medium">
                13th International Conference
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              International Conference on
              <br />
              Intelligent Biology and Medicine
            </h1>

            <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
              ICIBM 2025 brings together eminent scholars and experts from
              various fields of computational biology, bioinformatics, genomics,
              data science, AI, biomedical informatics, and related experimental
              research.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <div className="bg-white/10 backdrop-blur-sm px-6 py-4 rounded">
                <div className="text-2xl md:text-3xl font-bold">
                  August 3-5, 2025
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

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
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
            We invite submissions of unpublished, original work describing
            recent advances in intelligent biology and medicine
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
  return (
    <div className="py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-gray-800">Submission</h1>

        <div className="space-y-8">
          {/* Abstract Submission */}
          <div className="bg-white border-2 border-gray-200 rounded p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 pb-3 border-b-2 border-[#005bbb]">
              Abstract Submission
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Conference participants are invited to submit abstracts to ICIBM
                2025 describing recent advances on all aspects of
                Bioinformatics, Intelligent Computing, Systems Biology, and
                Medical Informatics.
              </p>
              <p>
                Abstract submitted to the conference should be formatted using
                the{" "}
                <a
                  href="#"
                  className="text-[#005bbb] hover:underline font-semibold"
                >
                  Abstract Template
                </a>
                . The abstract body should be no more than 400 words.
              </p>
              <p>
                Please submit your abstract to{" "}
                <a
                  href="mailto:icibm2025@gmail.com"
                  className="text-[#005bbb] hover:underline font-semibold"
                >
                  icibm2025@gmail.com
                </a>{" "}
                directly.
              </p>
            </div>
          </div>

          {/* Paper Submission */}
          <div className="bg-white border-2 border-gray-200 rounded p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 pb-3 border-b-2 border-[#005bbb]">
              Paper Submission and Publication
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Prospective authors are invited to submit unpublished work to
                ICIBM 2025. Selected papers from registered participants will be
                recommended for publication in special issues of journals
                covering bioinformatics, data science, quantitative life
                science, and biomedical informatics.
              </p>
              <p>
                Please submit your manuscript to{" "}
                <a
                  href="#"
                  className="text-[#005bbb] hover:underline font-semibold"
                >
                  EasyChair
                </a>{" "}
                conference management system.
              </p>
              <p className="font-semibold">
                Please note: There is no strict manuscript formatting
                requirement at the time of submission to ICIBM 2025.
              </p>
              <div className="bg-blue-50 p-4 rounded mt-4">
                <h3 className="font-bold mb-2">
                  Submission and Review Process
                </h3>
                <p className="mb-2">The review process includes two stages:</p>
                <ol className="list-decimal list-inside space-y-2 ml-4">
                  <li>
                    <strong>Conference Review:</strong> All submitted
                    manuscripts will undergo peer review by the ICIBM 2025
                    Program Committee. Selected papers will be invited for oral
                    presentation at the conference.
                  </li>
                  <li>
                    <strong>Journal Review:</strong> Accepted papers will be
                    recommended for publication in the special issues of partner
                    journals.
                  </li>
                </ol>
              </div>
            </div>
          </div>

          {/* Workshop Submission */}
          <div className="bg-white border-2 border-gray-200 rounded p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 pb-3 border-b-2 border-[#005bbb]">
              Workshop Submission
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Conference participants are invited to submit workshop proposals
                to ICIBM 2025.
              </p>
              <p>
                Please ensure your submission includes the workshop title, the
                name of the workshop organizer, a topic abstract, and a proposed
                schedule spanning 2-3 hours. Additionally, list the confirmed
                speakers for your workshop, ideally comprising 6-8 speakers.
              </p>
              <p>
                Please submit your workshop proposal to{" "}
                <a
                  href="mailto:icibm.common@gmail.com"
                  className="text-[#005bbb] hover:underline font-semibold"
                >
                  icibm.common@gmail.com
                </a>{" "}
                directly.
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
    { event: "Deadline for paper submission", date: "April 28, 2025" },
    { event: "Notification to authors of papers", date: "June 13, 2025" },
    { event: "Conference early registration opens", date: "May 25, 2025" },
    { event: "Deadline for abstract submission", date: "June 27, 2025" },
    { event: "Conference early registration deadline", date: "July 11, 2025" },
    { event: "Travel award application deadline", date: "July 18, 2025" },
    { event: "Conference regular registration opens", date: "July 12, 2025" },
    { event: "ICIBM conference", date: "August 3-5, 2025" },
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
          Register for ICIBM 2025
        </h1>

        <div className="bg-blue-50 border-l-4 border-[#005bbb] p-6 rounded mb-8">
          <p className="text-gray-700">
            ICIBM 2025 is the official conference organized by the International
            Association for Intelligent Biology and Medicine (IAIBM). IAIBM is a
            non-profit organization founded in 2018 to promote the intelligent
            biology and medical science (EIN: 82-4147182).
          </p>
        </div>

        <div className="bg-white border-2 border-gray-200 rounded-lg overflow-hidden mb-8">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-4 text-left font-bold text-gray-800">
                  Registration Package
                </th>
                <th className="px-6 py-4 text-center font-bold text-gray-800">
                  Early Registration
                  <br />
                  <span className="text-sm font-normal">
                    (May 14th - July 11th, 2025)
                  </span>
                </th>
                <th className="px-6 py-4 text-center font-bold text-gray-800">
                  Standard Registration
                  <br />
                  <span className="text-sm font-normal">
                    (July 12th - August 3rd, 2025)
                  </span>
                </th>
                <th className="px-6 py-4 text-center font-bold text-gray-800">
                  Registration Links
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr className="hover:bg-gray-50">
                <td className="px-6 py-4 font-semibold">
                  Regular Registration
                </td>
                <td className="px-6 py-4 text-center">US $600</td>
                <td className="px-6 py-4 text-center">US $700</td>
                <td className="px-6 py-4 text-center">
                  <a
                    href="#"
                    className="text-[#005bbb] hover:underline font-semibold"
                  >
                    Register
                  </a>
                </td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-6 py-4 font-semibold">
                  Student Registration
                </td>
                <td className="px-6 py-4 text-center">US $450</td>
                <td className="px-6 py-4 text-center">US $500</td>
                <td className="px-6 py-4 text-center">
                  <a
                    href="#"
                    className="text-[#005bbb] hover:underline font-semibold"
                  >
                    Student/Postdoc
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="space-y-6 text-gray-700">
          <p>
            **The regular registration fee includes all seminars,
            workshops/tutorials, a poster session, and scheduled conference
            meals and refreshment breaks. The registration fee also includes a
            free IAIBM regular membership ($100 value) for one year.
          </p>
          <p>
            **The student registration fee includes all seminars,
            workshops/tutorials, a poster session, and scheduled conference
            meals and refreshment breaks.{" "}
            <strong>
              Student registration is for trainee only, and ID is required
              during check-in.
            </strong>{" "}
            The registration fee also includes a free IAIBM student membership
            ($25 value) for one year.
          </p>
        </div>

        <div className="mt-8 bg-white border-2 border-gray-200 rounded p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Cancellation Policy
          </h2>
          <p className="text-gray-700 mb-4">
            Request for registration cancellation must be made in writing and
            sent to:{" "}
            <a
              href="mailto:icibm.common@gmail.com"
              className="text-[#005bbb] hover:underline font-semibold"
            >
              icibm.common@gmail.com
            </a>
          </p>
          <p className="text-gray-700">
            <strong>Refund Policy:</strong> We do not encourage the cancellation
            of your registration. However, due to unexpected reasons, if you
            need to cancel your registration, please include a copy of your
            registration payment receipt with your request. All refunds will be
            processed and mailed after the ICIBM 2025. A $50.00 processing fee
            will be deducted from the paid registration fee.
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
            <div>
              <h3 className="font-bold text-lg mb-2">Day 1 - August 3, 2025</h3>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>Registration and Welcome Reception</li>
                <li>Opening Ceremony</li>
                <li>Keynote Presentations</li>
                <li>Workshop Sessions</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-2">Day 2 - August 4, 2025</h3>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>Keynote Presentations</li>
                <li>Parallel Sessions</li>
                <li>Poster Session</li>
                <li>Conference Dinner</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-2">Day 3 - August 5, 2025</h3>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>Keynote Presentations</li>
                <li>Parallel Sessions</li>
                <li>Award Ceremony</li>
                <li>Closing Remarks</li>
              </ul>
            </div>
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
              <li>Lang Li, The Ohio State University</li>
              <li>Qin Ma, The Ohio State University</li>
              <li>Zhongming Zhao, UTHealth Houston</li>
            </ul>
          </div>

          <div className="bg-white border-2 border-gray-200 rounded p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 pb-3 border-b-2 border-[#005bbb]">
              Program Committee
            </h2>
            <ul className="space-y-2 text-gray-700">
              <li>Lianbo Yu, The Ohio State University</li>
              <li>Leng Han, Indiana University</li>
            </ul>
          </div>

          <div className="bg-white border-2 border-gray-200 rounded p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 pb-3 border-b-2 border-[#005bbb]">
              Publication Committee
            </h2>
            <ul className="space-y-2 text-gray-700">
              <li>Maciej Pietrzak, The Ohio State University</li>
              <li>Xinghua Mindy Shi, Temple University</li>
            </ul>
          </div>

          <div className="bg-white border-2 border-gray-200 rounded p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 pb-3 border-b-2 border-[#005bbb]">
              Workshop/Tutorial Committee
            </h2>
            <ul className="space-y-2 text-gray-700">
              <li>Hongbo Liu, University of Rochester</li>
              <li>Yusi Fu, Texas A&M University</li>
              <li>Qiangian Song, University of Florida</li>
              <li>Pengyue Zhang, Indiana University</li>
              <li>Travis Johnson, Indiana University</li>
              <li>Chi Zhang, Oregon Health & Science University</li>
            </ul>
          </div>

          <div className="bg-white border-2 border-gray-200 rounded p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 pb-3 border-b-2 border-[#005bbb]">
              Award Committee
            </h2>
            <ul className="space-y-2 text-gray-700">
              <li>Fuhai Li, Washington University in St. Louis</li>
            </ul>
          </div>

          <div className="bg-white border-2 border-gray-200 rounded p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 pb-3 border-b-2 border-[#005bbb]">
              Future Scientist in AI Committee
            </h2>
            <ul className="space-y-2 text-gray-700">
              <li>Chi Zhang, Oregon Health & Science University</li>
              <li>Jingwen Yan, Indiana University</li>
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
  const platinumSponsors = [
    {
      name: "Admera Health",
      logo: "https://via.placeholder.com/200x80?text=Admera+Health",
    },
  ];

  const goldSponsors = [
    {
      name: "10x Genomics",
      logo: "https://via.placeholder.com/150x60?text=10x+Genomics",
    },
    {
      name: "Complete Genomics",
      logo: "https://via.placeholder.com/150x60?text=Complete+Genomics",
    },
    {
      name: "Computational Biology and Chemistry",
      logo: "https://via.placeholder.com/150x60?text=CBC",
    },
    {
      name: "Olink Proteomics",
      logo: "https://via.placeholder.com/150x60?text=Olink",
    },
    { name: "Yeasen", logo: "https://via.placeholder.com/150x60?text=Yeasen" },
  ];

  return (
    <div className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-12 text-center text-gray-800">
          Sponsors
        </h1>

        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">
            Platinum Sponsors
          </h2>
          <div className="flex justify-center">
            <div className="bg-gray-100 p-12 rounded-lg border-2 border-gray-200">
              <img
                src={platinumSponsors[0].logo}
                alt={platinumSponsors[0].name}
                className="max-w-xs"
              />
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">
            Gold Sponsors
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {goldSponsors.map((sponsor, idx) => (
              <div
                key={idx}
                className="bg-gray-100 p-6 rounded-lg border border-gray-200 flex items-center justify-center"
              >
                <img
                  src={sponsor.logo}
                  alt={sponsor.name}
                  className="max-w-full"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 bg-blue-50 border-l-4 border-[#005bbb] p-6 rounded">
          <h3 className="font-bold text-lg mb-2">Interested in Sponsoring?</h3>
          <p className="text-gray-700">
            For sponsorship opportunities, please contact us at{" "}
            <a
              href="mailto:icibm.common@gmail.com"
              className="text-[#005bbb] hover:underline font-semibold"
            >
              icibm.common@gmail.com
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
            For general information please contact{" "}
            <a
              href="mailto:icibm.common@gmail.com"
              className="text-[#005bbb] hover:underline font-semibold"
            >
              icibm.common@gmail.com
            </a>{" "}
            or{" "}
            <a
              href="#"
              className="text-[#005bbb] hover:underline font-semibold"
            >
              Lianbo Yu
            </a>
          </p>

          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-4 text-gray-800">
                Paper Submissions
              </h3>
              <a
                href="mailto:icibm2025@gmail.com"
                className="text-[#005bbb] hover:underline"
              >
                icibm2025@gmail.com
              </a>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-4 text-gray-800">
                General Inquiries
              </h3>
              <a
                href="mailto:icibm.common@gmail.com"
                className="text-[#005bbb] hover:underline"
              >
                icibm.common@gmail.com
              </a>
            </div>
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
