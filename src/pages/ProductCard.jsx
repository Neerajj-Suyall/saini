import { Link } from "react-router-dom";
import { useParams } from "react-router-dom"

const ProductCard = ({
        item
}) => {
                const {id} = useParams();

        return (
                <>
                        <div
                                key={item.id}
                                style={{
                                        flex: "1 1 calc(25% - 20px)",
                                        minWidth: "250px",
                                        backgroundColor: "#ffffff",
                                        justifyItems: "center",
                                        textAlign: "center",
                                        borderRadius: "12px",
                                        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.05)",
                                        transition: "transform 0.3s, box-shadow 0.3s",
                                }}
                                onMouseEnter={(e) => {
                                        e.currentTarget.style.border = "1px solid cyan"
                                        e.currentTarget.style.boxShadow = "0 8px 16px rgba(0,0,0,0.1)";
                                }}
                                onMouseLeave={(e) => {
                                        e.currentTarget.style.border = "0"
                                        e.currentTarget.style.transform = "translateY(0)";
                                        e.currentTarget.style.boxShadow = "0 4px 8px rgba(0,0,0,0.05)";
                                }}
                        >
                                {/* Product Image */}
                                <div
                                        style={{
                                                display: "flex",
                                                justifyContent: "center",
                                                alignItems: "center",
                                                height: "230px",
                                                padding: "15px",
                                        }}
                                >
                                        <img
                                                src={item.img}
                                                alt={item.name}
                                                style={{
                                                        maxHeight: "100%",
                                                        maxWidth: "100%",
                                                        objectFit: "contain",
                                                        borderTopLeftRadius: "12px",
                                                        borderTopRightRadius: "12px",
                                                }}
                                        />
                                </div>

                                {/* Product Details */}
                                <div className="flex flex-col items-center justify-center" style={{ padding: "15px" }}>
                                        <h4
                                                style={{
                                                        fontWeight: "600",
                                                        color: "#212529",
                                                        marginBottom: "8px",
                                                        fontFamily: "'Montserrat', sans-serif",
                                                }}
                                        >
                                                {item.name}
                                        </h4>
                                        <p
                                                style={{
                                                        color: "#6c757d",
                                                        fontSize: "14px",
                                                        marginBottom: "10px",
                                                        fontFamily: "'Montserrat', sans-serif",
                                                }}
                                        >
                                                {item.price}
                                        </p>
                                        <div className="w-fit flex flex-row items-center justify-center" style={{ padding: "10px 0 15px 0" }}>
                                                {item.star >= 1 && <img src="/img/Star.webp" alt="" style={{ width: "20px" }} />}
                                                {item.star >= 2 && <img src="/img/Star.webp" alt="" style={{ width: "20px" }} />}
                                                {item.star >= 3 && <img src="/img/Star.webp" alt="" style={{ width: "20px" }} />}
                                                {item.star >= 4 && <img src="/img/Star.webp" alt="" style={{ width: "20px" }} />}
                                                {item.star >= 5 && <img src="/img/Star.webp" alt="" style={{ width: "20px" }} />}
                                        </div>
                                        <button
                                                style={{
                                                        backgroundColor: "#0d6efd",
                                                        color: "#ffffff",
                                                        border: "none",
                                                        padding: "8px 16px",
                                                        borderRadius: "50px",
                                                        fontSize: "14px",
                                                        cursor: "pointer",
                                                        boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
                                                }}
                                        >
                                                🛒 Add to Cart
                                        </button>
                                </div>
                        </div>
                </>
        )
}

export default ProductCard;
