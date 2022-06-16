import React,{useRef} from 'react'
import Button from './Button'
import {FaSearch} from "react-icons/fa";

const Header = ({title,color,onAdd,showAdd,task,term,searchKeyword}) => {
  const inputEl=useRef("");
  const getSearchTerm=()=>{
    // console.log(inputEl.current.value);
    searchKeyword(inputEl.current.value)
  };
  return (
    <header className='header'>
      <h1 style={{color:color}}>{title}</h1>
      <Button color={showAdd?'red':'green'} text={showAdd?'CLOSE':'ADD'} onClick={onAdd}/>
      <input ref={inputEl} type="text" placeholder='Search here' className='prompt' value={term} onChange={getSearchTerm}/>
      <FaSearch/>
    </header>
  )
}

export default Header


//CSS IN JS
// const headingstyle={
//     color:'white',
//     backgroundColor:'black',
// }

// const Header = ({title}) => {
//     return (
//       <header>
//         <h1>{title}</h1>
//       </header>
//     )
//   }
  
//   export default Header

//   const Header = (props) => {
//     return (
//       <header>
//         <h1>{props.title}</h1>
//       </header>
//     )
//   }
  
//   Header.defaultProps={
//     title:'Task Tracker'
//   }
//   export default Header