// import React, { useState } from 'react'
// import styled from 'styled-components';
// class Converter extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       currencies: [],
//       from: 'EUR',
//       to: 'USD',
//       result: null
//     };
//   }
//   render() {
//     const [from,setFrom]=useState("");
//   const [to,setTo]=useState("");
//     const convert=(e)=>{
//       e.preventDefault();
//       console.log("Details Have Been Submitted");
//       console.log(from);
//       console.log(to);
//   }
   

//     return (

//       <ConverterWrapper>
//         <div className="wrapper text-center">
//           <div className="header-wrapper">
//             <h6 className="header text-white">Currency Converter</h6>
//           </div>
//           <form className="form my-5 mx-auto" autocomplete="off">
//             <div className="form-group">
//               <div className="from text-white">
//                 <select name="select" id="select" class="form-control" 
//                   value={from}
//                   onChange={(e)=>{setFrom(e.target.value)}} >
//                   <option hidden style={{ textAlign: 'center' }} selected>-- FROM --</option>
//                   <option value="INR">Indian Rupee INR</option>
//                   <option value="USD">Us Dollar USD</option>
//                   <option value="CD">Canandian Dollar CD</option>
//                   <option value="EUR">Euro EUR</option>
//                   <option value="KWD">Kuwaiti Dinar KWD</option>
//                 </select>
//               </div>


//             </div>
//             <div className="form-group">
//               <select name="select" id="select" class="form-control"
//                   value={to}
//                   onChange={(e)=>{setTo(e.target.value)}}>
//                 <option hidden style={{ textAlign: 'center' }} selected>-- TO --</option>
//                 <option value="INR">Indian Rupee INR</option>
//                 <option value="USD">Us Dollar USD</option>
//                 <option value="CD">Canandian Dollar CD</option>
//                 <option value="EUR">Euro EUR</option>
//                 <option value="KWD">Kuwaiti Dinar</option>
//               </select>

//             </div>
//             <div className="form-group">
//               <label for="amount" className="amount text-white" autocomplete="off">Amount</label>
//               <input
//                 id="amount"
//                 class="form-control"
//                 type="text"
//                 name="amount"
//               />
//             </div>
//           </form>
//           <h3 className="result">0</h3>
//           <button className="btn-lg btn-primary btn-convert mb-5" onClick={convert} >Convert</button>
//         </div>
//       </ConverterWrapper>
//     );
//   }
// }

// const ConverterWrapper = styled.div`
// margin-left: 2rem;
// width: 70rem;
// height: auto;
// background-color: #3a4149;
// border: 1px solid #000;
// .header {
//   text-align: left;
//   font-family: 'Open Sans';
//   padding: 1.3rem 1rem 1rem 1rem;
// }
// .text-white {
//   font-family: Open Sans;
// }
// .form {
//   width: 20%;
// }
// .header-wrapper {
//   background-color: #343b41;
//   border-bottom: 1px solid #000;
// }
// `;

// export default Converter;


import React, { useState } from 'react'
import './converter.css'
import styled from 'styled-components';

const cur = {
  'INRtoUSD' : 0.013,
  'INRtoCD': 0.017,
  'INRtoEUR': 0.012,
  'INRtoKWD': 0.0040,
  'USDtoCD': 1.27,
  'USDtoEUR': 0.93,
  'USDtoKWD':0.31,
  'USDtoINR' : 76.48,
  'CDtoINR' : 0.017,
  'CDtoUSD' : 0.79,
  'CDtoEUR': 0.73,
  'CDtoKWD': 0.23,
  'EURtoINR': 0.012,
  'EURtoUSD': 0.93,
  'EURtoCD': 0.73,
  'EURtoKWD': 0.33,
  'KWDtoINR':0.0040,
  'KWDtoUSD':0.31,
  'KWDtoCD':0.23,
  'KWDtoEUR' :0.33
}

const Converter = () => {
  const [from,setFrom]=useState("INR");
  const [to,setTo]=useState("USD");
  const [amount,setAmount]=useState(0);
const [res,setRes]=useState("0");
  const convert=(e)=>{
          e.preventDefault();
          console.log(from);
          console.log(to);
          var s = from + "to" + to;
          console.log(s);
          console.log(amount);
          var res1 = cur[s] * amount;
          console.log(res1);
          setRes(res1);
      }
    
  return(
    <>
    <div className='wrapper'>
    <div className="wrapper text-center">
        <div className="header-wrapper">
             <h6 className="header text-white">Currency Converter</h6>
           </div>
           <form className="form my-5 mx-auto" autoComplete="off">
             <div className="form-group">
               <div className="from text-white">
                <select name="select" id="select" class="form-control" 
                  value={from}
                  onChange={(e)=>{setFrom(e.target.value)}} >
                  <option hidden style={{ textAlign: 'center' }} selected>-- FROM --</option>
                  <option value="INR">Indian Rupee INR</option>
                  <option value="USD">Us Dollar USD</option>
                  <option value="CD">Canandian Dollar CD</option>
                  <option value="EUR">Euro EUR</option>
                  <option value="KWD">Kuwaiti Dinar KWD</option>
                </select>
              </div>


            </div>
            <div className="form-group">
              <select name="select" id="select" class="form-control"
                  value={to}
                  onChange={(e)=>{setTo(e.target.value)}}>
                <option hidden style={{ textAlign: 'center' }} selected>-- TO --</option>
                <option value="INR">Indian Rupee INR</option>
                <option value="USD">Us Dollar USD</option>
                <option value="CD">Canandian Dollar CD</option>
                <option value="EUR">Euro EUR</option>
                <option value="KWD">Kuwaiti Dinar</option>
              </select>

            </div>
            <div className="form-group">
              <label for="amount" className="amount text-white" autoComplete="off">Amount</label>
              <input
                id="amount"
                class="form-control"
                type="text"
                name="amount"
                value={amount} 
              onChange={(e)=>{setAmount(e.target.value)}}
              />
            </div>
          </form>
          <h3 className="result text-white">{res}</h3>
          <button className="btn-lg btn-primary btn-convert mb-5" onClick={convert} >Convert</button>
        </div>
        </div>
    </>
    )
}


export default Converter