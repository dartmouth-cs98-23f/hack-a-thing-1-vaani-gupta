import Row from "./Row";

const Table = ({data}) => {
    return (
        <div className="table-container">
            <table>
                <tbody>
                    {data.map(entry => (
                        <Row key={entry.id} entry={entry} />
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Table