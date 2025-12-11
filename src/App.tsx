import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";

import HomePage from "./pages/HomePage";
import SubmissionPage from "./pages/SubissionPage.tsx";
import Calender from "./pages/Calender";
import RegistrationPage from "./pages/RegistrationPage";
import ProgramPage from "./pages/ProgramPage";
import OrganizationPage from "./pages/OrganizationPage";
import TravelPage from "./pages/TravelPage";
import SponsorsPage from "./pages/SponsorsPage";
import ContactPage from "./pages/ContactPage";

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/submission" element={<SubmissionPage />} />
          <Route path="/important-dates" element={<Calender />} />
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
