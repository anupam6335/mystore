import { Card, Button, Form, Row, Col } from "react-bootstrap";

export default function ProductCard( props ) {
    // props.product is the product we are selling 
    const product = props.product;
    return (
        <card>
            <Card.Body className="square border border-warning p-3">
                <Card.Title> { product.title } </Card.Title>
                <Card.Text> ₹{ product.price }</Card.Text>
                <Button variant="primary"> Add To Cart </Button>
            </Card.Body>
        </card>
    )
}