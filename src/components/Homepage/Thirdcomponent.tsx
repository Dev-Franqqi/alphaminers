import {motion} from 'framer-motion'
import { useTranslation } from 'react-i18next'

export default function Thirdcomponent() {
  const {t} = useTranslation()
  return (

<motion.div
initial={{opacity:0}}
animate= {{opacity:1}}
transition={{duration:3}}
className='mb-10'>
  

  <section className='md:flex md:justify-evenly'>

            <motion.section  whileHover={{x:8,scale:1.1}} className="mt-10 mb-2 border-gray-400 w-6/6 border-2 rounded h-96  p-10 text-left md:w-2/6 shadow-xl ">


                <div className="flex border-l-8 border-l-blue-500  mb-8">
                    
                    <div className="ml-5">

                    <h3 className="text-3xl font-bold">{t('section1.heading')}</h3>
                    <div className="text-xl">{t('section1.subheading')}</div>
                </div>

                </div>
                <p>{t('section1.content')}.</p>

            </motion.section>



            <motion.section whileHover={{x:8,scale:1.1}} className="mt-10 mb-2 border-gray-400 w-6/6 border-2 h-96 w-6/6 rounded p-5 text-left md:w-2/6 md:shadow-xl">


                <div className="flex border-l-8 border-l-blue-500  mb-8">
                    
                    <div className="ml-5">

                    <h3 className="text-3xl font-bold">{t('section2.heading')}</h3>
                    <div className="text-xl">{t('section2.subheading')}</div>
                </div>

                </div>
       <p>{t('section2.content')}.</p>
            </motion.section>

            </section>


            <div className="md:flex md:justify-center ">

            <motion.section whileHover={{x:8,scale:1.1}} className="mt-10 mb-2 border-gray-400 w-6/6 border-2 rounded p-5 pt-9 text-left md:w-2/6 md:shadow-lg">

                <hr />

                <p className="mt-8">{t('section3.content')}.</p>
             

      
            </motion.section>
            </div>

</motion.div>
  )
}