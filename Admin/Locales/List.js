import { List, Text, ItemAction, app, post } from '@List';

const headers = <>
    <th>Key</th>
</>

const row = (item) => {
    return <>
        <td>{item.key}</td>
    </>
}

const Locales = () => {
    return <List
        title="Locales 6"
        entity='locale'
        headers={headers}
        row={row}
    />
}

export default Locales;
