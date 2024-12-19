import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import elearning from "../../Assets/Projects/e-learning2.jpeg";
import food from "../../Assets/Projects/food-donation.jpeg";
import swiggy from "../../Assets/Projects/swiggy.png";
import rental from "../../Assets/Projects/rental.jpg";
import img from "../../Assets/Projects/img_gallery2.jpeg";
// import chatify from "../../Assets/Projects/chatify.png";
// import suicide from "../../Assets/Projects/suicide.png";
// import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={swiggy}
              isBlog={false}
              title="Swiggy-Clone"
              description="Develop a web application that replicates the core features of the Swiggy app, allowing users to view their menus, and place orders for food items.Design a highly responsive and user-friendly interface, ensuring an enjoyable and accessible experience for all users. "
              ghLink="https://github.com/ikomal/Order-With-komal"
              demoLink="https://order-with-komal.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={img}
              isBlog={false}
              title="Image Gallery"
              description="Developed an interactive image gallery web application that fetches and displays images dynamically using a third-party API. Integrated search functionality to enable users to search for images by keywords or names, returning relevant results in real-time.Optimized API calls for efficient data fetching and reduced load time, enhancing application performance."
              ghLink="https://github.com/ikomal/Image_Gallery"
              demoLink="https://image-gallery-ivory-eight.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={rental}
              isBlog={false}
              title="Rental Website"
              description="Designed and developed a responsive rental website to showcase property listings with detailed descriptions, images, and pricing.Integrated interactive features such as image carousels, property details pages, and booking forms.Implemented responsive design for compatibility across various devices and screen sizes."
              ghLink="https://github.com/ikomal/Rental-website"
              demoLink="https://rental-website-seven.vercel.app/"
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Plant AI"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
