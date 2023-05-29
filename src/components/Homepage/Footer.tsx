import { useTranslation } from "react-i18next";

export default function Footer() {
    const {t} = useTranslation()
  return (
    <footer className=" bg-blue-900 px-5 py-10 text-white leading-8">

    <div className=" md:flex md:justify-between md:mb-2">

<section className="w-4/5 md:w-1/5">
<h6 className="mt-5 md:mt-3 text-3xl font-bold mb-5">ALPHA CRYPTO MINERS</h6>



<p>{t('footer.want')}.</p>
</section>


<section>


<h6 className="border-l-8 border-l-gray-300 text-lg font-bold pl-5 my-5 ">{t('footer.useful')}</h6>
<ul>
    <li><a href="#about">{t('about')}</a></li>
    <li><a href="#market">{t('footer.features')}</a></li>
    <li><a href="#market">{t('footer.process')}</a></li>
</ul>
</section>

<section>

<h6 className="border-l-8 border-l-gray-300 text-lg font-bold pl-5 my-5 ">{t('market')}</h6>
<ul>
    <li><a href="#market">Forex</a></li>
    <li><a href="#market">{t('footer.indices')}</a></li>
    <li><a href="#market">{t('footer.commodities')}</a></li>
</ul>
</section>

    <section>


<h6 className="border-l-8 border-l-gray-300 text-lg font-bold pl-5 my-5 ">{t('footer.contact')}</h6>
<ul>
    <li><a href="mailto:Alphaminers6@gmail.com">Alphaminers6@gmail.com</a></li>
    <li><a href='tel:+12366023869'>+12366023869</a></li>
    <li>Georgia, CA 92100</li>
</ul>
</section>
</div>



<p className="text-center mt-3"> { String.fromCharCode(169)} ALPHA CRYPTO MINERS 2023 {t('footer.rights')} </p>
</footer>
);
}
  
