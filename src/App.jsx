import React from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

import MainLayout from "./layout/MainLayout";
import HomePage from "./pages/HomePage";
import OurServices from "./pages/OurServices";
import AboutUs from "./pages/AboutUs";
import OurTeam from "./pages/OurTeam";
import NotFoundPage from "./pages/NotFound";
import Events from "./pages/Events";
import OurFaqs from "./pages/OurFaqs";
import ContactUs from "./pages/ContactUs";
import Login from "./pages/Login";
import Careers from "./pages/Careers";

// APP
const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/ourservices" element={<OurServices />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/ourteam" element={<OurTeam />} />
        <Route path="/events" element={<Events />} />
        <Route path="/ourfaqs" element={<OurFaqs />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;
