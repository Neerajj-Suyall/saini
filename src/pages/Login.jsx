import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import "../App.css"



function Login() {
        const [email, setEmail] = useState();
        const [password, setPassword] = useState();
        const navigate = useNavigate();


        // const SubmitData = (e) => {
        //         if (email?.length >= 9 || password.length >= 8) {
        //                 fetch(`${constant.domain}/user/login`, {
        //                         method: "POST",
        //                         headers: {
        //                                 "Content-Type": "application/json"
        //                         },
        //                         body: JSON.stringify({
        //                                 "email": email,
        //                                 "password": password
        //                         }),
        //                         credentials: "include"
        //                 }).then(res => {
        //                         console.log(res);
        //                         // return res;
        //                         return res.json();
        //                 }).then(res => {
        //                         console.log(res);
        //                         console.log(res[0].success);

        //                         if (res[0].success === true) {
        //                                 if (res) {
        //                                         // alert("login sucessfully")
        //                                         dispatch(userNotification("Login Successfully"))
        //                                         navigate("/App/Home");
        //                                 }
        //                         }
        //                         // alert(res.data[0].Result)
        //                 })
        //         } else {
        //                 alert("something went wrong")
        //                 dispatch(userNotification("something went wrong"))

        //                 return
        //         }
        //         // setEmail("")
        //         // setPassword("")
        // }


        return (
                <>
                        <div className=" flex  flex-col justify-center items-center h-screen bg-gray-300">
                                <div className="bg-white p-[40px] border-2 rounded-xl pt-[30px] text-center ">
                                        <div className="loginCard">
                                                <div className="font-bold text-5xl p-[10px]  pb-[30px]">
                                                        User Login
                                                </div>

                                                <div className="text-2xl p-[8px] font-serif">
                                                        <div className='text-4xl p-[10px]'>
                                                                Email Address
                                                        </div>
                                                        <div className="">
                                                                <input type="email" placeholder="Enter your Email..." className="text-[23px] bg-gray-200 w-full border-2 rounded-md p-[3px] pl-[8px] pr-[8px] font-semibold shadow-sm shadow-gray-50}" onChange={(e) => { setEmail(e.target.value) }} value={email} />
                                                        </div>
                                                </div>

                                                <div className="text-2xl p-[8px] font-serif">
                                                        <div className='text-4xl p-[10px]'>
                                                                Password
                                                        </div>
                                                        <div className="">
                                                                <input type="password" className="text-[23px] bg-gray-200 w-full border-2 rounded-md p-[3px] pl-[8px] pr-[8px] font-semibold shadow-sm shadow-gray-500}" placeholder='Enter your Password...' onChange={(e) => { setPassword(e.target.value) }} value={password} />
                                                        </div>
                                                </div>

                                                <div className="text-2xl p-[8px] font-serif">
                                                        <button className="bg-green-400 w-full border-2 border-transparent rounded-md hover:border-blue-600 active:text-gray-600 active:border-cyan-600 shadow-sm shadow-gray-600 mt-[25px]" > Submit </button>
                                                </div>
                                                <Link to="/Register" >
                                                        <div className="text-2xl p-[8px] font-serif ">
                                                                <button className="bg-red-100 w-full border-2 border-transparent rounded-md hover:border-blue-600 active:text-gray-600 active:border-cyan-600 shadow-sm shadow-gray-600 mt-[25px]     "> Register </button>
                                                        </div>
                                                </Link>
                                        </div>

                                </div>
                        </div>
                </>

        )
}

export default Login