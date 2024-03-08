import Cookies from "js-cookie";
export default async function getTransaction(email: string) {
  try {
    const transac = Cookies.get('trans')

    if (transac) {

      const data = JSON.parse(transac)
      return data;
    }
    else {
      const response = await fetch(
        `https://franqqi-transaction-api.onrender.com/api/transaction/${email}`
      );

      if (!response.ok) {
        throw new Error("No transaction found");
      }

      const data = await response.json();
      Cookies.set("trans", JSON.stringify(data), { expires: 1 * 60 * 60 }); // expires in 3 hours

      return data;
    }
   
  } catch (error: any) {
    throw new Error(error.message);
  }
}
