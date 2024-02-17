import { useState, useEffect } from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/github-logo.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(()=>{
    const onScroll = () => {
        if (window.scrollY > 50) {
            setScrolled(true);
        }else{
            setScrolled(false);
        }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
    }, []);

    useEffect(() => {
      document.title = 'Portofolio Fauzan Zaman';
    }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <div className="animate__animated animate__fadeInDown animate__delay-0.8s"><Nav.Link href="#home" className={activeLink === "home" ? "active navbar-link" : "navbar-link"} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link></div>
            <div className="animate__animated animate__fadeInDown animate__delay-1s"><Nav.Link href="#skills" className={activeLink === "skills" ? "active navbar-link" : "navbar-link"} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link></div>
            <div className="animate__animated animate__fadeInDown animate__delay-2s"><Nav.Link href="#project" className={activeLink === "projects" ? "active navbar-link" : "navbar-link"} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link></div>
            <div className="animate__animated animate__fadeInDown animate__delay-3s"><Nav.Link href="#certificates" className={activeLink === "Certificate" ? "active navbar-link" : "navbar-link"} onClick={() => onUpdateActiveLink('certificates')}>Certificates</Nav.Link></div>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a className="animate__animated animate__fadeInRight animate__delay-0.8s" target="_blank" href="https://www.linkedin.com/in/fauzan-zaman/">
                <img src={navIcon1} alt=""></img>
              </a>
              <a className="animate__animated animate__fadeInRight animate__delay-1s" target="_blank" href="https://github.com/fauzangan">
                <img src={navIcon2} alt=""></img>
              </a>
              <a className="animate__animated animate__fadeInRight animate__delay-2s" target="_blank" href="https://www.instagram.com/fauzan.zmn/">
                <img src={navIcon3} alt=""></img>
              </a>
            </div>
            <div className="animate__animated animate__fadeInRight animate__delay-3s">
                <button className="vvd" onClick={() => window.open("https://api.whatsapp.com/send/?phone=%2B6281291289944&text&type=phone_number&app_absent=0", '_blank', 'noopener, noreferrer')}>
                    <span>Let's Connect</span>
                </button>
            </div>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
