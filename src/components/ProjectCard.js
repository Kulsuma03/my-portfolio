import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, url }) => {
  
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        {/* <a href={url}>
        <img alt="project" className="img-fluid" src={imgUrl} />
        </a> */}
        <img alt="project" className="img-fluid" src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <br />
          <a className="text-white" href={url} target='_blank'>Live Link</a>
        </div>
      </div>
    </Col>
  )
}