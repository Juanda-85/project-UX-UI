
function GunsDisplay(props) {

    const { id, in_stock, description, price } = props.gun;
    const gunName = props.gun.name;

    return (
        <div>
                <div key={id}>
                    <h4>{gunName}</h4>
                    <p>In Stock: {in_stock ? 'Yes' : 'No'}</p>
                    <p>Price: {price}</p>
                    <p>{description}</p>
                    <button>Add to cart</button>
                </div>
        </div>
    )
}

export default GunsDisplay