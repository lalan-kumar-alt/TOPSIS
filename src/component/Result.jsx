import React, { useState } from "react";
import './calculationPage/calCss.css'

const Result=(props)=>{
  const [recomended,setRecomended]=useState(false)
    //which item is good 
    const [answer,setAnswer]=useState(0)
  
  const showPopup=()=>{
    let ar=[props.answer.it1,props.answer.it2,props.answer.it3,props.answer.it4,props.answer.it5]
       let pos=0;
       let max=ar[0]
       for(let i=0;i<4;i++)
       {
        if(max<=ar[0]){max=ar[i];pos=i;}
       }
       setAnswer(pos+1)


    setRecomended(true)
    setTimeout(()=>setRecomended(false),5000);
  }

    return(<>
    {recomended&&<div onClick={()=>setRecomended(false)} style={{
      left:"15%",
      color:"whitesmoke",
      boxShadow:"2px 20px 80px red",
       height:"50px",
       width:"70%",
       fontSize:"30px",
       opacity:0.9
       ,top:"350px",
       position:'absolute'
       }} className="dataSubmit">"Item-{answer}" is best for you! </div>}
       {true&&<h2 style={ {paddingTop:"150px"}}>OverAll Calculated Result</h2>}
        <div className="table">
      <table>
        <tr>
          <th>Calculated Results</th>
          <th>S<sub>i</sub><sup>+</sup></th>
          <th>S<sub>i</sub><sup>-</sup></th>
          <th>S<sub>i</sub><sup>+</sup> + S<sub>i</sub><sup>-</sup></th>
          <th>P<sub>i</sub></th>
          
        </tr>
        <tr>
        <th>Item-1</th>
          <td className="ij-NormalisedcCntainer">{props.siMax.it1}</td>
          <td className="ij-NormalisedcCntainer">{props.siMin.it1}</td>
          <td className="ij-NormalisedcCntainer">{props.siMaxMin.it1}</td>
          <td className="ij-NormalisedcCntainer">{props.score.it1}</td>
          
        </tr>
        <tr>
        <th>Item-2</th>
        <td className="ij-NormalisedcCntainer">{props.siMax.it2}</td>
          <td className="ij-NormalisedcCntainer">{props.siMin.it2}</td>
          <td className="ij-NormalisedcCntainer">{props.siMaxMin.it2}</td>
          <td className="ij-NormalisedcCntainer">{props.score.it2}</td>
       
        </tr>
        <tr>
        <th>Item-3</th>
        <td className="ij-NormalisedcCntainer">{props.siMax.it3}</td>
          <td className="ij-NormalisedcCntainer">{props.siMin.it3}</td>
          <td className="ij-NormalisedcCntainer">{props.siMaxMin.it3}</td>
          <td className="ij-NormalisedcCntainer">{props.score.it3}</td>
    
        </tr>
        <tr>
        <th>Item-4</th>
        <td className="ij-NormalisedcCntainer">{props.siMax.it4}</td>
          <td className="ij-NormalisedcCntainer">{props.siMin.it4}</td>
          <td className="ij-NormalisedcCntainer">{props.siMaxMin.it4}</td>
          <td className="ij-NormalisedcCntainer">{props.score.it4}</td>
 
        </tr>
        <tr>
        <th>Item-5</th>
        <td className="ij-NormalisedcCntainer">{props.siMax.it5}</td>
          <td className="ij-NormalisedcCntainer">{props.siMin.it5}</td>
          <td className="ij-NormalisedcCntainer">{props.siMaxMin.it5}</td>
          <td className="ij-NormalisedcCntainer">{props.score.it5}</td>
 
        </tr>
      
      </table>
      
        </div>
        {(props.ans===2||props.ans===3)&&<button onClick={props.result()} style={{backgroundColor:"green"}} className="dataSubmit">Result</button>}
         {true&&<button onClick={showPopup} style={{backgroundColor:"green",marginBottom:'200px'}} className="dataSubmit">Show me the best recomended item no.</button>}
        </>
    )
}

export default Result;