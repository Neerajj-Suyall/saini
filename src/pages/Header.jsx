import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const Header = () => {

        return (
                <>
                        <div style={{ display: "flex", flexDirection:"column", position:"fixed", top:"0", zIndex:"999", width:"100vw",background:"white" }}>
                                <div style={{ display: "flex", flexDirection:"row", justifyContent:"end", gap:"35px", height:"30px",  width:"100%" }}>
                                        <div >Helpline 18008898529</div>
                                        <div>Login to Seller</div>
                                        <div style={{paddingRight:"40px"}}>Become a Seller !</div>
                                </div>
                                <div style={{ display: "flex", flexDirection:"row", justifyContent:"center", gap:"25px", height:"40px",width:"100%", alignItems: "center", paddingBottom:"5px" }}>
                                        <div ><img src="/img/logo/logo.png"  style={{height:"95px"}}/></div>
                                        <div style={{width:"45vw"}}><input type="search" name="" id="" placeholder="Search Product, Category, Brand" style={{width:"100%", borderRadius:"10px", padding:"5px", paddingLeft:"10px", border:"1px solid gray"}}/></div>
                                        <div ><img src="/img/icon/logo.png" style={{height:"25px"}}/></div>
                                        <Link to="/login" className=" cursor-pointer bg-gray-400 text-white rounded-full text-center font-bold text-xl " style={{width:"6vw" , textDecoration:"none"}}> Login</Link>
                                        <Link to="/Register" className=" cursor-pointer bg-gray-400 text-white rounded-full text-center font-bold text-xl " style={{width:"6vw", textDecoration:"none"}}>Register</Link>
                                        <img src="/img/Cart.png" alt=""  className=" ml-8 h-[100%]"/>
                                </div>
                                <div style={{ display: "flex", flexDirection:"row", justifyContent:"center",gap:"25px", fontSize:"22px", width:"100%", padding:"5px", fontWeight:"bold",alignItems: "center"}} className="bg-gray-300">
                                        <details style={{width: "200px", border: "1px solid #ccc", borderRadius: "5px", position:"relative",}}>
                                                <summary style={{padding: "4px", background: "#0000aF", color: "white", cursor: "pointer", borderRadius: "5px",}}>
                                                        Categories
                                                </summary>
                                                <div style={{position:"absolute"}}>
                                                        <div style={{padding: "10px", cursor: "pointer", borderTop: "1px solid black", background: "#decfc5"}}>Option 1</div>
                                                        <div style={{padding: "10px", cursor: "pointer", borderTop: "1px solid black", background: "#decfc5"}}>Option 2</div>
                                                        <div style={{padding: "10px", cursor: "pointer", borderTop: "1px solid black", background: "#decfc5"}}>Option 3</div>
                                                </div>
                                        </details>
                                        <Link to="/" style={{textDecoration: 'none', color: "black"}}>Home</Link>
                                        <Link to="/about" style={{textDecoration: 'none', color: "black"}}>Blogs</Link>
                                        <Link to="/Contact" style={{textDecoration: 'none', color: "black"}}>All Brands</Link>
                                        <Link to="/" style={{textDecoration: 'none', color: "black"}}>All Categories</Link>
                                        <Link to="/" style={{textDecoration: 'none', color: "black"}}>Track Order</Link>
                                </div>

                        </div>
                </>
        )
}

export default Header;
