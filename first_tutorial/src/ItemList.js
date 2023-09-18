import LineItem from "./LineItem";

const ItemList = ( {items, handleCheckBox, handleDelete} ) => {
    return (
        <ul>
            {items.map((item) => (
                <LineItem
                    key={item.id}
                    item = {item}
                    handleCheckBox={handleCheckBox}
                    handleDelete={handleDelete}
                />
            ))}
        </ul>
    )
}

export default ItemList