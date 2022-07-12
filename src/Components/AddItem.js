
const AddItem = ({ newItem, setNewItem, handleSubmit}) => {
    return (
        <form className='addForm' onSubmit={handleSubmit}>
            <input
                id='addItem'
                type='text'
                placeholder='Add Item'
                value={newItem}
                onChange={(e) => setNewItem(e.target.value)}
            />
            <button
                type='submit'
                disabled={!newItem}
                >Add</button>

        </form>
    )
}

export default AddItem