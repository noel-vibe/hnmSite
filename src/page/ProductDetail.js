import React,{useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import { Container, Row ,Col, Form, Button } from 'react-bootstrap'

const ProductDetail = () => {
  let {id}=useParams()
  const[product,setProduct] = useState(null)
  const getProductDetail=async()=>{
    let url =`https://my-json-server.typicode.com/noel-vibe/hnmSite/products/${id}`
    let response = await fetch(url);
    let data = await response.json();
    console.log("data",data)
    setProduct(data);
  }
  useEffect(()=>{
    getProductDetail()
  },[])
  return (
    <Container>
      <Row>
        <Col lg={6} sm={12}>
          <img className="product-img" src={product?.img}/>
        </Col>
        <Col>
          <h1>{product?.title}</h1>
          <h2>₩{product?.price}</h2>
        <Form.Select className="product-size" aria-label="Default select example">
          <option disabled>Size</option>
          {product?.size.map(i => 
          <option value={i} key={i}>{i}</option>)}
        </Form.Select>
          <div>
            <Button variant="danger" type="submit">구매하기</Button>
          </div>
        </Col>
      </Row>
    
    </Container>
  )
}

export default ProductDetail

