import React from 'react'
import FirstUser from './FirstUser'
import Userdata from './Userdata'
import {Div } from './userStyle'

function User(props){

    const Users = Userdata.map(use => <FirstUser key={use.id} img={use.img} bitcoin={use.bitcoin} name={use.name} 
        itunes={use.itunes} usd={use.usd} price={use.price} range={use.range} button={use.button} />)

    return(
        <Div>
            {Users}
        </Div>
    )
}

export default User