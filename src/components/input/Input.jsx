import { useState} from "react";
let id = 0;

const Input = (props) =>{
    
    const [formData, setFromData]= useState({
        'id': '',
        'title': '',
        'picture': ''

    })

    const handleChange = (event)=>{
        setFromData(
        {
            ...formData,
            [event.target.name]:event.target.value


        }
        )
    }

    const submitHandle = (event) =>{
        event.preventDefault();
        id = id + 1;
        console.log(id)
        formData.id = id;
        props.onSave({...formData})
    }



    return(
        <form className="form" onSubmit={submitHandle}>
            <div className="form-group">
                <input  type="text" name="title" placeholder="Pavadinimas" className=" m-1 form-control" onChange={handleChange} value={formData.title}/>
            </div>
            <div className="form-group">
                <textarea name="picture" placeholder="Linkas" className=" m-1 form-control" onChange={handleChange} value={formData.picture}/>
            </div>
            <div className="form-group">
                <button type="submit" className="btn btn-primary">Saugoti</button>
            </div>

        </form>
    )
}

export default Input;