import ListItem from "./ListItem";

const List = ({data}) => {
    return (
        <ul>
            {data.map(entry => (
                <ListItem key={entry.id} entry={entry} />
            ))}
        </ul>
    )
}

export default List