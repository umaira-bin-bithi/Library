


import { useEffect, useState } from "react"; // React এর useEffect এবং useState হুক ইম্পোর্ট করা হয়েছে।
import useLoadData from "../../Hooks/useLoadData"; // কাস্টম হুক যা ডেটা লোড করার জন্য ব্যবহৃত হয়।
import Book from "../Book/Book"; // Book কম্পোনেন্ট, যা একটি বইয়ের তথ্য প্রদর্শন করে।
import Spinner from "../Spinner/Spinner"; // Spinner কম্পোনেন্ট, যা লোডিং অবস্থায় প্রদর্শিত হয়।

const Books = () => {
  const { data, loaderSpinner } = useLoadData(); // useLoadData হুক থেকে ডেটা এবং লোডিং স্টেট নেয়া হচ্ছে।
  const [books, setBook] = useState([]); // বইয়ের তালিকা সংরক্ষণ করার জন্য স্টেট (books) তৈরি করা হয়েছে।
  const [counter, setCounter] = useState(6); // প্রথমে ৬টি বই দেখানোর জন্য counter তৈরি করা হয়েছে।

  useEffect(() => {
    setBook(data); // ডেটা আসলে, books স্টেটে সেট করা হচ্ছে।
  }, [data]); // যখন data পরিবর্তন হবে, তখন এটি চলবে।

  if (loaderSpinner) { // যদি loaderSpinner true হয়, তাহলে লোডিং স্পিনার প্রদর্শন করবে।
    return <Spinner></Spinner>;
  }

  return (
    <div className="my-5">
      <div>
        <h1 className="text-center text-4xl font-bold playfair">Books Lists</h1>
        {/* শিরোনাম "Books Lists" কেন্দ্রীয়ভাবে প্রদর্শিত হবে */}
      </div>
      
      {/* গ্রিড লেআউট তৈরি করা হচ্ছে, যা বইয়ের তালিকা প্রদর্শন করবে */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center items-center">
        {/* books এর প্রথম ৬টি আইটেম (counter পর্যন্ত) ম্যাপ করা হচ্ছে এবং Book কম্পোনেন্টে প্রপ্স হিসেবে পাঠানো হচ্ছে */}
        {books.slice(0, counter).map((book) => (
          <Book key={book.bookName} book={book} />
        ))}
      </div>

      {/* যদি counter ৬ এর বেশি হয়, কিছুই রেন্ডার হবে না */}
      {counter > 6 ? (
        ""
      ) : (
        <div className="flex justify-center my-8">
          {/* "See all Books" বাটন */}
          <a
            onClick={() => setCounter(books.length)} // এই বাটনে ক্লিক করলে counter এর মান books.length হয়ে যাবে, অর্থাৎ সব বই দেখাবে।
            className="relative rounded px-5 py-2.5 overflow-hidden group bg-green-500 cursor-pointer hover:bg-gradient-to-r hover:from-green-500 hover:to-green-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-green-400 transition-all ease-out duration-300"
          >
            {/* হোভার ইফেক্ট এবং গ্রাফিক্যাল অ্যানিমেশন */}
            <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
            <span className="relative">See all Books</span>
            {/* "See all Books" টেক্সট */}
          </a>
        </div>
      )}
      
    </div>
  );
};

export default Books; // Books কম্পোনেন্ট এক্সপোর্ট করা হচ্ছে।



// এই কোডে কোনো জটিল এলগরিদম ব্যবহার হয়নি। তবে কিছু সাধারণ প্রক্রিয়া ব্যবহৃত হয়েছে:

// Array slicing: books.slice(0, counter) দিয়ে প্রথম counter সংখ্যক বই দেখানো হয়।
// Conditional rendering: counter > 6 চেক করে UI রেন্ডার করা হয়, যদি counter ৬ এর বেশি না হয়।
// State management: useState ও useEffect হুক দিয়ে স্টেট পরিচালনা করা হয় এবং ডেটা লোডিং করা হয়।
