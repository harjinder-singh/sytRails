import React, {useEffect} from "react";
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Link } from 'react-router-dom';

const Posts = (props) => {
    
    const listPosts = () => {
            
            return props.posts.map(element => (
                <Col sm={4} key={`post-${element.id}`} style={{'marginTop':20}} >
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="https://images.freeimages.com/images/large-previews/48d/marguerite-1372118.jpg" />
                        <Card.Body>
                            <Card.Title>{element.title}</Card.Title>
                            <Card.Text>
                            {element.description}
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </Col>
            ));
    }

    return (
        <Container fluid='true'>
            <Row style={{'paddingTop': 20, 'paddingLeft': 20, 'paddingRight': 20}}>
                {listPosts()}
            </Row>
            <Row style={{'paddingTop': 20, 'paddingLeft': 20, 'paddingRight': 20}}>
                <Col sm={2} style={{'marginTop':20}}>
                <Link to={"/p/new"}>Create new posts</Link>
                </Col>
            </Row>
        </Container>
    );
  };
  
  export default Posts;
  