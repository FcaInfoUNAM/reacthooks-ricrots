import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; 

function ProductDescription() {
    const [product, setProduct] = useState(null);
    const { id } = useParams(); 

    useEffect(() => {

        fetch(`https://fakestoreapi.com/products/${id}`)
            .then(response => response.json())
            .then(data => setProduct(data))
            .catch(error => console.error("Error fetching product:", error));
    }, [id]); 

    if (!product) {
        return <div className="p-8 dark:bg-gray-900 text-white">Cargando producto...</div>;
    }

    return (
        <div className="p-8 dark:bg-gray-900 text-white">
            <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
            <img src={product.image} alt={product.title} className="w-1/2 h-auto object-contain mb-4 mx-auto" />
            <p className="text-lg mb-2">**Descripción:** {product.description}</p>
            <p className="text-xl font-semibold mb-4">**Precio:** ${product.price}</p>
            <p className="text-sm text-gray-400">Categoría: {product.category}</p>
        </div>
    );
}

export default ProductDescription;