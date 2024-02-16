import { Col, Container, Row, Nav, Tab } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import projImg1 from "../assets/img/project-img1.png";
import bankSampahImg from "../assets/img/bank-sampah-portofolio.png";
import siaduAppImg from "../assets/img/siadu-app-portofolio.png";
import deskbookingAppImg from "../assets/img/deskbooking-app-portofolio.png";
import tokohpAppImg from "../assets/img/tokohp-app-portofolio.png";
import elearningAppImg from "../assets/img/e-learning-portofolio.png";
import personalPortofolioImg from "../assets/img/personal-portofolio.png";

export const Project = () => {
  const projects = [
    {
      title: "Proyek TA Bank Sampah",
      description: "Membuat Aplikasi Bank Sampah menggunakan Kerangka Kerja Laravel dengan mengintegrasikan modul IoTberupa timbangan Loadcell dan NodeMCU ESP8266 menggunakan protokol HTTP.",
      imgUrl: bankSampahImg,
    },
    {
      title: "Sistem Manajemen Aset Desa Dumeling",
      description: "Membuat Aplikasi Management Aset Desa berupa aset bergerak dan aset tidak bergerak menggunakanKerangka Kerja Laravel dan Bootstrap.",
      imgUrl: siaduAppImg,
    },
    {
      title: "Website Toko Handphone",
      description: "Membuat Toko berbasis web untuk menjual Smartphone menggunakan Laravel dan Bootstrap",
      imgUrl: tokohpAppImg,
    },
    {
      title: "Deskbooking App",
      description: "Membuat Aplikasi untuk membooking bangku menggunakan Kerangka Kerja Laravel dan Bootstrap.",
      imgUrl: deskbookingAppImg,
    },
    {
      title: "Proyek Magang Learning Management System",
      description: "Membuat E-Learning Management System berbasis web menggunakan kerangka kerja Laravel dan Bootstrapberupa daftar resep makanan yang akan disajikan pada pesawat.",
      imgUrl: elearningAppImg,
    },
    {
      title: "Portofolio Profile",
      description: "Membuat Website Portofolio Menggunakan React Js",
      imgUrl: personalPortofolioImg,
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col>
            <h2>Project</h2>
            <p></p>
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
