import React from 'react'
import './cart.css';
import { Link } from 'react-router-dom';

const Cart = () => {
    return (
        <>
            <div className='cart-container'>
                <div className='cart-fields'>

                    <div className='cart-transit'>
                        <img src='' alt='' className='cart-img' />
                        <div className='cart-transit-heading'>
                            <h3>In Transit</h3>
                            <p>On Mon, 5 Oct</p>
                        </div>
                    </div>
                    <div className='cart-product'>
                        <h3>No of Products: 10</h3>
                        <p>Total Amount: 659</p>

                    </div>


                </div>
                <div className='cart-values'>
                    <div className='cart-pData-container'>
                        <div className='cart-pData-fields'>
                            <img src='' alt='' className='cart-Product-img' />
                            <div >
                                <h3>Monsterra Plant</h3>
                                <p>Size: Small, Color: XYZ, Pot: XYZ</p>
                            </div>
                        </div>
                        <div className='cart-quantity'>
                            <p>Qty: 3</p>
                        </div>
                        <div className='cart-para-amount'>
                            <p>Amount: 259</p>

                        </div>

                    </div>

                    <div className='cart-pData-container  '>
                        <div className='cart-pData-fields'>
                            <img src='' alt='' className='cart-Product-img' />
                            <div >
                                <h3>Monsterra Plant</h3>
                                <p>Size: Small, Color: XYZ, Pot: XYZ</p>
                            </div>
                        </div>
                        <div className='cart-quantity'>
                            <p>Qty: 3</p>
                        </div>
                        <div className='cart-para-amount'>
                            <p>Amount: 259</p>

                        </div>

                    </div>
                    <div className='cart-pData-container '>
                        <div className='cart-pData-fields'>
                            <img src='' alt='' className='cart-Product-img' />
                            <div >
                                <h3>Monsterra Plant</h3>
                                <p>Size: Small, Color: XYZ, Pot: XYZ</p>
                            </div>
                        </div>
                        <div className='cart-quantity'>
                            <p>Qty: 3</p>
                        </div>
                        <div className='cart-para-amount'>
                            <p>Amount: 259</p>

                        </div>


                    </div>


                </div>
                <div className='cancel-product'>
                    <Link to={'/'} >Cancel Product</Link>
                    <h3>Help & Support</h3>
                </div>


            </div>
        </>
    )
}

export default Cart
