import React, { FC, FormEvent, useState, useContext } from "react";
import { Form, FormGroup, Label, Input, Button, Col } from "reactstrap";
import { observer } from "mobx-react-lite";
import userStore from "stores/userStore";

const Register: FC = () => {
  const { registerUser } = useContext(userStore);
  const [state, setState] = useState<RegisterInput>({
    email: "",
    password: "",
    reEnterPassword: "",
    profilePicture: ""
  });

  const onChange = ({ currentTarget }: FormEvent<HTMLInputElement>) => {
    setState({
      ...state,
      [currentTarget.name]: currentTarget.value
    });
  };

  return (
    <div className="d-flex justify-content-center">
      <Col md="6">
        <h4 className="text-center">Register Account</h4>
        <Form method="POST" onSubmit={registerUser(state)}>
          <FormGroup>
            <Label for="Email">Email</Label>
            <Input
              type="email"
              name="email"
              id="Email"
              placeholder="e.g. xnxx@xxx.com"
              onChange={onChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="Password">Password</Label>
            <Input
              type="password"
              name="password"
              id="Password"
              placeholder="Enter a unique password"
              onChange={onChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="RePassword">Re-Enter Password</Label>
            <Input
              type="password"
              name="password"
              id="RePassword"
              placeholder="Re-enter Password"
              onChange={onChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="ProfilePicture">Profile Picture</Label>
            <Input
              type="file"
              name="Profile Picture"
              id="ProfilePicture"
              onChange={onChange}
            />
          </FormGroup>
          <Button type="submit">Submit</Button>
        </Form>
      </Col>
    </div>
  );
};

export default observer(Register);
