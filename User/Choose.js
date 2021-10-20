import { HeaderAction, get, app } from '@Panel';
import { useState, useEffect } from 'react';
import LanguageIcon from '@material-ui/icons/Language';
import CircularProgress from '@material-ui/core/CircularProgress';

const Locales = () => {

    const [locales, setLocales] = useState([]);
    const [progress, setProgress] = useState(false);

    useEffect(() => {
        setProgress(true);
        get('/locale/actives')
            .then(data => {
                setProgress(false);
                setLocales(locales);
            }, error => {
                setProgress(false);
                app.error(error);
            })
    }, []);

    return <div className="rounded-md border w-56 h-56 flex justify-center items-center bg-white">

        {
            progress
                ?
                <CircularProgress />
                :
                locales.map(locale => <div>{locale.localeKey}</div>)
        }

    </div>
}

const ChooseLocale = () => {
    return <HeaderAction
        title='Choose locale'
        icon={LanguageIcon}
        component={Locales}
    />
}

export default ChooseLocale;