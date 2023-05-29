import "./firstsect.css"
import build from '../../assets/pngwing.com.png'
import { useTranslation } from "react-i18next"
import Language from "../Language"
export default function Initial(){
        const {t} = useTranslation()

    return (
        <>
        <section className="first w-full  h-96 mb-9">
            <Language />
            <h1 className="text-center mb-4 text-4xl mt-10 font-bold text-white">{t('start')}</h1>
            <p className="text-center">{t('startText')}</p>
            <img src={build} alt="" />

        </section>
        </>

    )

}