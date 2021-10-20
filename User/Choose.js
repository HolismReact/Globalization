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
                setLocales(data);
            }, error => {
                setProgress(false);
                app.error(error);
            })
    }, []);

    return <div className="rounded-md border w-56 flex flex-col justify-center items-center bg-white py-4">

        {
            progress
                ?
                <CircularProgress />
                :
                locales.map((locale, index) => <div
                    key={index}
                    className={
                        "w-full flex py-2 justify-center items-center hover:bg-green-200 cursor-pointer " +
                        ((index !== locales.length - 1) ? "mb-2" : "")
                    }
                    onClick={() => {
                        document.cookie = 'culture=' + locale.key;
                        document.location.reload();
                    }}
                >
                    {locale.localKey}
                </div>)
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