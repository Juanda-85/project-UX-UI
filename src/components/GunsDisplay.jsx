
function GunsDisplay(props) {

    const { id, in_stock, description, price, isAdded, image } = props.gun;
    const gunName = props.gun.name;

    return (
        <div>
            <div key={id}>
                <h4>{gunName}</h4>
                <img src={image} alt="" />
                <p>In Stock: {in_stock ? 'Yes' : 'No'}</p>
                <p>Price: {price}</p>
                <p>{description}</p>
                <button className="add" onClick={() => props.toggleAddedToCart(id)}>
                {isAdded
                    ? <span>DELETE FROM CART</span>
                    : <span>ADD TO CART </span>
                }
                </button>
            </div>
        </div>
    )
}

export default GunsDisplay