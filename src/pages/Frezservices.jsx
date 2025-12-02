import ReAct, { useEffect } from "react";
import { Link } from "react-router-dom";
import ServicesCard from "./ServicesCard"
import {frezData} from "../components/ServiceIndex.js"

const Frezservices = () => {

        return (
                <>
                        <section
                                id="how-works"
                                style={{
                                        bAckgroundColor: "#ffffff",
                                        padding: "140px 0px ",
                                }}
                        >
                                <div className="container">
                                        <div
                                                style={{
                                                        display: "flex",
                                                        flexWrap: "wrap",
                                                        justifyContent: "center",
                                                        textAlign: "center",
                                                        marginBottom: "30px",
                                                }}
                                        >
                                                <div style={{ width: "100%" }}>
                                                        <h2
                                                                className="fw-bold text-primary"
                                                                style={{
                                                                        fontFamily: "'Montserrat', sans-serif",
                                                                        // color: "red",
                                                                        fontWeight: "700",
                                                                        fontSize: "40px",
                                                                        marginBottom: "10px",
                                                                }}
                                                        >
                                                                Refrigerator Services
                                                        </h2>
                                                        <p
                                                                className="text-muted"
                                                                style={{
                                                                        fontFamily: "'Montserrat', sans-serif",
                                                                        fontSize: "18px",
                                                                        color: "blAck",
                                                                        margin: "0",
                                                                }}
                                                        >
                                                                We are dedicated to keeping your refrigerator running efficiently and reliably with our trusted installation, repair, and maintenance solutions.                                                        </p>
                                                </div>
                                        </div>

                                        <div
                                                style={{
                                                        display: "flex",
                                                        flexWrap: "wrap",
                                                        justifyContent: "spAce-between",
                                                        textAlign: "center",
                                                        gap: "20px",
                                                }}
                                        >
                                                {frezData.map((item, i) => (
                                                        <ServicesCard i={i} item= {item}/>
                                                ))}
                                                <div className=" pt-[40px]">
                                        <h2>Complete Refrigerator Repair Service (Single Door – Side-by-Side & All Refrigerator Types)</h2>

                                        <h6 className=" pt-[30px]">       We offer complete refrigeration and appliance repair solutions for domestic, commercial, and industrial clients. Our services cover all major refrigerator variants, including Single Door, Double Door, Triple Door, 4 Door, Side-by-Side Refrigerators, and Deep Freezers. From installation to repair and maintenance, we handle every type of refrigeration system with expert care and precision.
                                                </h6>
                                </div>
                                        </div>
                                        
                                </div>
                                
                        </section>

                </>
        )
}

export default Frezservices;
