// import { useEffect } from "react";
// import { useState } from "react";

// const useLoadData = () => {
//   const [data, setData] = useState([]);
//   const [loaderSpinner, setLoaderSpinner] = useState(false);

//   useEffect(() => {
//     const handleData = async () => {
//       const res = await fetch("/data.json");
//       const data = await res.json();
//       setData(data);
//       setLoaderSpinner(false);
//     };
//     setLoaderSpinner(true);
//     handleData();
//   }, []);
//   return { data, loaderSpinner };
// };



// React থেকে useEffect এবং useState হুক গুলি ইমপোর্ট করা হচ্ছে
import { useEffect } from "react";  // useEffect হুক ইমপোর্ট করা হচ্ছে, যা component lifecycle এর নির্দিষ্ট সময়গুলিতে কার্যকর হয়
import { useState } from "react";   // useState হুক ইমপোর্ট করা হচ্ছে, যা state variable তৈরি করতে এবং তার মান পরিবর্তন করতে ব্যবহৃত হয়

// Custom hook 'useLoadData' তৈরি করা হচ্ছে
const useLoadData = () => {

  // 'data' নামক একটি state তৈরি করা হচ্ছে, যার প্রাথমিক মান একটি খালি অ্যারে
  const [data, setData] = useState([]);  
  // 'loaderSpinner' নামক একটি state তৈরি করা হচ্ছে, যার প্রাথমিক মান 'false'
  const [loaderSpinner, setLoaderSpinner] = useState(false);

  // useEffect হুক ব্যবহার করা হচ্ছে, যাতে component প্রথম render হওয়ার পরে একবারই ডাটা লোড করার কাজটি করা হয়
  useEffect(() => {

    // একটি asynchronous function 'handleData' তৈরি করা হচ্ছে, যা ডাটা ফেচ করবে
    const handleData = async () => {

      // '/data.json' ফাইল থেকে ডাটা ফেচ করা হচ্ছে
      const res = await fetch("/data.json");

      // JSON ফরম্যাটে রূপান্তরিত করা হচ্ছে
      const data = await res.json();

      // রূপান্তরিত ডাটাটি 'data' state এ সেট করা হচ্ছে
      setData(data);

      // ডাটা successfully লোড হলে, loaderSpinner কে false করা হচ্ছে (স্পিনার বন্ধ করা হচ্ছে)
      setLoaderSpinner(false);
    };

    // ডাটা লোডের আগে loaderSpinner কে true করা হচ্ছে, যাতে লোডিং স্পিনার দেখা যায়
    setLoaderSpinner(true);

    // 'handleData' function কল করা হচ্ছে ডাটা লোড করার জন্য
    handleData();

  }, []);  // Empty dependency array ([]) থাকায় useEffect কেবল একবারই কল হবে যখন component প্রথমবার render হবে

  // Custom hook থেকে 'data' এবং 'loaderSpinner' state ফিরিয়ে দেওয়া হচ্ছে
  return { data, loaderSpinner };
};

// Custom hook export করা হচ্ছে যাতে এটি অন্য component বা ফাইল থেকে ব্যবহার করা যায়
export default useLoadData;
