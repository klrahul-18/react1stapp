import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';


function Component() {

  const data = [{
    icon: "fa-brands fa-html5 fs-1",
    title: "Front-End Development",
    subtitle: "HTML, CSS, Javascript, React Js"

  },
  {
    icon: "fa-brands fa-css3-alt fs-1",
    title: "Backend Development",
    subtitle: "Database Management, Knowledge of API"
  },
  {
    icon: "fa-brands fa-js fs-1",
    title: "Full Stuck Development",
    subtitle: "HTML,CSS, Javascript, Bootstrap, React js"
  },
  {
    icon: "fa-brands fa-react fs-1",
    title: "React Js Developer",
    subtitle: "HTML,CSS, Javascript, Bootstrap, React js"
  },
  {
    icon: "fa-brands fa-java fs-1",
    title: "Java Developer",
    subtitle: "Java, Programming, API"
  }];

  const Column = ({ data }) => {
    return (
      <>
        <Col className='text-center py-5 me-2 shadow my-3 mx-2 rounded bg-secondary bg-gradient text-white'>
          <div className="icon-box py-5 px-3 rounded-circle border border-dark">
            <i className={data.icon}></i>
          </div>
          <h2>{data.title}</h2>
          <p>{data.subtitle}</p>
        </Col>
      </>
    );
  }
  return (
    <Container>
      <Row>
        {
          data.map((data, index) => {
            return <Column data={data} key={index} />
          })
        }
      </Row>
    </Container>
  )
}
export default Component;