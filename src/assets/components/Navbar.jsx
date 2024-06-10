import React, { useEffect } from 'react';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBBtn,
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getCartTotal } from '../features/cartSlice';
const Navbar = () => {
    const {cart,totalQuantity} = useSelector((state)=>state.allCart)

    const dispatch= useDispatch();
    useEffect(()=>{
        dispatch(getCartTotal())
    },[cart])

  return (
    <MDBNavbar light bgColor="light">
      <MDBContainer fluid>
        <MDBNavbarBrand>Navbar</MDBNavbarBrand>
        <Link to="/">All Products</Link>
        <MDBBtn color="dark">
          <Link to="/cart" style={{ color: 'white', textDecoration: 'none' }}>Cart({totalQuantity})</Link>
        </MDBBtn>
      </MDBContainer>
    </MDBNavbar>
  );
};

export default Navbar;
