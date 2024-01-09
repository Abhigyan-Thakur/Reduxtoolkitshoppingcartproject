import { useSelector } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
const Cart = () => {
    const products = useSelector(state => state.Cart);
    console.log("datatype:", typeof (products))
    return (<>
    </>);
};

export default Cart;