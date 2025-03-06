import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/header-img.svg";
import "animate.css";
import TrackVisibility from "react-on-screen";
import { isVisible } from "@testing-library/user-event/dist/utils";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = ["Web Developer", "Back-end Engineer", "Full Stack Engineer"];
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updateText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updateText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updateText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updateText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
              <div className="animate__animated animate__slideInLeft animate__slower">
                <span className="tagline">Welcome to my Portofolio</span>
                <h1>
                  {"Hi I'm Fauzan Zaman "}
                  <span className="wrap"> I'm {text}</span>
                </h1>
                <p>Computer Engineering graduate with proven expertise in developing scalable applications using Java Spring Boot, PHP Laravel, Golang, and React.js. Skilled in designing efficient backend architectures, API integration, and database optimization. Seeking opportunities in software development to deliver innovative technology solutions</p>
                <button onClick={() => window.open("https://drive.google.com/file/d/1G3HLE5VmDAak4mUA9A_DZTSdi1t_12zh/view?usp=sharing", '_blank', 'noopener, noreferrer')}>
                  Download my Resume <ArrowRightCircle size={25}></ArrowRightCircle>
                </button>
              </div>
          </Col>
          <Col  className="animate__animated animate__slideInRight animate__slower" xs={12} md={6} xl={5}>
            <img src={headerImg} alt="Headder Img" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};
