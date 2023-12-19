import Post from "../post/Post"
import { useState } from "react"
import Input from "../input/Input"

const Posts = (props) =>{

    const [photo, setPhoto] = useState([])   

    console.log(photo)

    const handleFormData =(data)=>{
        setPhoto((prevData)=>{
            return[data,...prevData]
        })
        setClicked(false)
    }

    const [clicked, setClicked]=useState(false);

    const handleClicked = ()=>{
        setClicked(true)
        
    }
 
 return(
        <div className="container">
            <button onClick={handleClicked}>Add picture</button>
            
            {clicked ?<div>
                    <Input onSave = {handleFormData} />
                    </div> : <div></div>}

            <div className="row">
                {photo.map((photo)=>{
                    console.log(photo)
                    return(<Post 
                    key={photo.id}
                    title= {photo.title}
                    picture ={photo.picture}
                    
                    />)
                })}
            </div>

            
                
        </div>
    )
}

export default Posts