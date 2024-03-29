import React,{useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import { Container, Row ,Col} from 'react-bootstrap'

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
    <Container className="product-detail">
      <Row>
        <Col>
          <img width={400} src={product?.img}/>
        </Col>
        <Col>
          <div>{product?.title}</div>
          <div>₩{product?.price}</div>
          <div>{product?.choice == true?"Conscious choice" : ""}</div>
          <div>{product?.size}</div>
        </Col>
      </Row>
    
    </Container>
  )
}

export default ProductDetail