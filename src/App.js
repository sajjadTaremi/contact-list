import { Routes, Route } from "react-router-dom";
import AboutUsPage from "./Components/Pages/AboutUsPage";
import ContactManager from "./Components/AddContact/ContactManager";

import Dashboard from "./Components/Pages/Dashboard";
import ProFile from "./Components/Pages/ProFile";
import Layout from "./Layout/Layout";
import NotFoundPage from "./Layout/NotFoundPage";

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<ContactManager />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        {/* <Route path="/2" element={<Navigate replace to="/" />} /> */}
        <Route path="/profile" element={<ProFile />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Layout>
  );
};

export default App;
