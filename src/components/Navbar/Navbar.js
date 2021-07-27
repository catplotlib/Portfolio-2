import "./Navbar.css";

import { NavHashLink } from "react-router-hash-link";
import { useMediaQuery } from "react-responsive";

const scrollWithOffset = (el) => {
  const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
  const yOffset = -200;
  window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
};

const Navbar = () => {
  const isMobile = useMediaQuery({ query: `(max-width: 600px)` });
  return (
    <>
      <header className="navbar fixed-nav-bar">
        <div className="navbar__item">
          <NavHashLink
            smooth
            to="/#projects"
            scroll={(el) => scrollWithOffset(el)}
            className="text-link"
          >
            {isMobile ? (
              <img
                className="icons"
                src="https://i.ibb.co/vHkPDnd/setting.png"
              />
            ) : (
              <p>Projects</p>
            )}
          </NavHashLink>
        </div>
        <div className="navbar__item">
          <NavHashLink
            smooth
            to="/#writings"
            scroll={(el) => scrollWithOffset(el)}
            className="text-link"
          >
            {isMobile ? (
              <img
                className="icons"
                src="https://i.ibb.co/HN4Jxb6/writing-1.png"
              />
            ) : (
              <p>Writing</p>
            )}
          </NavHashLink>
        </div>

        <div>
          <NavHashLink
            smooth
            to="/#hero"
            scroll={(el) => scrollWithOffset(el)}
            className="text-link"
          >
            <div className="dot">PC</div>
          </NavHashLink>
        </div>

        <div className="navbar__item">
          <NavHashLink
            smooth
            to="/#achievments"
            scroll={(el) => scrollWithOffset(el)}
            className="text-link"
          >
            {isMobile ? (
              <img
                className="icons"
                src="https://i.ibb.co/72GwYJd/achievement.png"
              />
            ) : (
              <p>Skills</p>
            )}
          </NavHashLink>
        </div>
        <div className="navbar__item">
          <NavHashLink
            smooth
            to="/#socials"
            scroll={(el) => scrollWithOffset(el)}
            className="text-link"
          >
            {isMobile ? (
              <img className="icons" src="https://i.ibb.co/Sw197nq/user.png" />
            ) : (
              <p>Socials</p>
            )}
          </NavHashLink>
        </div>
      </header>
    </>
  );
};
export default Navbar;
