import React from 'react';
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';

const Container = styled.div`

`

const Cart = () => {
  return (
    <Container>
        <Navbar />
        <Announcement />
        Cart
        <Footer />
    </Container>
  );
}

export default Cart;