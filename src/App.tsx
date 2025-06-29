import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import CoursesPage from './pages/CoursesPage';
import SkillsPage from './pages/SkillsPage';
import WhyUsPage from './pages/WhyUsPage';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/skills" element={<SkillsPage />} />
          <Route path="/why-us" element={<WhyUsPage />} />
          {/* Additional routes will be added as we build more pages */}
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;