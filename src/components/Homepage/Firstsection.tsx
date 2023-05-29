import { motion, Transition } from "framer-motion";
import { useTranslation} from 'react-i18next';
// import Language from "../Language";
export default function () {

  const transit: Transition = {
    duration: 2,
    delay: 1,
    ease: 'easeInOut'
  };
  const { t } = useTranslation();

//   const testTranslationText = t('testTranslation');
// console.log(testTranslationText)




  return (
    <>
    <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={transit} className="text-center text-white pt-7 px-2">
      {/* <Language /> */}
      <h2 className="text-3xl font-bold mb-8">{t('putting')}</h2>
      <p className="mb-5 font-semibold">{t('commited')}</p>
      <p className="mb-10">{t('companyName')} {t('description')}. {t('tradingPlatform')}. {t('tradingCosts')}. {t('spreads')}.</p>
      <h2 className='text-3xl font-bold mb-8'>{t('experience')}</h2>
      <p>{t('investmentProcess')}.</p>
    </motion.section>
    </>

  );
}
