import React from 'react'

const Ragister = () => {
  return (
    <>
    <div div className='signup'>

      <div className='container-fluid ' >
        <div className='row justify-content-center'>
          <div className='col-10'>
            <div className='logo'>
              <center>
                <img src='../images/logo.jpg' className='img-fluid img_logo' alt='image not long time available' title='profile image' />
              </center></div>
          </div>
        </div>

        <div className='row content'>

          <div className='col-5 text-start text-success ml-3 '>
            <p className='name' >Name  </p>
            <p className='address' >Address</p>
            <p className='date_of_birth' >DOB</p>
            <p className='Skill' >Skill</p>
            <p className='Qualification' >Qualification</p>
            <p className='post' >Post</p>

          </div>

          <div className='col-5 text-end text-black ml-3'>
            <p className='name' >harikesh</p>
            <p className='address' >azamgarh</p>
            <p className='date_of_birth' >10/08/2004</p>
            <p className='Skill' >web dev</p>
            <p className='Qualification' >B-Tech</p>
            <p className='post' >Software engineer</p>
          </div>

        </div>

      </div>
    </div>
    </>
  )
}

export default Ragister;