import { useState, useEffect } from "react";
import Card from './Card'; // Asegúrate de importar tu componente Card

function ProductGrid() {
    // 1. Crea la constante y el constructor para useState
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then(response => response.json())
            // 2. Usa el constructor para asignar a useState los productos
            .then(data => setProducts(data));
    }, []); // El array vacío asegura que useEffect se ejecute solo una vez al montar el componente

    // 3. Haz un map a la variable de productos para generar Cards
    return (
        <div key="product-grid" className="grid grid-cols-4 place-items-stretch gap-4 p-8 dark:bg-gray-900">
            {products.map(e => (
                <Card
                    key={e.id}
                    title={e.title}
                    paragraph={e.description}
                    image={e.image}
                    model={e.price} // Asegúrate que 'model' sea el prop correcto para el precio
                />
            ))}
        </div>
    );
}

export default ProductGrid;