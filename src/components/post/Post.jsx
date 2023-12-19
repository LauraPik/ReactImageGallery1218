import { Container, Row, Col } from "react-bootstrap";
import Posts from "../posts/Posts";

const Post = (props) => {
    return (
  <div className="card">
      <img src={props.picture} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{props.title}</h5>
    
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
     
    );
  }
  
  export default Post;