import { motion } from 'framer-motion'

const Footer = () => {

    return (

        < div className={`flex flex-col h-50 bottom-0 bg-violet-900 px-20 pt-5   text-white dark:text-violet-300`} >
            <ul className='space-y-5'>
                <li> <span className='hover:text-violet-500 cursor-pointer '>Quienes somos</span></li>
                <li> <span className='hover:text-violet-500 cursor-pointer '>Avisos legales</span></li>
                <li> <span className='hover:text-violet-500 cursor-pointer '>Contactanos</span></li>
            </ul>

            <div className='flex  flex-row w-full justify-center content-stretch gap-5 text-xl'>

                <motion.div
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.8 }}
                >
                    <i className="bi bi-instagram"></i>
                </ motion.div>

                <motion.div
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.8 }}
                ><i className="bi bi-facebook"></i>
                </motion.div>

                <motion.div
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.8 }}
                ><i className="bi bi-twitter-x"></i>
                </motion.div>

            </div>

        </div>
    )
}

export default Footer