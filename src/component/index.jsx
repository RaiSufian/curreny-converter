import React,{useState, useEffect } from 'react'


const Converter = () => {
    const [curr, updateCurr] = useState({
        num:0,
        side:"",
    });
    const [Price, updatePrice] = useState(0);
    const [currType, setCurrtype] = useState("");
    useEffect(()=>{
        console.log("currecy converter", curr)
        if(curr.side==="PKR"){
            updatePrice(curr.num*170);
            setCurrtype("USD")
        }
        else if(curr.side==="USD"){
            updatePrice(curr.num/170);
            setCurrtype("PKR")
        }
    })
    const Getdetail =(event)=>{
        const { value, name } = event.target;
        updateCurr({...curr, [name]: value})
    }
    return (
        <div className="main">
            <div>
                <h1>Currecy Converter</h1>
                <div className="curr_from">
                    <input type="number" onChange={Getdetail} name="num"/>
                    <select  onChange={Getdetail} name="side">
                        <option>Select Currency</option>
                        <option value="PKR">PKR</option>
                        <option value="USD">USD</option>
                    </select>
                </div>
                <div className="result">
                    <h3>{curr.num}<span>{" " +curr.side} </span>{"=" + Price }<span>{" " + currType}</span></h3>    
                </div>
            </div>
        </div>
    )
}

export default Converter;
