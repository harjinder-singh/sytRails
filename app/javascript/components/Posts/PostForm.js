import React,{ useState, useEffect} from "react";
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import ImageUploader from 'react-images-upload';

const PostForm = (props) => {
  
  return (
    <Container fluid='true'>
          <Row style={{ 'marginTop': '40px' }}>
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
              <ImageUploader
                withIcon={true}
                withPreview={true}
                buttonText='Choose image'
                onChange = {props.imageChangeHandler}
                imgExtension={['.jpg', '.gif', '.png', '.gif', '.jpeg']}
                maxFileSize={5242880}
              />
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
