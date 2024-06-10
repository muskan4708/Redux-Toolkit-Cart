import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardImage,
    MDBBtn,
    MDBCardText,
    MDBContainer,
    MDBRow,
    MDBCol,
  } from "mdb-react-ui-kit";
  import { addToCart } from "../features/cartSlice";
  
  import React from "react";
  import { useDispatch, useSelector } from "react-redux";
  
  const ProductCard = () => {
     const items = useSelector((state) => state.allCart.items);
     console.log("items", items);
     const dispatch= useDispatch()
  
     const handleAddToCart = (item) => {
        dispatch(addToCart(item));
        alert("Item added to cart!");
      };
    return (
      <div className="mb-2">
        <MDBContainer>
          <MDBRow className="mb-3">
            {items.map((item) => (
              <MDBCol size="md" key={item.id}>
                <MDBCard>
                  <MDBCardImage
                    src={item.img}
                    className="card-img-top"
                    alt={item.name}
                  />
                  <MDBCardBody>
                    <MDBCardText>{item.title}</MDBCardText>
                    <MDBCardText>{item.price}</MDBCardText>
                    <MDBBtn onClick={() => handleAddToCart(item)}>ADD</MDBBtn>

                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            ))}
          </MDBRow>
        </MDBContainer>
      </div>
    );
  };
  
  export default ProductCard;
  