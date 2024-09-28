import React, { useEffect, useState } from 'react'
import { getDocs, collection } from 'firebase/firestore'
import { database } from '../config/firebase'
function AllProducts() {
    const productData = collection(database, 'products')
    const [newproduct, setNewProduct] = useState([])
    useEffect(() => {
        async function getProducts() {
            const data = await getDocs(productData)
            setNewProduct(data.docs.map((doc) => ({
                ...doc.data(), id: doc.id
            })))
        }
        getProducts()
    }, [])

    return (
        <div>
            <h1>All products</h1>
            {newproduct?.map((value, index) => (
                <div key={index}>
                    <h1>{value.title}</h1>
                </div>
            ))}
        </div>
    )
}

export default AllProducts
