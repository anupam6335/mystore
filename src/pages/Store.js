// actual page of Sasta Bazaar or main page
import { Row, Col } from 'react-bootstrap';
import { productArray} from '../productStore';
import ProductCard from '../components/productCard';

function Store() {

    return (
        <>
            <h1 align='center' className='p-3'>Welcome to The Sasta Bazaar</h1>
            {/* small screen we only want to show one column for the rows
                but medium screen we want to show three different column
            */}
            <Row xs={1} md={3} className='g-4'>
                { productArray.map(( product, idx ) => (
                     <Col align='center' key={idx}>
                        {/* <h1>{product.title}</h1> */}
                        <ProductCard product={product}/>
                    </Col>
                ))}
            </Row>
            
        </>
    )
}

export default Store;