import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiVercel,
  SiFigma,
  SiGit,
  SiMacos,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiFigma />Figma
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />Vscode
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGit /><br></br>Git
      </Col>
      {/* <Col xs={4} md={2} className="tech-icons">
        <SiSlack />
      </Col> */}
      <Col xs={4} md={2} className="tech-icons">
        <SiVercel />Vercel
      </Col>
    </Row>
  );
}

export default Toolstack;
