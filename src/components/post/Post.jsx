import { Container, Row, Col } from "react-bootstrap";

const Post = (props) => {
    return (
      <Container>
        <Row>
          <Col ><img src={props.picture} class="w-50 p-3"/>
          <p>{props.title}</p></Col>
          <Col ><img src={props.picture} class="w-50 p-3"/>
          <p>{props.title}</p></Col>
          <Col ><img src={props.picture} class="w-50 p-3"/>
          <p>{props.title}</p></Col>
        </Row>
      </Container>
    );
  }
  
  export default Post;