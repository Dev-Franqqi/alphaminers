import Cookies from "js-cookie";
import Cryptoiconsimg from "../assets/cryptoicons.png";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Cardoptionsimg from "../assets/card.png";
import Btc from "../assets/btc.png";
import Eth from "../assets/eth.png";
import Usdt from "../assets/usdt.png";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";


import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
export default function Deposit() {
  const [show, setShow] = useState<boolean>(false);
  const navigate = useNavigate();

  useEffect(() => {
    

    const user = Cookies.get("User");
    if (!user) {
      navigate("/login");
    }
  }, []);
  return (
    <div className="relative h-screen text-white">
      <nav className="flex justify-between px-4 py-3 shadow-md ">
        <Link to="/dashboard">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="11"
            height="19"
            viewBox="0 0 11 19"
            fill="none"
          >
            <path
              d="M11 1.69848L9.33162 0L0 9.5L9.33162 19L11 17.3015L3.33676 9.5L11 1.69848Z"
              fill="white"
            />
          </svg>
        </Link>

        <header className="font-semibold">Deposit</header>

        <div></div>
      </nav>

      <main className="pt-10 px-4 ">
        <h1 className="text-center font-semibold mb-3">
          Select Deposit Method
        </h1>

        <section className="text-black">
          <Drawer>
            <DrawerTrigger className="w-full h-fit active:border-none active:border-red-500 focus:border-none focus:border-red-300">
              <div
                onClick={() => setShow(false)}
                className="flex items-center justify-between px-2 border-black border bg-gray-100 dark:border-0 dark:bg-gray-300 rounded-md  text-sm"
              >
                <p className="text-sm">Via Crypto tokens</p>
                <img
                  loading="lazy"
                  src={Cryptoiconsimg}
                  className="w-16"
                  alt=""
                />
              </div>
            </DrawerTrigger>
            <DrawerContent className="">
              <DrawerHeader>
                <DrawerTitle>Copy wallet address</DrawerTitle>
                <DrawerDescription>
                  Make payments into the defined token wallets
                </DrawerDescription>

                <div className="mt-4">
                  <div className="flex">
                    <img src={Btc} alt="" />
                    <p className="text-xs p-2">
                      17zC1mF2fjtB23KMj1FyKToN9gPHW69jfy
                    </p>
                  </div>
                  <div className="flex  mt-2">
                    <img src={Eth} alt="" />
                    <p className="text-xs p-2">
                      0xEDdaF9B6bAdD8eC33585EdEe4dC6aAa5
                    </p>
                  </div>
                  <div className="flex mt-3 w-fit">
                    <img src={Usdt} alt="" />
                    <p className="text-xs p-2 whitespace-normal">
                      0xe66BBD9920242Cb32cFFB2D7D304d286dC7DeD32
                    </p>
                  </div>
                </div>
              </DrawerHeader>
              <DrawerFooter>
                <DrawerClose>
                  {/* <Button variant="outline">Close</Button> */}
                </DrawerClose>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>

          <div
            onClick={() => {
              setShow(!show);
            }}
            className="flex items-center justify-between px-2 py-3 border border-black bg-gray-100 rounded-md  mt-2 text-sm dark:bg-gray-300"
          >
            <p className="text-sm">Via Card </p>
            <img src={Cardoptionsimg} className="w-24" alt="" />
          </div>
        </section>
      </main>

      <Alert
        variant="destructive"
        className={
          show
            ? "absolute  bottom-20 w-[98%] ml-1 dark:bg-gray-100 dark:text-red-700"
            : "hidden"
        }
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"
          />
        </svg>

        <AlertTitle>Error</AlertTitle>
        <AlertDescription>
          Method is unavailable at the moment. Try again later
        </AlertDescription>
      </Alert>
    </div>
  );
}
