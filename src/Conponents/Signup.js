import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, signInWithPopup } from 'firebase/auth';
import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import { app } from '../firebase';

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const gitHubProvider = new GithubAuthProvider()

const Signup = () => {
    const navigate = useNavigate()
    const [userDetail, setUserdetail] = useState({
        email: '',
        password: '',
        cpassword: ''
    });

    const handleInpute = (e) => {
        const { name, value } = e.target;
        setUserdetail({
            ...userDetail, [name]: value
        })
        setGoogleData({
            ...googleData, [name]: value
        })
    }
    const signupData = (e) => {
        e.preventDefault();
        if (userDetail.password === userDetail.cpassword) {
            if (userDetail.password.length < 7) {
                alert("Plz enter passwordt atleast 8 digit including (0-9) number ,(@ , ! , # , $ , % , &) symble , characters.");
                navigate('/signup')
            } else {
                createUserWithEmailAndPassword(auth, userDetail.email, userDetail.password).then((res) => { console.log(res) }).catch((err) => {
                    console.log(err)
                })
                navigate('/login')
            }


        } else {
            alert("Not matched")
        }

        console.log(userDetail)
    }
    const Login_signup_style = { fontSize: '1.5rem', cursor: 'pointer', textDecoration: 'none', backgroundColor: 'white' }

    // ================ Login With Google ===============

    const [googleData, setGoogleData] = useState({
        email: '',
        password: '',
        cpassword: '',
    });
    const signUpwithgoogle = async () => {

        const google = await signInWithPopup(auth, googleProvider);
        navigate('/')
        const response = google.user.reloadUserInfo;

        const Dname = response.displayName
        const email = response.email
        const image = response.photoUrl
        const password = response.passwordHash || "UkVEQUNURUQ"
        const cpassword = response.passwordHash || "UkVEQUNURUQ"

        const signupDetail = { Dname, email, image, password, cpassword }
        setGoogleData(signupDetail);

    }

    // =============== Login with Github ==================

    const signupWithgithub = async () =>{   
await signInWithPopup(auth , gitHubProvider).then((res)=>{
    const token = res.credential.accessToken;
    const user = res.user
    console.log(token , user)
 }).catch(function(error) {
    var errorCode = error.code;
    var errorMessage = error.message;
      
    console.log(errorCode)
    console.log(errorMessage)
 });
         
}
    

    return (
        <div className='container-fluid signup'>
            <div className='row justify-content-around p-2'>
                <div className='col-md-6 col-sm-10 signup_left p-3' style={{
                    borderRadius: '.7rem 0 0 .7rem'
                }}>
                    <form>
                        <center>
                            <div className='col-10 mb-4' style={{ backgroundColor: 'white', padding: '.7rem', justifyContent: 'center', display: 'flex', borderRadius: '.7rem', textDecoration: 'none', alignItems: 'center', marginTop: '1rem' }}>
                                <NavLink to='/login' style={Login_signup_style}>Login</NavLink>&nbsp;|&nbsp;
                                <NavLink to='/signup' style={Login_signup_style}>signUp</NavLink>

                            </div>
                        </center>

                        <div className="form-group">
                            <label for="exampleInputPassword1">Email Address</label>
                            <input type="email"
                                name='email'
                                onChange={handleInpute}
                                required
                                value={userDetail.email}
                                className="form-control" id="exampleInputPassword1" placeholder="Enter Your Email" />

                        </div>

                        <div>
                            <label for="exampleInputEmail1">Password</label>
                            <input type="password"
                                name='password'
                                onChange={handleInpute}
                                required
                                value={userDetail.password}
                                className="form-control" id="exampleInputEmail1" aria-describedby="passwordHelp" placeholder="Enter Password" />

                        </div>
                        <div className="form-group" style={{ marginTop: '1rem' }}>
                            <label for="exampleInputPassword1">Confirm Password</label>
                            <input type="password"
                                name='cpassword'
                                onChange={handleInpute}
                                required
                                value={userDetail.cpassword}
                                className="form-control" id="exampleInputPassword1" placeholder="Enter Confirm Password" />
                        </div>

                        <button
                            onClick={signupData}
                            style={{ marginTop: '.5rem', }} type="submit" className="btn btn-primary">Signup</button> &nbsp;
                        <p style={{ marginTop: '.5rem' }}>Login with Other</p>

                        <button onClick={signUpwithgoogle} style={{ cursor: 'pointer', border: 'none', backgroundColor: 'milk', borderRadius: '.5rem', color: 'green' }} > <i class="fa fa-google-plus" style={{
                            fontSize: '1.5rem', color: 'red',
                            padding: '.5rem', cursor: 'pointer'
                        }}></i> Sign-in With Google
                        </button>

                        <button 
                        onClick={signupWithgithub} 
                        style={{ cursor: 'pointer', border: 'none', backgroundColor: 'milk', borderRadius: '.5rem', color: 'green',marginTop:'1rem' }} >
                            <i class="fa fa-github-square" 
                            style={{
                                fontSize: '1.5rem', color: 'black',
                                padding: '.5rem', cursor: 'pointer',

                            }}
                            aria-hidden="true"></i>
                            Sign-in With GitHub&nbsp;&nbsp;&nbsp;&nbsp;
                        </button>

                    </form>
                </div>

                <div className='col-md-6 col-sm-10  signup_right' style={{ backgroundColor: 'orange', borderRadius: '0 .7rem .7rem 0' }} >
                    <img src='../images/signup.png' alt='...' className='' />
                </div>

            </div>
        </div >
    )
}

export default Signup;
