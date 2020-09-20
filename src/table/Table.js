import React from 'react'
import {Tab } from './TableStyle'

function Table(){
    return(
        <Tab>
            <div className='body'>
                <div className='table'>
                    <div className='offers'>
                        <p>AVALIABLE OFFERS</p><hr/>
                    </div>
                    <div className='maintab'>
                        <div className='tab1'>
                            <p>Seller</p><hr/>
                            <div>
                                <p>hhshjsjsk</p>
                            </div>
                        </div>
                        <div className='tab2'>
                            <p>Coin</p><hr/>
                            <p>Bitcoin</p>
                        </div>
                        <div className='tab3'>
                            <p>Payment</p><hr/>
                            <p>Itunes Gift Card</p>
                        </div>
                        <div className='tab4'>
                            <p>Currency</p><hr/>
                            <p>USD</p>
                        </div>
                        <div className='tab5'>
                            <p>Range</p><hr/>
                            <p>$50.00 To $200.00</p>
                        </div>
                        <div className='tab6'>
                            <p>Rate</p><hr/>
                            <p>$16,446.41</p>
                        </div>
                        <div className='tab7'>
                            <p>Action</p><hr/>
                            <button>Buy</button>
                        </div>
                    </div>
                </div>
            </div>
        </Tab>
    )
}

export default Table