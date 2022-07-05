
const AddItem = ({ newItem, setNewItem, handleSubmit, handleKeyDown }) => {
    return (
        <form className='addForm' onSubmit={handleSubmit}>
            <input
                id='addItem'
                type='text'
                placeholder='Add Item'
                value={newItem}
                onChange={(e) => setNewItem(e.target.value)}
                handleKeyDown={handleKeyDown}
            />
            <button
                type='submit'
                disabled={!newItem}
                >Add</button>

        </form>
    )
}

export default AddItem