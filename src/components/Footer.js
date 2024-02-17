import { Col, Container, Row } from "react-bootstrap";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/github-logo.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";


export const Footer = () => {
    return (
        <footer className="footer" >
            <Container>
                <Row className="align-item-center">
                    <Col sm={6}>
                        {/* <img src={logo} alt="Logo"/> */}
                    </Col>
                    <Col sm={6} className="text-center text-sm-end">
                        <div className="social-icon">
                            <a target="_blank" href="https://www.linkedin.com/in/fauzan-zaman/"><img src={navIcon1}/></a>
                            <a target="_blank" href="https://github.com/fauzangan"><img src={navIcon2}/></a>
                            <a target="_blank" href="https://www.instagram.com/fauzan.zmn/"><img src={navIcon3}/></a>
                        </div>
                        <p>Copyright 2024. All Right Reserved</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}