import ItemList from './ItemList';

const Content = ({items, handleCheckBox, handleDelete}) => {

    return (
        <main>
            {items.length ? (
                <ItemList 
                    items = {items}
                    handleCheckBox={handleCheckBox}
                    handleDelete={handleDelete} 
                />
                
            ) : (
                <p style={{ marginTop: '2rem'}}>Your List Is Empty!</p>
            )}
        </main>
    )
}

// initially followed tutorial to implement these functions to gain familiarity with states and React in general

// const [name, setName] = useState('Vaani');
// const [count, setCount] = useState(0);
// const diffNames = () => {
//     const names = ['Vaani', 'Emily', 'Taylor', 'Sam', 'John', 'Mike'];
//     const index = Math.floor(Math.random() * names.length);
//     setName(names[index]);
// }

// const handleClick = () => {
//     setCount(count + 1);
//     console.log(count);
// }

// const handleClick2 = () => {
//     console.log(count);
// }

// return (
//     <main>
//         <p onDoubleClick={handleClick}>
//             Hello {name}!
//         </p>

//         <button onClick={diffNames}>
//             Change Name
//         </button>
//         <button onClick={handleClick}>
//             Increment Count
//         </button>
//         <button onClick={handleClick2}>
//             Check Count
//         </button>
//     </main>

export default Content