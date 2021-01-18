import React,{ useState, useEffect} from "react";
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'

const PostForm = (props) => {
  
  return (
    <Container fluid='true'>
          <Row style={{ 'paddingTop': 20 }}>
            <Col sm={4}>
            </Col>
            <Col sm={4}>
              <Form onSubmit={props.handleSubmit}>
                <Form.Group controlId="formBasicTitle" >
                  <Form.Label>Title</Form.Label>
                  <Form.Control type="text" name="title" placeholder="Enter title"
                            onChange={props.handleChange}
                            required/>
                </Form.Group>

                <Form.Group controlId="formBasicDescription">
                  <Form.Label>Description</Form.Label>
                  <Form.Control type="textarea" name="description" placeholder="Description"
                            onChange={props.handleChange} />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Create Post
                </Button>
              </Form>
            </Col>
            <Col sm={4}>
            </Col>
          </Row>
        </Container>
  );
};

export default PostForm;
