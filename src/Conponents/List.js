import React from 'react'
import AddtoList from './AddToList/AddtoList';

const List = () => {
  const style = {
    boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
    width:'70%',
    margin:'auto',
    borderRadius:'.7rem'
  }
  return (
    <div className='List' style={style}>
         <div className='bookName' >
          <caption className='d-flex flex-row' style={{
            marginLeft:'1rem',marginTop:'1rem'
          }}>
           <AddtoList />
          </caption>
          
         </div>
    </div>
  )
}

export default List;