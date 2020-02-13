import React, { FC } from "react";
import { Row, Col } from "reactstrap";
import Filters from "./Filters";

const Schools: FC = () => {
  return (
    <Row>
      <Col md="4">
        <Filters />
      </Col>
      <div>Fill in the filters to show results</div>
    </Row>
  );
};

export default Schools;
