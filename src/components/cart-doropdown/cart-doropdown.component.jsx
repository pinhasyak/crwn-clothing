import React from 'react';
import CustomButton from '../custom-button/custom-button.component';

import './cart-doropdown.syeles.scss';

const CartDropdown = () => (
  <div className='cart-dropdown'>
    <div className='cart-items' />
    <CustomButton>GO TO CHECHOUT</CustomButton>
  </div>
)

export default CartDropdown;