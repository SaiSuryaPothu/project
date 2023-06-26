import React ,{useState}from 'react'
import "./Card.css"


const Card = (props) => {
    const[input,setinput]=useState("");
    const[check,setcheck]=useState("")
    const checkhandler = () => {
        if(input===""){
            setcheck("Plz enter a valid input");
        }
        else if(+input<props.box_amount){
            setcheck(`we will get loss ${(+input)-props.box_amount}`);
        }
        else{
            setcheck(`we can get profit ${(+input)-props.box_amount}`)
        }

    }
  return (

    <div className='card'> 
        <div className="card-image">
            <img src={props.img} alt="Card" />
        </div>
        <div className='card-details'>
            <p>{props.name}</p>
            <p>Amount per box : {props.box_amount}</p>
            <p>Amount per piece : {props.piece_amount}</p>
            <input type='text' onChange={(e)=>setinput(e.target.value)} name='in'/>
            <button onClick={checkhandler}>Check</button>
            <p>{check}</p>
            

        </div>
    </div>  
    
  );
};

export default Card;