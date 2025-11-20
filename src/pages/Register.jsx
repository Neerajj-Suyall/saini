// import './Css/Healing.css';
import { useEffect, useState } from 'react';
import "../App.css"
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
// import constant from "../../constant.js";
// import { useDispatch } from "react-redux";
// import {  userNotification } from "../../slice/notificationSlice.js";



function Register() {
        const [firstName, setFirstName] = useState();
        const [lastName, setLastName] = useState();
        const [phoneNo, setPhoneNo] = useState();
        const [email, setEmail] = useState();
        const [company, setCompany ] = useState();
        const [gst, setGst] = useState();
        const [country, setCountry] = useState();
        const [confirmpassword, setConfirmpassword] = useState();
        const [password, setPassword] = useState();
        const navigate = useNavigate();
        //     const dispatch = useDispatch();




        // const SubmitData = (e) => {

        //         console.log(phoneNo.length ,   phoneNo);
                
        //         if (email?.length >= 8 && password?.length >= 8 && confirmpassword === password && phoneNo?.length >= 5) {
        //                 fetch(`${constant.domain}/user/registration`, {
        //                         method: "POST",
        //                         credentials: "include",
        //                         headers: {
        //                                 "Content-Type": "application/json"
        //                         },
        //                         body: JSON.stringify({
        //                                 "name": name,
        //                                 "email": email,
        //                                 "password": password,
        //                                 "phoneNo": phoneNo,
        //                                 "dateofBirth": dateofBirth,
        //                                 "confirmpassword": confirmpassword,
        //                         }),
        //                 }).then(res => {
        //                         return res.json();
        //                 }).then(res => {
        //                         console.log(res);
                                
        //                         if (res.success) {
        //                                 console.log(res.success);
        //                                  dispatch(userNotification("Register Sucessfully"))
        //                                 navigate("/Login");
        //                                 setEmail("")
        //                                 setPhoneNo("")
        //                                 setName("")
        //                                 setDateofBirth("")
        //                                 setConfirmpassword("")
        //                                 setPassword("")
        //                         }

        //                         //     alert(res?.data[0]?.Result)
        //                         //     console.log(res?.data[0]?.Result)
        //                 })
        //         } else {
        //                 alert("something went wrong")
        //                  dispatch(userNotification("Something went wrong"))
        //                 return
        //         }
        // }

        return (
                <>
                        <div className="flex  flex-col justify-center items-center min-h-[100vh] bg-gray-300 ">
                                <div className="bg-white p-[40px] border-2 rounded-xl pt-[30px] text-center my-4">
                                        <div className="loginCard">
                                                <div className="font-bold text-5xl p-[10px]  pb-[30px]"> Registration Information </div>
                                                <div className="text-2xl p-[8px] font-serif ">
                                                        <div>
                                                                First Name
                                                        </div>
                                                        <div className="app-box">
                                                                <input type="name" placeholder="Enter your first name..." className="text-[23px] bg-gray-200 w-full border-2 rounded-md p-[3px] pl-[8px] pr-[8px] font-semibold shadow-sm shadow-gray-500" onChange={(e) => { setFirstName(e.target.value) }} value={firstName} />
                                                        </div>
                                                </div>
                                                <div className="text-2xl p-[8px] font-serif ">
                                                        <div>
                                                                Last Name
                                                        </div>
                                                        <div className="app-box">
                                                                <input type="name" placeholder="Enter your last name... " className="text-[23px] bg-gray-200 w-full border-2 rounded-md p-[3px] pl-[8px] pr-[8px] font-semibold shadow-sm shadow-gray-500" onChange={(e) => { setLastName(e.target.value) }} value={lastName} />
                                                        </div>
                                                </div>
                                                <div className="text-2xl p-[8px] font-serif ">
                                                        <div>
                                                                Phone Number
                                                        </div>
                                                        <div className="app-box">
                                                                <input type="phone" placeholder="Enter your phone number..." className="text-[23px] bg-gray-200 w-full border-2 rounded-md p-[3px] pl-[8px] pr-[8px] font-semibold shadow-sm shadow-gray-500" onChange={(e) => { setPhoneNo(e.target.value) }} value={phoneNo} />
                                                        </div>
                                                </div>
                                                <div className="text-2xl p-[8px] font-serif ">
                                                        <div>
                                                                Email Address
                                                        </div>
                                                        <div className="app-box">
                                                                <input type="email" placeholder="Enter your Email id..." className="text-[23px] bg-gray-200 w-full border-2 rounded-md p-[3px] pl-[8px] pr-[8px] font-semibold shadow-sm shadow-gray-500" onChange={(e) => { setEmail(e.target.value) }} value={email} />
                                                        </div>
                                                </div>
                                                <div className="text-2xl p-[8px] font-serif ">
                                                        <div>
                                                                Company name
                                                        </div>
                                                        <div className="app-box">
                                                                <input type="email" placeholder="Enter your Email id..." className="text-[23px] bg-gray-200 w-full border-2 rounded-md p-[3px] pl-[8px] pr-[8px] font-semibold shadow-sm shadow-gray-500" onChange={(e) => { setCompany(e.target.value) }} value={company} />
                                                        </div>
                                                </div>
                                                <div className="text-2xl p-[8px] font-serif ">
                                                        <div>
                                                                Gst No.
                                                        </div>
                                                        <div className="app-box">
                                                                <input type="email" placeholder="Enter your Email id..." className="text-[23px] bg-gray-200 w-full border-2 rounded-md p-[3px] pl-[8px] pr-[8px] font-semibold shadow-sm shadow-gray-500" onChange={(e) => { setGst(e.target.value) }} value={gst} />
                                                        </div>
                                                </div>
                                                <div className="text-2xl p-[8px] font-serif ">
                                                        <div>
                                                                Country
                                                        </div>
                                                        <div className="app-box">
                                                                <input type="email" placeholder="Enter your Email id..." className="text-[23px] bg-gray-200 w-full border-2 rounded-md p-[3px] pl-[8px] pr-[8px] font-semibold shadow-sm shadow-gray-500" onChange={(e) => { setCountry(e.target.value) }} value={country} />
                                                        </div>
                                                </div>
                                                <div className="text-2xl p-[8px] font-serif ">
                                                        <div>
                                                                Password
                                                        </div>
                                                        <div className="app-box">
                                                                <input type="password" placeholder='Enter your Password...' className="text-[23px] bg-gray-200 w-full border-2 rounded-md p-[3px] pl-[8px] pr-[8px] font-semibold shadow-sm shadow-gray-500" onChange={(e) => { setPassword(e.target.value) }} value={password} />
                                                        </div>
                                                </div>
                                                <div className="text-2xl p-[8px] font-serif ">
                                                        <div>
                                                                Confirm Password
                                                        </div>
                                                        <div className="app-box">
                                                                <input type="password" placeholder='Enter your Confirm Password...' className="text-[23px] bg-gray-200 w-full border-2 rounded-md p-[3px] pl-[8px] pr-[8px] font-semibold shadow-sm shadow-gray-500" onChange={(e) => { setConfirmpassword(e.target.value) }} value={confirmpassword} />
                                                        </div>
                                                </div>
                                                <div className="text-2xl px-[8px] py-[18px] font-serif ">
                                                        <button className="bg-green-400 w-full border-2 border-transparent rounded hover:border-blue-600 active:text-gray-600 active:border-cyan-600 shadow-sm shadow-gray-600 mt-[25px]" > Submit </button>
                                                </div>
                                                <Link to="/login" >
                                                        <div className="text-2xl font-serif  p-[8px]">
                                                                <button className="bg-red-300 w-full border-2 border-transparent rounded hover:border-blue-600 active:text-gray-600 active:border-cyan-600 shadow-sm shadow-gray-600 mt-[25px]"> Login </button>
                                                        </div>
                                                </Link>
                                        </div>

                                </div>
                        </div>
                </>
        )
}

export default Register 