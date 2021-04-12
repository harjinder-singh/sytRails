import React, {useEffect} from "react";
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Link } from 'react-router-dom';

const Posts = (props) => {
    
    const listPosts = () => {
            if(props.posts.length === 0){
                return ( 
                    <Col sm={12} style={{ 'marginTop': 20, 'textAlign': 'center' }} >
                        <h2>No Posts yet. Start adding some.</h2>
                    </Col>
                    )
            }
            return props.posts.map(element => (
                <Col sm={4} key={`post-${element.post.id}`} style={{'marginTop':20}} >
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={element.image_url} height="300px" width="100px"/>
                        <Card.Body>
                            <Card.Title>{element.post.title}</Card.Title>
                            <Card.Text>
                            {element.post.description}
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
                </Col>
            </Row>
        </Container>
    );
  };
  
  export default Posts;
  