import { List, Text, ItemAction, app, post } from '@List';

const headers = <>
    <th>Key</th>
    <th>Local Key</th>
    <th>Is Active</th>
    <th>Country</th>
</>

const row = (item) => {
    return <>
        <td>{item.key}</td>
        <td>{item.localKey}</td>
        <td>{item.isActive}</td>
        <td>{item.country}</td>
    </>
}

const Locales = () => {
    return <List
        title="Locales"
        entity='locale'
        headers={headers}
        row={row}
    />
}

export default Locales;
