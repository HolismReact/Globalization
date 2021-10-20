import { List, Text as FilterText, Select as FilterSelect, ItemAction, ListAction, app } from '@List'
import { Form, Text, Select } from '@Form';

const inputs = <>
    <Text
        column='TextKey'
        placeholder='Text Key'
        required='Please provide text key'
        regex='[a-zA-Z]+'
    />
    {/* <Select
        column='LocaleId'
    /> */}
</>

const CreateTranslation = () => {
    return <Form
        entity='translation'
        inputs={inputs}
    />
}

const filters = <>
    <FilterText
        column='TextKey'
        placeholder='Text'
    />
    {/* <FilterSelect
        column='LocaleId'
    /> */}
</>

const headers = <>
    <th>Locale</th>
    <th>Text Key</th>
    <th>Translation</th>
</>

const row = (item) => {
    return <>
        <td>{item.locale}</td>
        <td>{item.textKey}</td>
        <td>{item.value}</td>
    </>
}

const Translations = () => {
    return <List
        title='Translations'
        entity='translation'
        filters={filters}
        headers={headers}
        row={row}
        create={CreateTranslation}
        hasDelete={true}
    />
}

export default Translations;