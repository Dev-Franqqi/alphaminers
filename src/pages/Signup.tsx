import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Input from "@mui/joy/Input";
import { useState } from "react";
import { addDoc } from "firebase/firestore";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { ChangeEvent } from "react";
import { colref } from "../components/firebase";
import { auth } from "../components/firebase";
import { useNavigate } from "react-router-dom";
import chartImage from "../assets/chartImage.png";
import Cookies from "js-cookie";
import { useTranslation } from "react-i18next";
import { getStorage, ref, uploadBytes } from "firebase/storage";

export default function Signup() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const [firstname, setFirstName] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [errmessage, setErrmessage] = useState("");
  const [ssn, setSsn] = useState("");
  const [driverLicenseImage, setDriverLicenseImage] = useState<File | null>(
    null
  );

  const storage = getStorage();

  const storageRef = ref(storage, `${email}`);
  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setDriverLicenseImage(file);
    }
  };

  const handleRemoveImage = () => {
    setDriverLicenseImage(null);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!driverLicenseImage) {
      return;
    }
    uploadBytes(storageRef, driverLicenseImage)
      .then(() => {
        alert("Uploaded a blob or file!");
      })
      .catch((error) => {
        setError(true);
        setErrmessage(error.message);
        alert(error.message);
      });
    createUserWithEmailAndPassword(auth, email, password)
      .then((cred) => {
        addDoc(colref, {
          firstname: firstname,
          lastname: lastname,
          email: email,
          password: password,
          amount: 0,

          uid: cred.user.uid,
          ssn: ssn,
        }).then(() => {
          Cookies.set("User", JSON.stringify(cred.user), {
            sameSite: "Lax",
            expires: 2,
          });

          setEmail("");
          setPassword("");
        });

        navigate("/dashboard");
      })

      .catch((err) => {
        setError(true);
        setErrmessage(err.message);
      });
  };

  return (
    <div className="w-full h-screen flex justify-between overflow-hidden font-sans px-10">
      <div className="hidden w-3/5 text-white md:block px-5 h-full">
        <motion.h1
          initial={{ y: -250 }}
          animate={{ y: 10 }}
          className="hidden md:block text-2xl font-bold"
        >
          <Link to="/">Cryptonetverse</Link>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="hidden mt-2 text-sm md:block"
        >
          ...{t("Signup.scale")}
        </motion.p>
        <img src={chartImage} alt="" />
      </div>
      <div className="py-10 px-1 md:px-5 mt-10 w-full md:w-2/5 md:bg-white md:h-5/5 md:rounded-lg md:shadow-lg md:my-auto">
        <h2 className="text-3xl text-white font-bold md:text-black text-center mt-10 mb-10">
          {t("signup")}
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col h-3/5 ">
          {error && (
            <div className="border-3 border-red-600 bg-white text-red-600 px-2 py-2 rounded-md mb-2 w-fit">
              {errmessage}
            </div>
          )}

          <div className="flex justify-between w-full">
            <Input
              type="text"
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
              className="border-2 w-3/6  h-10 p-1 rounded mr-2 mb-2"
              placeholder="firstname"
              required
            />

            <Input
              type="text"
              onChange={(e) => {
                setLastname(e.target.value);
              }}
              className="border-2 w-3/6 h-10 p-1 rounded mx-auto mb-2"
              placeholder="lastname"
              required
            />
          </div>
          <Input
            type="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            className="border-2 w-full h-10 p-1 rounded mx-auto mb-2"
            placeholder="email"
            required
          />

          <Input
            type="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            className="border-2 w-full h-10 p-1 rounded mx-auto mb-2"
            placeholder="password"
            required
          />
          <Input
            type="text"
            onChange={(e) => {
              setSsn(e.target.value);
            }}
            className="border-2 w-full h-10 p-1 rounded mx-auto mb-2"
            placeholder="SSN"
            required
          />

          <label className="text-white text-sm" htmlFor="license">
            Drivers License
          </label>
          <div className="flex text-white">
            <input
              type="file"
              accept="image/*"
              capture="environment"
              onChange={handleImageChange}
              className="mb-3"
            />

            {driverLicenseImage && (
              <button
                className="text-white bg-red-600 rounded-md text-xs h-2/4 mt-2 w-1/5"
                type="button"
                onClick={handleRemoveImage}
              >
                Remove
              </button>
            )}
          </div>

          <button
            type="submit"
            className="w-4/5 h-10 bg-blue-800 mx-auto text-center py-1 shadow-lg rounded text-white"
          >
            Submit
          </button>
        </form>
        <p className="mb-2 text-center mt-5 text-gray-500">
          Have an account?{" "}
          <Link className="underline ml-2" to="/login">
            {t("login")}
          </Link>
        </p>
        {/* <p className="mb-10 text-center underline text-gray-500">
          <a href="https://wa.me/+16072257704">{t("Signup.contact")}</a>
        </p> */}

        <hr className="mt-5" />
        <footer className="text-center text-white mb-2 md:text-black mt-1">
          <Link to="/">Cryptonetverse</Link>
        </footer>
      </div>
    </div>
  );
}
