import { useState } from 'react'
import axios from "axios";
 
const AddProduct = () => {
    const [title, setTitle] = useState('');
 
    const saveProduct = async (e) => {
        console.log("title",title);
        e.preventDefault();
        await axios.post('13.233.126.68:7000/products',{
            title: title,
        });
    }
 
    return (
        <div>
            <form onSubmit={ saveProduct }>
                <div className="field">
                    <label className="label">Title</label>
                    <input 
                        className="input"
                        type="text"
                        placeholder="Title"
                        value={ title }
                        onChange={ (e) => setTitle(e.target.value) }
                    />
                </div>
                <div className="field">
                    <button className="button is-primary">Save button</button>
                </div>
            </form>
        </div>
    )
}
 
export default AddProduct
