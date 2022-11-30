const ItemListContainer = ({saludo, saludar}) =>{
    return(
        <div>
            <h2>{saludo}</h2>
        <button onClick={saludar}>saludar</button>
        </div>
    )
}

export default ItemListContainer