import { FaTrashAlt } from 'react-icons/fa';

const LineItem = ({item, handleCheckBox, handleDelete}) => {
    return (
        <li className='item'>
            <input 
            type="checkbox"
            onChange={() => handleCheckBox(item.id)}
            checked={item.checked}
            />

            <label
            style={(item.checked) ? {textDecoration: 'line-through' } : null}
                onDoubleClick={() => handleCheckBox(item.id)}
            >{item.item}</label>
            <FaTrashAlt role="button" tabIndex="0" aria-label={`Delete ${item.item}`} onClick={() => handleDelete(item.id)}/>
        </li>
    )
}

export default LineItem