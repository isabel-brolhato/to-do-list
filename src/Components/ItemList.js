
import LineItem from "./LineItem"

const ItemList = ({ items, handleCheck, handleDelete }) => {
    return (
        <ul id='list' data-testid="item-list">
            {items.map((item) => (
                <LineItem
                    key={item.id}
                    item={item}
                    handleCheck={handleCheck}
                    handleDelete={handleDelete}
                />
            )
            )}

        </ul>
    )
}


export default ItemList