import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./screens/Home";
import About from "./screens/About";
import CardDetail from "./screens/CardDetail";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { routes } from "./routes";
import NotFound from "./screens/NotFound";

function Router() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path={routes.home} element={<Home />} />
        <Route path={routes.cardDetail} element={<CardDetail />} />

        <Route path={routes.about} element={<About />} />

        <Route path={routes.notFound} element={<NotFound />} />

        <Route path="*" element={<Navigate to={routes.notFound} />} />
      </Routes>
      <Footer />
    </>
  );
}

export default Router;
