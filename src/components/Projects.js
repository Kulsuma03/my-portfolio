import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/p-1.png";
import projImg2 from "../assets/img/p-2.png";
import projImg3 from "../assets/img/p-3.png";
import projImg4 from "../assets/img/p-4.png";
import projImg5 from "../assets/img/p-5.png";
import projImg6 from "../assets/img/p-6.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "MS Cooling Center",
      description: "Design & Development",
      imgUrl: projImg1,
      url: 'https://ms-cooling-point.web.app/'
    },
    {
      title: "Test Hub",
      description: "Design & Development",
      imgUrl: projImg2,
      url: 'https://lambent-biscochitos-459b21.netlify.app/'
    },
    {
      title: "Rainbow Academy",
      description: "Design & Development",
      imgUrl: projImg3,
      url: 'https://rainbow-academy-50e27.web.app/'
    },
    {
      title: "Barefoot Blonde",
      description: "Design & Development",
      imgUrl: projImg4,
      url: 'https://iridescent-paletas-93a3d4.netlify.app/'
    },
    {
      title: "Calculate The Activity",
      description: "Design & Development",
      imgUrl: projImg5,
      url: 'https://celebrated-empanada-fd19bf.netlify.app/'
    },
    {
      title: "EASY QUIZZES",
      description: "Design & Development",
      imgUrl: projImg6,
      url: 'https://coruscating-naiad-34fa65.netlify.app/'
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
               
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                     
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}