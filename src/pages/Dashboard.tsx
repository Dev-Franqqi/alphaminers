
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { useState } from "react";
import { query, where } from "firebase/firestore";
import { collection } from "firebase/firestore";
import { getDocs } from "firebase/firestore";
import { db } from "../components/firebase";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import Language from "../components/Language";
import Box from "@mui/material/Box";
import Alert from "@mui/material/Alert";
import IconButton from "@mui/material/IconButton";
import Collapse from "@mui/material/Collapse";
import CloseIcon from "@mui/icons-material/Close";
import MenuPopupState from "../components/MenuPopupState";
import getTransaction from "@/components/getTransactions";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

type B = {
  uid: string;
  email: string;
  emailVerified: boolean;
  isAnonymous: boolean;
  providerData: Array<object>;
  providerId: string;
  displayName: string | null;
  phoneNumber: string | null;
  apiKey: string;
  appName: string;
  createdAt: string;
  lastLoginAt: string;
  stsTokenManager: {
    accessToken: string;
    expirationTime: string;
    refreshToken: string;
  };
};

interface Person {
  email: string;
  amount: number;
  firstname: string;
  lastname: string;
  uid: string;
  password: string;
}

interface Transaction{
  email: string,
  transactionType: string,
  transactionDetail: string,
  transactionAmount: number
}

export default function Dashboard() {
  const [open, setOpen] = useState(true);
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [user, setUser] = useState<Object | undefined>();
  const [person, setPerson] = useState<undefined | Person>();
  const [btc, setBTC] = useState<undefined | number>();
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [transaction, setTransaction] = useState<Transaction[]>();
  const [error3,setError3] = useState<string>('')

  const fetchTransaction = async () => {
     
    try {
       
      if (person) {
        
         const res = await getTransaction(person.email);
         setTransaction(res);
        
      }
       
         
       
     } catch (error: any) {
       setError3(error.message);
     }
   };

  let currentDate = new Date();
  type Options = {
    weekday: "long";
    month: "long";
    day: "numeric";
  };
  let options: Options = { weekday: "long", month: "long", day: "numeric" };

  let formattedDate = currentDate.toLocaleDateString(undefined, options);

 
  const cookieValue = Cookies.get("User");
  const x: B =
    cookieValue !== undefined
      ? JSON.parse(cookieValue)
      : {
          email: "",
          amount: 0,
          firstname: "",
          lastname: "",
          uid: "",
          password: "",
        };

  useEffect(() => {
    const check = () => {
      if (!Cookies.get("User")) {
        navigate("/login");
      }
    };

    check();
    setUser(x);

    const q = query(collection(db, "UserInfo"), where("uid", "==", `${x.uid}`));

    getDocs(q)
      .then((snapshot) => {
        const inf: Person = snapshot.docs[0].data() as Person;

        setPerson(inf);

        async function usdToBTC(amount: number) {
          const response = await fetch(
            "https://api.coindesk.com/v1/bpi/currentprice.json"
          );
          const data = await response.json();
          const rate = data.bpi.USD.rate_float;

          const btcAmount = parseFloat((amount / rate).toFixed(8));
          setBTC(btcAmount);
        }

        if (person) {
          usdToBTC(person.amount);
        }
      })
      .catch((error) => {
        console.log(error);
      });

    if (person) {
      fetchTransaction()
        setIsLoading(false)
      }
  }, [person,isLoading]);

  return (
    <>
      <main className="relative bg-blue-900 flex flex-col justify-between w-full h-full py-4 px-2">
        <Box sx={{ width: "100%" }}>
          <Collapse in={open}>
            <Alert
              severity="info"
              action={
                <IconButton
                  aria-label="close"
                  color="inherit"
                  size="small"
                  onClick={() => {
                    setOpen(false);
                  }}
                >
                  <CloseIcon fontSize="inherit" />
                </IconButton>
              }
              sx={{ mb: 2 }}
            >
              {t("dashboard.infoOne")}{" "}
              <Link to="https://wa.me/+16072257704" className="underline">
                {t("dashboard.infoTwo")}
              </Link>
            </Alert>
          </Collapse>
        </Box>

        <section className="w-full px-2">
          <header className="text-white text-xs">{formattedDate}</header>
          <div className="flex w-full justify-between mb-4">
            <h1 className="font-bold text-2xl text-white">ACCOUNT</h1>
            <MenuPopupState />
          </div>
          <hr className="mb-1" />
          <Language />
          <div className="w-full flex flex-col md:flex-row md:justify-between">
            <section className="w-full shadow-lg border p-4 h-56 mt-10 rounded-lg text-black md:w-3/5 bg-white">
              <div className="flex justify-between mb-5">
                <div className="flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 bg-white rounded-full"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <div className="ml-2">
                    {user && <h3 className="">{person?.email}</h3>}
                    <p className="text-gray-300 text-xs">
                      {t("dashboard.personal")}
                    </p>
                  </div>
                </div>
                <div className="bg-white text-xs h-fit py-1 border-black border-3 text-blue-500 w-fit px-2 rounded">
                  USD
                </div>
              </div>
              <hr />
              {person && (
                <div className="mb-4 mt-4 font-bold">
                  {person.firstname} {person.lastname}
                </div>
              )}
              <div className="flex flex-col h-1/5 justify-between">
                <div className="flex justify-between">
                  <p className="text-xs text-gray-300 font-bold">
                    {t("dashboard.btcBal")}
                  </p>
                  <p className="text-xs text-gray-300 font-bold">
                    {t("dashboard.usBal")}
                  </p>
                </div>
                {person && (
                  <div className="flex justify-between">
                    <p className="text-2xl font-bold ">{btc}</p>
                    <p className="text-2xl font-bold ">${person.amount}</p>
                  </div>
                )}
              </div>
            </section>
          </div>
        </section>
      </main>
      <section className="text-white">
        {isLoading ? (
          <div className="text-white">Loading...</div>
        ) : (
          <div>
            {error3 && <div className="text-red-500 text-center">{error3}</div>}
          </div>
        )}
        <Table>
          <TableCaption>A list of your recent invoices.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Invoice</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Detail</TableHead>
              <TableHead className="text-right">Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="text-white">
            {transaction?.map((invoice: Transaction, index: number) => (
              <TableRow key={index}>
                <TableCell className="font-medium">{index + 1}</TableCell>
                <TableCell>{invoice.transactionType}</TableCell>
                <TableCell>{invoice.transactionDetail}</TableCell>
                <TableCell
                  className={
                    "text-right  font-bold"
                  }
                >
                  ${invoice.transactionAmount}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </section>
    </>
  );
}
