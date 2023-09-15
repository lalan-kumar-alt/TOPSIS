import React from "react";
import   './calCss.css'
import Result from "../Result";
import { useState } from "react";
const Calculation=()=>{
  //disply screen
  const [screen,setScreen]=useState({s1:true,s2:false,s3:false,result:false})
  //watage prt
  const [watage,setWatage]=useState({i1:"0.25",i2:"0.25",i3:"0.25",i4:"0.25"})
//is checked or not 
const [checked,setChecked]=useState({c1:true,c2:false,c3:false,c4:false})
    //filling data
    const [item1,setItem1]=useState({c1:"250",c2:"16",c3:"12",c4:"5" })
    const [item2,setItem2]=useState({c1:"200",c2:"16",c3:"8",c4:"3"})
    const [item3,setItem3]=useState({c1:"300",c2:"32",c3:"16",c4:"4" })
    const [item4,setItem4]=useState({c1:"275",c2:"32",c3:"8",c4:"4" })
    const [item5,setItem5]=useState({c1:"225",c2:"16",c3:"16",c4:"2" })

    const [item1C,setItem1C]=useState({c1:"250",c2:"16",c3:"12",c4:"5" })
    const [item2C,setItem2C]=useState({c1:"200",c2:"16",c3:"8",c4:"3"})
    const [item3C,setItem3C]=useState({c1:"300",c2:"32",c3:"16",c4:"4" })
    const [item4C,setItem4C]=useState({c1:"275",c2:"32",c3:"8",c4:"4" })
    const [item5C,setItem5C]=useState({c1:"225",c2:"16",c3:"16",c4:"2" })
    //data of second table
    const [idealBestValue,setIdealBestValue]=useState({c1:"000",c2:"000",c3:"000",c4:"000"})
    const [idealWorsedValue,setIdealWorsedValue]=useState({c1:"000",c2:"000",c3:"000",c4:"000"})
    //result screen 
     const [edBest,setEdBest]=useState({it1:"00",it2:"00",it3:"00",it4:"00",it5:"00"})
     const [edWorst,setEdWorst]=useState({it1:"00",it2:"00",it3:"00",it4:"00",it5:"00"})
     const [edBestWorst,setEdBestWorst]=useState({it1:"00",it2:"00",it3:"00",it4:"00",it5:"00"})
     const [edPerformanceScore,setEdPerformanceScore]=useState({it1:"00",it2:"00",it3:"00",it4:"00",it5:"00"}) 

   
     const [ans,setAns]=useState(0)
    const fillingWatage=(e)=>{setWatage({...watage,[e.target.name]:e.target.value})}
    const fillingChacked=(e)=>{setChecked({...checked,[e.target.name]:e.target.checked})}

    const fillingDataItem1=(e)=>{setItem1({...item1,[e.target.name]:e.target.value})}
    const fillingDataItem2=(e)=>{setItem2({...item2,[e.target.name]:e.target.value})}
    const fillingDataItem3=(e)=>{setItem3({...item3,[e.target.name]:e.target.value})}
    const fillingDataItem4=(e)=>{setItem4({...item4,[e.target.name]:e.target.value})}
    const fillingDataItem5=(e)=>{setItem5({...item5,[e.target.name]:e.target.value})}

    //Calculation normal value
    const normalize=()=>{
         
          let value1=Math.sqrt(Math.pow(+item1.c1,2)+Math.pow(+item2.c1,2)+Math.pow(+item3.c1,2)+Math.pow(+item4.c1,2)+Math.pow(+item5.c1,2));
          let value2=Math.sqrt(Math.pow(+item1.c2,2)+Math.pow(+item2.c2,2)+Math.pow(+item3.c2,2)+Math.pow(+item4.c2,2)+Math.pow(+item5.c2,2));
          let value3=Math.sqrt(Math.pow(+item1.c3,2)+Math.pow(+item2.c3,2)+Math.pow(+item3.c3,2)+Math.pow(+item4.c3,2)+Math.pow(+item5.c3,2));
          let value4=Math.sqrt(Math.pow(+item1.c4,2)+Math.pow(+item2.c4,2)+Math.pow(+item3.c4,2)+Math.pow(+item4.c4,2)+Math.pow(+item5.c4,2));

          setItem1C({
            c1:(item1.c1/value1)*watage.i1,
            c2:(item1.c2/value2)*watage.i2,
            c3:(item1.c3/value3)*watage.i3,
            c4:(item1.c4/value4)*watage.i4,
        })
        setItem2C({
          c1:(item2.c1/value1)*watage.i1,
          c2:(item2.c2/value2)*watage.i2,
          c3:(item2.c3/value3)*watage.i3,
          c4:(item2.c4/value4)*watage.i4,
      })
      setItem3C({
        c1:(item3.c1/value1)*watage.i1,
        c2:(item3.c2/value2)*watage.i2,
        c3:(item3.c3/value3)*watage.i3,
        c4:(item3.c4/value4)*watage.i4,
    })
    setItem4C({
      c1:(item4.c1/value1)*watage.i1,
      c2:(item4.c2/value2)*watage.i2,
      c3:(item4.c3/value3)*watage.i3,
      c4:(item4.c4/value4)*watage.i4,
  })      
  setItem5C({
    c1:(item5.c1/value1)*watage.i1,
    c2:(item5.c2/value2)*watage.i2,
    c3:(item5.c3/value3)*watage.i3,
    c4:(item5.c4/value4)*watage.i4,
}) 
      setScreen({s1:false,s2:true,s3:false,result:false,s2next:true})
}
const idealBestWorst=()=>{
  setIdealBestValue({
    c1:checked.c1?Math.min(item1C.c1,item2C.c1,item3C.c1,item4C.c1,item5C.c1):Math.max(item1C.c1,item2C.c1,item3C.c1,item4C.c1,item5C.c1),
    c2:checked.c2?Math.min(item1C.c2,item2C.c2,item3C.c2,item4C.c2,item5C.c2):Math.max(item1C.c2,item2C.c2,item3C.c2,item4C.c2,item5C.c2),
    c3:checked.c3?Math.min(item1C.c3,item2C.c3,item3C.c3,item4C.c3,item5C.c3):Math.max(item1C.c3,item2C.c3,item3C.c3,item4C.c3,item5C.c3),
    c4:checked.c4?Math.min(item1C.c4,item2C.c4,item3C.c4,item4C.c4,item5C.c4):Math.max(item1C.c4,item2C.c4,item3C.c4,item4C.c4,item5C.c4)
  })
  setIdealWorsedValue({
    c1:!checked.c1?Math.min(item1C.c1,item2C.c1,item3C.c1,item4C.c1,item5C.c1):Math.max(item1C.c1,item2C.c1,item3C.c1,item4C.c1,item5C.c1),
    c2:!checked.c2?Math.min(item1C.c2,item2C.c2,item3C.c2,item4C.c2,item5C.c2):Math.max(item1C.c2,item2C.c2,item3C.c2,item4C.c2,item5C.c2),
    c3:!checked.c3?Math.min(item1C.c3,item2C.c3,item3C.c3,item4C.c3,item5C.c3):Math.max(item1C.c3,item2C.c3,item3C.c3,item4C.c3,item5C.c3),
    c4:!checked.c4?Math.min(item1C.c4,item2C.c4,item3C.c4,item4C.c4,item5C.c4):Math.max(item1C.c4,item2C.c4,item3C.c4,item4C.c4,item5C.c4)
  })
  console.log(ans,"ans")
  setAns(ans+1)
  setScreen({s1:false,s2:true,s3:false,result:true,s2next:false})
}
     const result=()=>{
      
      setAns(ans+1)
            setEdBest({
              it1:Math.sqrt(Math.pow(item1C.c1-idealBestValue.c1,2)+Math.pow(item1C.c2-idealBestValue.c2,2)+Math.pow(item1C.c3-idealBestValue.c3,2)+Math.pow(item1C.c4-idealBestValue.c4,2)),
              it2:Math.sqrt(Math.pow(item2C.c1-idealBestValue.c1,2)+Math.pow(item2C.c2-idealBestValue.c2,2)+Math.pow(item2C.c3-idealBestValue.c3,2)+Math.pow(item2C.c4-idealBestValue.c4,2)),
              it3:Math.sqrt(Math.pow(item3C.c1-idealBestValue.c1,2)+Math.pow(item3C.c2-idealBestValue.c2,2)+Math.pow(item3C.c3-idealBestValue.c3,2)+Math.pow(item3C.c4-idealBestValue.c4,2)),
              it4:Math.sqrt(Math.pow(item4C.c1-idealBestValue.c1,2)+Math.pow(item4C.c2-idealBestValue.c2,2)+Math.pow(item4C.c3-idealBestValue.c3,2)+Math.pow(item4C.c4-idealBestValue.c4,2)),
              it5:Math.sqrt(Math.pow(item5C.c1-idealBestValue.c1,2)+Math.pow(item5C.c2-idealBestValue.c2,2)+Math.pow(item5C.c3-idealBestValue.c3,2)+Math.pow(item5C.c4-idealBestValue.c4,2)),
            })
            setEdWorst({
              it1:Math.sqrt(Math.pow(item1C.c1-idealWorsedValue.c1,2)+Math.pow(item1C.c2-idealWorsedValue.c2,2)+Math.pow(item1C.c3-idealWorsedValue.c3,2)+Math.pow(item1C.c4-idealWorsedValue.c4,2)),
              it2:Math.sqrt(Math.pow(item2C.c1-idealWorsedValue.c1,2)+Math.pow(item2C.c2-idealWorsedValue.c2,2)+Math.pow(item2C.c3-idealWorsedValue.c3,2)+Math.pow(item2C.c4-idealWorsedValue.c4,2)),
              it3:Math.sqrt(Math.pow(item3C.c1-idealWorsedValue.c1,2)+Math.pow(item3C.c2-idealWorsedValue.c2,2)+Math.pow(item3C.c3-idealWorsedValue.c3,2)+Math.pow(item3C.c4-idealWorsedValue.c4,2)),
              it4:Math.sqrt(Math.pow(item4C.c1-idealWorsedValue.c1,2)+Math.pow(item4C.c2-idealWorsedValue.c2,2)+Math.pow(item4C.c3-idealWorsedValue.c3,2)+Math.pow(item4C.c4-idealWorsedValue.c4,2)),
              it5:Math.sqrt(Math.pow(item5C.c1-idealWorsedValue.c1,2)+Math.pow(item5C.c2-idealWorsedValue.c2,2)+Math.pow(item5C.c3-idealWorsedValue.c3,2)+Math.pow(item5C.c4-idealWorsedValue.c4,2)),
            })
            setEdBestWorst({
              it1:+edBest.it1+(+edWorst.it1),
              it2:+edBest.it2+(+edWorst.it2),
              it3:+edBest.it3+(+edWorst.it3),
              it4:+edBest.it4+(+edWorst.it4),
              it5:+edBest.it5+(+edWorst.it5)
            })
            setEdPerformanceScore({
              it1:+edWorst.it1/(+edBestWorst.it1),
              it2:+edWorst.it2/(+edBestWorst.it2),
              it3:+edWorst.it3/(+edBestWorst.it3),
              it4:+edWorst.it4/(+edBestWorst.it4),
              it5:+edWorst.it5/(+edBestWorst.it5)
            })
           
            setScreen({s1:false,s2:false,s3:true,result:true})
     }
    
   
    return(
        <div className="container" >
           <h1 style={{color:'whitesmoke'}}>TOPSIS - Technique for Order Preference by Similarity to Ideal Solution</h1>
      {screen.s1&&<h2 style={ {paddingTop:"150px"}}>Enter Data</h2>}
           {screen.s1&&<div className="table">
      <table>
      <tr  className="watageBorder">
        <th>watage</th>
          <td><input value={watage.i1} name="i1" onChange={fillingWatage} className="watage" type="number"/></td>
          <td><input value={watage.i2} name="i2" onChange={fillingWatage} className="watage" type="number"/></td>
          <td><input value={watage.i3} name="i3" onChange={fillingWatage} className="watage" type="number"/></td>
          <td><input value={watage.i4} name="i4" onChange={fillingWatage} className="watage" type="number"/></td>
            
        </tr>
        <tr>
          <th className="title">Attribute & Criteria</th>
          <th className="title">Criteria-1   <input name="c1" checked={checked.c1} onChange={fillingChacked} type="checkbox"/></th>
          <th className="title">Criteria-2 <input name="c2" checked={checked.c2} onChange={fillingChacked}  type="checkbox"/></th>
          <th className="title">Criteria-3 <input name="c3" checked={checked.c3} onChange={fillingChacked}  type="checkbox"/></th>
          <th className="title">Criteria-4 <input name="c4" checked={checked.c4} onChange={fillingChacked}  type="checkbox"/></th>
        </tr>
        <tr>
        <th>Item-1</th>
          <td><input value={item1.c1} name="c1" onChange={fillingDataItem1} className="ij-container" type="number"/></td>
          <td><input value={item1.c2} name="c2" onChange={fillingDataItem1} className="ij-container" type="number"/></td>
          <td><input value={item1.c3} name="c3" onChange={fillingDataItem1} className="ij-container" type="number"/></td>
          <td><input value={item1.c4} name="c4" onChange={fillingDataItem1} className="ij-container" type="number"/></td>
           
        </tr>
        <tr>
        <th>Item-2</th>
        <td><input value={item2.c1} name="c1" onChange={fillingDataItem2} className="ij-container" type="number"/></td>
          <td><input value={item2.c2} name="c2" onChange={fillingDataItem2} className="ij-container" type="number"/></td>
          <td><input value={item2.c3} name="c3" onChange={fillingDataItem2} className="ij-container" type="number"/></td>
          <td><input value={item2.c4} name="c4" onChange={fillingDataItem2} className="ij-container" type="number"/></td>
        
        </tr>
        <tr>
        <th>Item-3</th>
        <td><input value={item3.c1} name="c1" onChange={fillingDataItem3} className="ij-container" type="number"/></td>
          <td><input value={item3.c2} name="c2" onChange={fillingDataItem3} className="ij-container" type="number"/></td>
          <td><input value={item3.c3} name="c3" onChange={fillingDataItem3} className="ij-container" type="number"/></td>
          <td><input value={item3.c4} name="c4" onChange={fillingDataItem3} className="ij-container" type="number"/></td>
         
        </tr>
        <tr>
        <th>Item-4</th>
        <td><input value={item4.c1} name="c1" onChange={fillingDataItem4} className="ij-container" type="number"/></td>
          <td><input value={item4.c2} name="c2" onChange={fillingDataItem4} className="ij-container" type="number"/></td>
          <td><input value={item4.c3} name="c3" onChange={fillingDataItem4} className="ij-container" type="number"/></td>
          <td><input value={item4.c4} name="c4" onChange={fillingDataItem4} className="ij-container" type="number"/></td>
         
        </tr>
        <tr>
        <th>Item-5</th>
        <td><input value={item5.c1} name="c1" onChange={fillingDataItem5} className="ij-container" type="number"/></td>
          <td><input value={item5.c2} name="c2" onChange={fillingDataItem5} className="ij-container" type="number"/></td>
          <td><input value={item5.c3} name="c3" onChange={fillingDataItem5} className="ij-container" type="number"/></td>
          <td><input value={item5.c4} name="c4" onChange={fillingDataItem5} className="ij-container" type="number"/></td>
          
        </tr>
      </table>
    </div>}

            {screen.s1&&<button style={{color:"whitesmoke"}} onClick={normalize} className="dataSubmit">Submit & Next</button>}
            {/* STEP-1  */}
            
            {screen.s2&&<h2  style={ {paddingTop:"150px" }}>After Normalization</h2>}
           {screen.s2&&<div className="table">
      <table>
        <tr>
          <th>Attribute & Criteria</th>
          <th>Criteria-1</th>
          <th>Criteria-2</th>
          <th>Criteria-3</th>
          <th>Criteria-4</th>
          
        </tr>
        <tr>
        <th>Item-1</th>
          <td className="ij-NormalisedcCntainer">{item1C.c1}</td>
          <td className="ij-NormalisedcCntainer">{item1C.c2}</td>
          <td className="ij-NormalisedcCntainer">{item1C.c3}</td>
          <td className="ij-NormalisedcCntainer">{item1C.c4}</td>
          
        </tr>
        <tr>
        <th>Item-2</th>
        <td className="ij-NormalisedcCntainer">{item2C.c1}</td>
          <td className="ij-NormalisedcCntainer">{item2C.c2}</td>
          <td className="ij-NormalisedcCntainer">{item2C.c3}</td>
          <td className="ij-NormalisedcCntainer">{item2C.c4}</td>
       
        </tr>
        <tr>
        <th>Item-3</th>
        <td className="ij-NormalisedcCntainer">{item3C.c1}</td>
          <td className="ij-NormalisedcCntainer">{item3C.c2}</td>
          <td className="ij-NormalisedcCntainer">{item3C.c3}</td>
          <td className="ij-NormalisedcCntainer">{item3C.c4}</td>
    
        </tr>
        <tr>
        <th>Item-4</th>
        <td className="ij-NormalisedcCntainer">{item4C.c1}</td>
          <td className="ij-NormalisedcCntainer">{item4C.c2}</td>
          <td className="ij-NormalisedcCntainer">{item4C.c3}</td>
          <td className="ij-NormalisedcCntainer">{item4C.c4}</td>
 
        </tr>
        <tr>
        <th>Item-5</th>
        <td className="ij-NormalisedcCntainer">{item5C.c1}</td>
          <td className="ij-NormalisedcCntainer">{item5C.c2}</td>
          <td className="ij-NormalisedcCntainer">{item5C.c3}</td>
          <td className="ij-NormalisedcCntainer">{item5C.c4}</td>
 
        </tr>
        <tr>
        <th style={{color:"green"}}> -----------------------</th>
          <td style={{color:"green"}}>----------------------------------</td>
          <td style={{color:"green"}}>----------------------------------</td>
          <td style={{color:"green"}}>----------------------------------</td>
          <td style={{color:"green"}}>----------------------------------</td>
 
        </tr>
        <tr>
        <th style={{color:"green"}}>V<sub>j</sub><sup>+</sup></th>
          <td className="ij-NormalisedcCntainer vij">{idealBestValue.c1}</td>
          <td className="ij-NormalisedcCntainer vij">{idealBestValue.c2}</td>
          <td className="ij-NormalisedcCntainer vij">{idealBestValue.c3}</td>
          <td className="ij-NormalisedcCntainer vij">{idealBestValue.c4}</td>
 
        </tr>
        <tr>
        <th style={{color:"green"}}>V<sub>j</sub><sup>-</sup></th>
          <td className="ij-NormalisedcCntainer vij"> {idealWorsedValue.c1}</td>
          <td className="ij-NormalisedcCntainer vij">{idealWorsedValue.c2}</td>
          <td className="ij-NormalisedcCntainer vij">{idealWorsedValue.c3}</td>
          <td className="ij-NormalisedcCntainer vij">{idealWorsedValue.c4}</td>
 
        </tr>
      </table>
      
    </div>}
    {screen.s2next&&<button onClick={idealBestWorst} style={{color:"whitesmoke"}} className="dataSubmit">Next</button>}
    {ans===1&&<button onClick={result} style={{backgroundColor:"green"}} className="dataSubmit">Result</button>}
        {screen.s3&&<Result answer={edPerformanceScore} ans={ans} screen={screen} result={result}  siMax={edBest} siMin={edWorst} siMaxMin={edBestWorst} score={edPerformanceScore} />}
        </div>
    )
 
}
export default Calculation