import "./GunsDisplay.css"


function GunsDisplay(props) {

    const { id, in_stock, description, price, isAdded, image } = props.gun;
    const gunName = props.gun.name;
    

    return (

        <div className={`${!in_stock && "notInStock"}`}>
            <div key={id} className="gunsDisplayContainer">
            {!in_stock && <h4>Not in stock</h4>}
                <img src={image} alt={gunName} />
                <h4>{gunName}</h4>
                <div className="innerDiv one">
                    <p>In Stock: {in_stock ? 'Yes' : 'No'}</p>
                    <p>Price: {price}</p>
                </div>
                <div className="btnDiv">
                    {/* <button onClick={() => props.toggleAddedToCart(id)}>
                        {isAdded
                            ? <span>DELETE FROM CART</span>
                            : <span>ADD TO CART </span>
                        }
                    </button> */}
                    <button>Add to cart</button>
                </div>
            </div>
        </div>
    )
}

export default GunsDisplay