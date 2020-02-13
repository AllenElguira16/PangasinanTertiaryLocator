import React, { FC } from "react";
import { Nav, Button, Form, FormGroup, Label, Input, Row } from "reactstrap";

const Locations = [
  "Agno",
  "Aguilar",
  "Alaminos",
  "Alcala",
  "Anda",
  "Asingan",
  "Balungao",
  "Bani",
  "Basista",
  "Bautista",
  "Bayambang",
  "Binalonan",
  "Binmaley",
  "Bolinao",
  "Bugallon",
  "Burgos",
  "Calasiao",
  "Dagupan City",
  "Dasol",
  "Infanta",
  "Labrador",
  "Laoac",
  "Lingayen",
  "Mabini",
  "Malasiqui",
  "Manaoag",
  "mangaldan",
  "Mangatarem",
  "Mapandan",
  "Natividad",
  "Pozorrubio",
  "Rosales",
  "San Carlos City",
  "San Fabian",
  "San Jacinto",
  "San Manuel",
  "San Nicolas",
  "San Quintin",
  "Sison",
  "Sta. Barbara",
  "Sta .Maria",
  "Sto .Tomas",
  "Sual",
  "Tayug",
  "Umingan",
  "Urbiztondo",
  "Urdaneta",
  "Villasis"
];

const Filters: FC = () => {
  return (
    <Nav vertical>
      <Form>
        {/* <Col> */}
        <Row form className="justify-content-between">
          {/* <Row className="justify-conent-end"> */}
          <h4>Filters</h4>
          <Button tag="small">Clear all filters</Button>
          {/* </Row> */}
        </Row>
        {/* </Col> */}
        <hr />
        <FormGroup>
          <Label for="Location">Select Location</Label>
          <Input type="select" name="select" id="Location">
            {Locations.map((location, i) => (
              <option value={location} key={i}>
                {location}
              </option>
            ))}
          </Input>
        </FormGroup>
        <FormGroup>
          <Label for="SchoolType">School Type</Label>
          <Input type="select" name="SchoolType" id="SchoolType">
            <option value="private">Private</option>
            <option value="Public">Public</option>
          </Input>
        </FormGroup>
      </Form>
    </Nav>
  );
};

export default Filters;
