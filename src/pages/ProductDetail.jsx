import React from "react";
import { useParams } from "react-router-dom"
import {AcData, frezData, WmData, wcData} from "../components/ServiceIndex.js"
import { useState, useEffect } from "react";

const ProductDetail = () => {
        const {id} = useParams();
        
        const [data, setData] = useState(null)
        const [product, setProduct] = useState(null)

        useEffect(() => {
                if(data ==null){
                setData([...AcData, ...frezData, ...WmData, ...wcData])
                
                }

                console.log("data =",data);
                
}, [data]);

useEffect(() => {
    if (data) {
        const filteredProduct = data.filter((e) => e.title.trim() === id);
        setProduct(filteredProduct.length != null ? filteredProduct : null);
    }
}, [data, id]);

useEffect(() => {
    console.log("product =", product);
}, [product]);

return (
    <>
        {(product != null) &&
            <div className="pt-20">
                         <section
                                id="contact"
                                style={{
                                        padding: "60px 0",
                                        backgroundColor: "#ffffff",
                                        fontFamily: "'Montserrat', sans-serif",
                                        paddingTop: "150px"
                                }}
                        >
                                <div className="container" style={{ margin: "0 auto" }}>
                                        <div
                                                style={{
                                                        display: "flex",
                                                        flexWrap: "wrap",
                                                        justifyContent: "space-between",
                                                        gap: "30px",
                                                }}
                                        >
                                                {/* Left Side Image */}
                                                <div
                                                        style={{
                                                                flex: "1 1 45%",
                                                                minWidth: "300px",
                                                                animation: "fadeInLeft 1s ease forwards",
                                                        }}
                                                >
                                                        <img
                                                                src={product[0]?.icon} alt={product[0]?.icon}
                                                                style={{
                                                                        width: "100%",
                                                                        borderRadius: "20px",
                                                                        boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
                                                                        display: "block",
                                                                }}
                                                        />
                                                </div>

                                                {/* Right Side Form */}
                                                <div
                                                        style={{
                                                                flex: "1 1 50%",
                                                                minWidth: "300px",
                                                                animation: "fadeInRight 1s ease forwards",
                                                        }}
                                                >
                                                        <h2
                                                                style={{
                                                                        fontWeight: "700",
                                                                        color: "#0d6efd",
                                                                        marginBottom: "15px",
                                                                        fontSize: "2rem",
                                                                }}
                                                        >
                                                                {product[0]?.title}
                                                        </h2>
                                                        <p style={{ color: "#6c757d", marginBottom: "30px", fontSize: "1rem" }}>
                                                                Have questions or need our service? Fill out the form below, and our team will contact you shortly.
                                                        </p>

                                                        <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
                                                                <div
                                                                        style={{
                                                                                fontSize: "1rem",
                                                                                outline: "none",
                                                                        }}
                                                                >
                                                                        {product[0]?.title}

                                                                </div>

                                                                <div
                                                                        style={{
                                                                                fontSize: "1rem",
                                                                                outline: "none",
                                                                        }}
                                                                >
                                                                        {/* {product?.star >= 1 && <img src="/img/Star.webp" alt="" style={{ width: "20px" }} />}
                                                                        {product?.star >= 2 && <img src="/img/Star.webp" alt="" style={{ width: "20px" }} />}
                                                                        {product?.star >= 3 && <img src="/img/Star.webp" alt="" style={{ width: "20px" }} />}
                                                                        {product?.star >= 4 && <img src="/img/Star.webp" alt="" style={{ width: "20px" }} />}
                                                                        {product?.star >= 5 && <img src="/img/Star.webp" alt="" style={{ width: "20px" }} />} */}

                                                                </div>
                                                                <div
                                                                        style={{
                                                                                fontSize: "1rem",
                                                                                outline: "none",
                                                                        }}
                                                                >
                                                                        {product[0]?.title}
                                                                </div>


                                                        </div>
                                                </div>
                                        </div>
                                </div>

                        </section>
                </div>
        }
        </>

        );
};

export default ProductDetail;
