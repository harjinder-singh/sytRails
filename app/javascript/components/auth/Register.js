import React, { Component } from "react";
import axios from "axios";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Header from '../Header'
export default class Registration extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      password_confirmation: "",
      registrationErrors: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    if(this.props.loggedInStatus === 'LOGGED_IN'){
      this.props.history.push("/")
    }
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit(event) {
    const { email, password, password_confirmation } = this.state;

    axios
      .post(
        "http://localhost:3000/registrations",
        {
          user: {
            email: email,
            password: password,
            password_confirmation: password_confirmation
          }
        },
        { withCredentials: true }
      )
      .then(response => {
        if (response.data.status === "created") {
          this.props.handleLogin(response.data)
          this.props.history.push("/")
        }
      })
      .catch(error => {
        console.log("registration error", error);
      });
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <Container fluid>
          <Row>
            <Col sm={12}>
              <Header {...this.props}/>
            </Col>
          </Row>
          <Row>
            <Col sm={4}>
            </Col>
            <Col sm={4}>
              <Form onSubmit={this.handleSubmit}>
                <Form.Group controlId="formBasicEmail" >
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" name="email" placeholder="Enter email"
                            onChange={this.handleChange}
                            required/>
                  <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" name="password" placeholder="Password"
                            onChange={this.handleChange}
                            required />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Password Confirmation</Form.Label>
                  <Form.Control type="password" name="password_confirmation" placeholder="Password Confirmation"
                            onChange={this.handleChange}
                            required />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Register
                </Button>
              </Form>
            </Col>
            <Col sm={4}>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}