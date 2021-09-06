

function ItemDetail( props ) {
    const { producto} = props
    return (
        <div className='card w-50'>
            <div className="card-header">
                <label>{producto.name}</label>
            </div>
            <div className="card-body">
                <img  src={producto.url} className="w-25" />
                <br/>
                <label>{producto.descripcion}</label>
            </div>
            <div className="card-footer">
                <label>{producto.price}</label>
            </div>
        </div>
    )
}

export default ItemDetail
