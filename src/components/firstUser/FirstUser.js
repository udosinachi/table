import React from 'react'
import {Style } from './userStyle'

class FirstUser extends React.Component{
    constructor(props){
        super(props)
        this.state = {

        }
    }
    render(props){
        return(
            <Style>
                <div className='body'>
                    <div className='svg'>
                        <img src={this.props.img} alt='svg'/>
                    </div>
                    <div className='text'>
                        <h4>{this.props.bitcoin}</h4>
                        <h4>{this.props.name}</h4>
                        <div className='subtext'>
                            <label>  <p>{this.props.itunes}</p> Payment </label><br/><hr/>
                            <label> <p>{this.props.usd}</p> Currency </label><br/><hr/>
                            <label>  <p>{this.props.price}</p> Range </label><br/><hr/>
                            <label> <p>{this.props.range}</p> Rate </label><br/><hr/>
                        </div>
                    </div>
                    <div className='btn'>
                        <button>{this.props.button}</button>
                    </div>

                </div>
            </Style>
        )
    }
}

export default FirstUser