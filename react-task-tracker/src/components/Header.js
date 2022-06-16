import React from 'react'
import Button from './Button'

const Header = ({title,color,onAdd,showAdd}) => {
  
  return (
    <header className='header'>
      <h1 style={{color:color}}>{title}</h1>
      <Button color={showAdd?'red':'green'} text={showAdd?'CLOSE':'ADD'} onClick={onAdd}/>

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