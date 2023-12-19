import { Container, Row, Col } from "react-bootstrap";
import Posts from "../posts/Posts";

const Post = (props) => {
  console.log(`Is props: ${props.picture}`)
    return (
  <div className="card col">
      <img src={props.picture} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{props.title}</h5>
    
   
  </div>
</div>
     
    );
  }
  
  export default Post;