import { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch } from "react-redux";
import { add } from "../Store/cartSlice";

const Product = () => {
    const dispatch = useDispatch();
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(data => data.json())  // Extract JSON data from the response
            .then(result => setProducts(result))
    }, []);
    const handleAddtoCart = (pDetail) => {
        console.log("pDetail:", pDetail);
        dispatch(add(pDetail))
    }

    const cards = products.map(product => (
        <div className="col-md-3" key={product.id} style={{ margin: '3px 0px' }}>
            <Card key={product.id} style={{ width: '18rem', alignItems: 'center' }}>
                <Card.Img variant="top" src={product.image} style={{ width: '70%', height: '130px' }} />
                <Card.Body style={{ textAlign: 'center' }}>
                    <Card.Title>{product.name}</Card.Title>
                    <Card.Text>INR:{product.price}</Card.Text>
                </Card.Body>
                <Card.Footer style={{ width: '100%', textAlign: 'center' }}>
                    <Button variant="primary" onClick={() => handleAddtoCart(product)}>Add To Cart</Button>
                </Card.Footer>
            </Card>
        </div>
    ));

    return (
        <>
            <div className="row">
                {cards}
            </div>
        </>
    );
}

export default Product;
