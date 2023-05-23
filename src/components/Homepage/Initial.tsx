import "./firstsect.css"
import build from '../../assets/pngwing.com.png'
export default function Initial(){


    return (
        <section className="first w-full  h-96 mb-9">
            <h1 className="text-center mb-4 text-4xl mt-10 font-bold text-white">Start Your Trading<br></br>and Investment Journey</h1>
            <p className="text-center">We Also Buy And Sell Bitcoin And Giftcard<br></br>
Enjoy seamless and hassle free experience trading with ALPHA CRYPTO MINERS</p>
            <img src={build} alt="" />

        </section>
    )

}