import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

// Import components for non-logged-in users
import EndOfScrollComponent from "./components/non-logged-in/AdventureScroll.jsx";
import AdventureScroll from "./components/non-logged-in/AdventureScroll.jsx";
import ExperienceFragment from "./components/non-logged-in/Banner.jsx";
import ExploreOtherServices from "./components/non-logged-in/ExploreOtherServices.jsx";
import RecommendedRidesCard from "./components/non-logged-in/MotorcycleCustomizer.jsx";
import MotorcycleHero from "./components/non-logged-in/MotorcycleHero.jsx";

// Import components for logged-in users (protected)
import ExperienceFragment1 from "./pages/LoggedInPage/ExperFrag1.jsx";
import ExperienceFragment2 from './pages/LoggedInPage/ExpFrag2.jsx';
import ExperienceFragment3 from './pages/LoggedInPage/ExpFrag3.jsx';
import ExperienceFragment4 from './pages/LoggedInPage/ExpFrag4.jsx';
import ExperienceFragment5 from './pages/LoggedInPage/ExpFrag5.jsx';
// Assuming Frag2 and Frag3 will be imported similarly later

// Guest Homepage component
const GuestHomepage = () => (
  <main className="overflow-hidden">
    <section>
      <ExperienceFragment />
    </section>
    <section id="MIY">
      <MotorcycleHero />
    </section>
    <section id="MIY">
      <RecommendedRidesCard />
    </section>
    <section id="MIY">
      <ExploreOtherServices />
    </section>
    <section id="MIY">
      <EndOfScrollComponent />
    </section>
  </main>
);

// Logged-in component for protected content
const LoggedInContent = () => (
  <main>
    <section>
      <ExperienceFragment1 />
      <ExperienceFragment2 />
      <ExperienceFragment3 />
      <ExperienceFragment4 />
      <ExperienceFragment5 />
    </section>
    {/* You can add Frag2, Frag3, etc., as separate sections here */}
  </main>
);

// ProtectedRoute component to handle authentication check
const ProtectedRoute = ({ isAuthenticated, children }) => {
  return isAuthenticated ? children : <Navigate to="/" />;
};

// Main App component
const App = ({ isAuthenticated }) => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Route for guest homepage */}
        <Route path="/" element={<GuestHomepage />} />
        
        {/* Protected route for logged-in users */}
        <Route 
          path="/loggedin" 
          element={
            
              <LoggedInContent />
           
          } 
        />
        
        {/* You can add more protected routes here for different sections */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
