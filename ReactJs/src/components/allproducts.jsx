import React, { useEffect, useState } from 'react'
import { getDocs, collection, doc, deleteDoc  , updateDoc} from 'firebase/firestore'
import { database } from '../config/firebase'

function AllProducts() {
    const productData = collection(database, 'products')
    const [newproduct, setNewProduct] = useState([])
    const [editmode, setEditmode] = useState(false)
    const [titleStore , setTitlestore] = useState('')
    const [id , setId] = useState('')
    useEffect(() => {
        async function getProducts() {
            const data = await getDocs(productData)
            setNewProduct(data.docs.map((doc) => ({
                ...doc.data(), id: doc.id
            })))
        }
        getProducts()
    }, [])

    const handleDelete = async (id) => {
        const docData = doc(database, 'products', id)
        await deleteDoc(docData)
        setNewProduct(newproduct.filter((data) => data.id !== id))
    }
    const handleUpdate = (value) => {
        setEditmode(true)
        setTitlestore(value.title)
        setId(value.id)
    }
    const handleSave = async(id)=>{
        console.log('here is id' , id)
        const docData = doc(database, 'products', id)
        await updateDoc(docData , {title : titleStore})
        setNewProduct(newproduct.map((data , index) => {
            
        }))
    }
    const handleInput = (e)=>{
        setTitlestore(e.target.value)
    }
    return (
        <div>
            {editmode && 
            <>
                <h1>Update product</h1>
                <input type="text" value={titleStore} onChange={handleInput}/>
                <button onClick={()=>handleSave(id)}>Save</button>
                <button onClick={()=>setEditmode(false)}>Cancel</button>
            </>}

            <br />
            <h1>All products</h1>
            {newproduct?.map((value, index) => (
                <div key={index}>
                    <h1>{value.title}</h1>
                    <button onClick={() => handleDelete(value.id)}>delete</button>
                    <button onClick={() => handleUpdate(value)}>Update</button>
                </div>
            ))}


        </div>
    )
}

export default AllProducts