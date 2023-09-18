import Cell from "./Cell";

const Row = ({entry}) => {
    return (
        <tr>
            {Object.entries(entry).map(([key, value]) => {
                return (
                    <Cell key={key} cellData={JSON.stringify(value)} />
                )
            })}
        </tr>
    )
}

export default Row