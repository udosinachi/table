import styled from 'styled-components'

export const Style = styled.div`
margin: 10px;
.body{
    display: flex;
    justify-content: space-evenly;
    width: 65%;
    margin: auto;
    padding: 20px;
    box-shadow: 2px 2px 2px 2px rgb(0, 0, 0, 0.4);
    padding: 35px 0;
    .svg{
        img{
            width: 80px;
        }
    }
    .text{
        h4{
            padding: 0;
            margin: 3px;
            color: #252079;
        }
        .subtext{
            display: flex;
            justify-content: center;
            
            label{
                text-align: center;
                font-size: 10px;
                color: gray;
                margin: 0 15px 0 0;
                p{
                    margin: 3px;
                    font-size: 16px;
                    color: black;
                    
                }
            }
        }
    }
    .btn{
        button{
            width: 100%;
            padding: 15px 50px;
            background: green;
            color: white;
            border: none;
            outline: none;
            margin-top: 25px;
            border-radius: 3px;
        }
    }
}
`

export const Div = styled.div`
display: flex;
flex-direction: column;
justify-content: space-evenly;
`