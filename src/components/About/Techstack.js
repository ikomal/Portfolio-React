import React from "react";
import { Col, Row } from "react-bootstrap";
import tailwind from "../../Assets/tailwind.png";
import { HiOutlineCog  } from 'react-icons/hi';

import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  
  DiMongodb,
  DiPython,
  DiGit,
  DiMysql,
  DiJenkins,
  DiDatabase,
  DiHtml5,
  DiSqllite,
  DiJava,
} from "react-icons/di";
import {
  SiRedis,
  SiFirebase,
  SiNextdotjs,
  SiSolidity,
  SiPostgresql,
} from "react-icons/si";
import { TbBrandGolang } from "react-icons/tb";
import { RiTailwindCssFill } from "react-icons/ri";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <CgCPlusPlus />  C++
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />Javascript
      </Col>
      {/* <Col xs={4} md={2} className="tech-icons">
        <DiHtml5 />
      </Col> */}
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />Nodejs
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />React
      </Col>
      {/* <Col xs={4} md={2} className="tech-icons">
        <SiSolidity />
      </Col> */}
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />MongoDB
      </Col>
      {/* <Col xs={4} md={2} className="tech-icons">
        <SiNextdotjs />
      </Col> */}
      {/* <Col xs={4} md={2} className="tech-icons">
        <DiGit />
        Git
      </Col> */}
      <Col xs={4} md={2} className="tech-icons">
        <SiFirebase />Firebase
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiDatabase />DBMS
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <HiOutlineCog  />
      Tailwind
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMysql/>MySql
      </Col>
      
    </Row>
  );
}

export default Techstack;
