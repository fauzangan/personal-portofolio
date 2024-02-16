import { Col, Container, Row, Nav, Tab } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import bankSampahImg from "../assets/img/bank-sampah-portofolio.png";

export const Project = () => {
  const projects = [
    {
      title: "Proyek TA Bank Sampah",
      description: "Develop IoT App",
      imgUrl: bankSampahImg,
    },
    {
      title: "Proyek TA Bank Sampah",
      description: "Develop IoT App",
      imgUrl: projImg2,
    },
    {
      title: "Proyek TA Bank Sampah",
      description: "Develop IoT App",
      imgUrl: projImg3,
    },
    {
      title: "Proyek TA Bank Sampah",
      description: "Develop IoT App",
      imgUrl: projImg1,
    },
    {
      title: "Proyek TA Bank Sampah",
      description: "Develop IoT App",
      imgUrl: projImg1,
    },
    {
      title: "Proyek TA Bank Sampah",
      description: "Develop IoT App",
      imgUrl: projImg1,
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col>
            <h2>Project</h2>
            <p>Lorem Ipsum</p>
            <Row>
            {projects.map((project, index) => {
                return <ProjectCard key={index} {...project} />;
                })
            }
            </Row>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="Image"/>
    </section>
  );
};
