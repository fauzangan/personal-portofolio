import { Col, Container, Row, Nav, Tab } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";

export const Project = () => {
  const projects = [
    {
      title: "Proyek TA Bank Sampah",
      description: "Develop IoT App",
      imgUrl: projImg1,
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
            <Tab.Container id="project-tabs" defaultActiveKey="first">
              <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                <Nav.Item>
                  <Nav.Link eventKey="first" href="#">
                    Tab One
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second" href="#">
                    Tab Two
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third" href="#">
                    Tab Three
                  </Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    {projects.map((project, index) => {
                      return <ProjectCard key={index} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">Loremp</Tab.Pane>
                <Tab.Pane eventKey="third">Ipsum</Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} />
    </section>
  );
};
