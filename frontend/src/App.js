import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import ProjectDashboard from "./pages/ProjectDashboard";
import UserProfile from "./pages/UserProfile";
import ReviewPage from "./pages/ReviewPage";

export default function App() {
  return (
    <div>
      <nav style={{ padding: 12, borderBottom: "1px solid #ddd" }}>
        <Link to="/" style={{ marginRight: 12 }}>Home</Link>
        <Link to="/projects" style={{ marginRight: 12 }}>Project Dashboard</Link>
        <Link to="/profile" style={{ marginRight: 12 }}>User Profile</Link>
        <Link to="/review">Review</Link>
      </nav>

      <main style={{ padding: 12 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<ProjectDashboard />} />
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/review" element={<ReviewPage />} />
        </Routes>
      </main>
    </div>
  );
}
