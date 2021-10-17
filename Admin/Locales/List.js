import { List, Text, ItemAction, app, post } from '@List';

const row = (item) => {
    return <>
        <td>{item.key}</td>
    </>
}

const Locales = () => {
    return <List
        title="Locales"
        entity='locale'
        row={row}
    />
}

export default Locales;
