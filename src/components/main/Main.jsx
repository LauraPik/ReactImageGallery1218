import PostData from "../data/PostData";
import Posts from "../posts/Posts";

const Main = () => {
    return(
        <div className="container">
             < Posts items = {PostData}/>

        </div>
    )
}

export default Main