import React, { useState } from 'react';
import { app } from '../firebase';
import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { NavLink, useNavigate } from 'react-router-dom';

const auth = getAuth(app);

const Login = () => {
  const navigate = useNavigate();

  const [data, setData] = useState({
    email: '',
    password: '',
  });

  const handleInpute = (e) => {
    const { name, value } = e.target;
    setData({
      ...data, [name]: value
    });

  }

  const submitData = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, data.email , data.password  ).then((res) => {
      console.log(res)
    }).catch((err) => { alert("Email or Password are wronge") })
    navigate('/login')
  }



  return (
    <div className='container-fluid login '>
      <div className='row p-2'>

        <div className='col-md-6 col-sm-10 signup_left p-3' style={{
          borderRadius: '.7rem 0 0 .7rem'
        }}>
          <form>
            <center><h2 className='mb-4'>Login Now</h2></center>

            <div className="form-group">
              <label for="exampleInputEmail1">Email address</label>
              <input type="email"
                name='email'
                onChange={handleInpute}
                required
                className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />

            </div>
            <div className="form-group">
              <label for="exampleInputPassword1">Password</label>
              <input type="password"
                name='password'
                onChange={handleInpute}
                required
                className="form-control" id="exampleInputPassword1" placeholder="Password" />
            </div>

            <button onClick={submitData} style={{ marginTop: '.5rem' }} type="submit" className="btn btn-primary">Login</button>

            <br /><br />
            <NavLink to='/signup' style={{ color: 'black', textDecoration: 'none' }}>Create New Account</NavLink><br /><br />
          </form>

        </div>
        <div className='col-md-6 col-sm-10 login_rigth p-3' style={{ backgroundColor: 'orange', borderRadius: '0 0.7rem .7rem 0' }} >
          <img src='../images/login.png' className='login_img' />
        </div>
      </div>

    </div>
  )
}

export default Login;
