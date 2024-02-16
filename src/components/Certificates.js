import { Col, Container, Row } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp from "../assets/img/color-sharp.png";
import bankSampahImg from "../assets/img/bank-sampah-portofolio.png";
import certificateIntroToFullStact from "../assets/img/Sertifikat-intro-to-fullstack.png";
import certificateDataEngineer from "../assets/img/sertifikat-data-engineer.png";
import certificateCisco1 from "../assets/img/sertifikat-cisco-1.png";
import certificateCisco2 from "../assets/img/sertifikat-cisco-2.png";

export const Certificates = () => {
    const certificates = [
        {
          title: "Into to Fullstack Developer",
          description: "Digital Talent Scholarship • Juli 2021",
          imgUrl: certificateIntroToFullStact,
        },
        {
          title: "Pelatihan Data Enginner",
          description: "Digital Talent Scholarship • Agustus 2022",
          imgUrl: certificateDataEngineer,
        },
        {
          title: "CCNA:Switching, Routing, and Wireless Essentials",
          description: "Cisco • Desember 2021",
          imgUrl: certificateCisco1,
        },
        {
          title: "CCNA:Introduction to Networks",
          description: "Cisco • Juli 2021",
          imgUrl: certificateCisco2,
        },
      ];
    
      return (
        <section className="project" id="certificates">
          <Container>
            <Row>
              <Col>
                <h2>Sertifikasi dan Pelatihan</h2>
                <p>Lorem Ipsum</p>
                <Row>
                {certificates.map((certificate, index) => {
                    return <ProjectCard key={index} {...certificate} />;
                    })
                }
                </Row>
              </Col>
            </Row>
          </Container>
          <img className="background-image-left" src={colorSharp} alt="Image"/>
        </section>
      );
}