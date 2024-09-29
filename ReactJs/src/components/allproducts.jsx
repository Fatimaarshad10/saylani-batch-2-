import React, { useEffect, useState } from 'react'
import { getDocs, collection, doc, deleteDoc } from 'firebase/firestore'
import { database } from '../config/firebase'

function AllProducts() {
    const productData = collection(database, 'products')
    const [newproduct, setNewProduct] = useState([])

    useEffect(() => {
        async function getProducts() {
            const data = await getDocs(productData)
            console.log('get docs', data)
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
    return (
        <div>
            <h1>All products</h1>
            {newproduct?.map((value, index) => (
                <div key={index}>
                    <h1>{value.title}</h1>
                    <button onClick={() => handleDelete(value.id)}>delete</button>
                </div>
            ))}
        </div>
    )
}

export default AllProducts
