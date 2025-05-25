import React from "react";
import { Route, Routes} from "react-router-dom";
import WithRouter from "../hooks/WithRouter"
import { Home } from "../pages/home/Home";
import { Portfolio } from "../pages/portfolio/PortFolio";
import { ContactUs } from "../pages/contact/Contact";
import { About } from "../pages/about/About";
import { Socialicons } from "../components/icons/Icons";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Blogs from "../pages/blogs/Blogs";
import BlogDetail from "../pages/blogDetail/BlogDetail";

const AnimatedRoutes = WithRouter(({ location }) => (
  <TransitionGroup>
    <CSSTransition
      key={location.key}
      timeout={{
        enter: 400,
        exit: 400,
      }}
      classNames="page"
      unmountOnExit
    >
      <Routes location={location}>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<ContactUs />} />
                <Route path="/blogs" element={<Blogs />} />
    <Route path="/blog/:slug" element={<BlogDetail />} />

        <Route path="*" element={<Home />} />
      </Routes>
    </CSSTransition>
  </TransitionGroup>
));

function AppRoutes() {
  return (
    <div className="s_c">
      <AnimatedRoutes />
      <Socialicons />
    </div>
  );
}

export default AppRoutes;