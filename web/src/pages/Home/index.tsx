import React, { FC } from "react";
import { Jumbotron, Col, Row } from "reactstrap";
import StudentsImage from "assets/images/Students.jpg";

const Home: FC = () => {
  return (
    <section title="Welcome Students!">
      <Jumbotron className="bg-white">
        <Row>
          <Col sm={6}>
            <h1>Find Tertiary Schools in Pangasinan</h1>
            <p>
              Welcome to Pangasinan Tertiary Locator! Browse all schools located
              in Pangasinan
            </p>
          </Col>
          <Col sm="6">
            <img src={StudentsImage} alt="Students" className="img-fluid" />
          </Col>
        </Row>
      </Jumbotron>
    </section>
  );
};

export default Home;
