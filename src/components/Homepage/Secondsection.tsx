import { useTranslation } from "react-i18next"
export default function Secondsection() {
  const {t} = useTranslation()
  return (
    <section className='text-center py-10 px-2 bg-blue-900 text-white'>
    <h2 className='font-bold text-xl mb-4'>{t('heading')}</h2>

<p>{t('paragraph')}. </p>
</section>
    
  )
}