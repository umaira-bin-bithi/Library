




import { useEffect, useState } from "react"; // React এর useEffect ও useState হুক ইম্পোর্ট করা হচ্ছে
import { useParams } from "react-router-dom"; // React Router থেকে useParams হুক ইম্পোর্ট করা হচ্ছে
import useLoadData from "../Hooks/useLoadData"; // কাস্টম হুক useLoadData ইম্পোর্ট করা হচ্ছে, যা ডেটা লোড করতে ব্যবহৃত হয়
import { setRead, setWishlist } from "../utils/localStorage"; // বইয়ের অবস্থা লোকাল স্টোরেজে সংরক্ষণ করতে ইউটিল ফাংশন ইম্পোর্ট করা হচ্ছে
import { ToastContainer, toast } from "react-toastify"; // react-toastify লাইব্রেরি থেকে ToastContainer ও toast ফাংশন ইম্পোর্ট করা হচ্ছে
import "react-toastify/dist/ReactToastify.css"; // react-toastify এর স্টাইল ইম্পোর্ট করা হচ্ছে
import Spinner from "../components/Spinner/Spinner"; // Spinner কম্পোনেন্ট ইম্পোর্ট করা হচ্ছে, যা লোডিং সময় দেখানো হয়

// BookDetails কম্পোনেন্ট
const BookDetails = () => {
  const [singleBook, setSingleBook] = useState({}); // singleBook নামে একটি স্টেট সেট করা হচ্ছে যা বইয়ের তথ্য রাখবে
  const { bookId } = useParams(); // useParams হুক দিয়ে URL থেকে বইয়ের ID নেওয়া হচ্ছে
  const { data, loaderSpinner } = useLoadData(); // useLoadData হুক থেকে ডেটা ও লোডার স্পিনার নেয়া হচ্ছে

  // useEffect হুক ব্যবহার করে ডেটা লোড হওয়া এবং সঠিক বই খোঁজা
  useEffect(() => {
    if (data) { // যদি ডেটা পাওয়া যায়
      const matchedBook = data.find((item) => item.bookId == bookId); // ডেটা থেকে বইয়ের আইডি মিলিয়ে সঠিক বই খোঁজা হচ্ছে
      setSingleBook(matchedBook); // সঠিক বইয়ের তথ্য singleBook স্টেটে সেট করা হচ্ছে
    }
  }, [data, bookId]); // ডেটা বা বইয়ের ID পরিবর্তিত হলে এই কোডটি পুনরায় চলবে

  // বইয়ের বিভিন্ন তথ্য: ডিস্ট্রাকচারিং ব্যবহার করে singleBook থেকে বইয়ের বিভিন্ন তথ্য নেওয়া হচ্ছে
  const {
    image,
    bookName,
    author,
    category,
    rating,
    totalPages,
    publisher,
    yearOfPublishing,
    review,
    tags,
  } = singleBook || {};

  // বইটি 'read' হিসেবে লোকাল স্টোরেজে সেট করার জন্য ফাংশন
  const handleRead = (id) => {
    setRead(parseInt(id)); // বইটি 'read' হিসেবে লোকাল স্টোরেজে সেট করা হচ্ছে
    toast.success("Book added to Borrowed!"); // টোস্ট নোটিফিকেশন দেখানো হচ্ছে
  };

  // বইটি 'wishlist' হিসেবে লোকাল স্টোরেজে সেট করার জন্য ফাংশন
  const handleWishlist = (id) => {
    setWishlist(parseInt(id)); // বইটি 'wishlist' হিসেবে লোকাল স্টোরেজে সেট করা হচ্ছে
    toast.info("Book marked as read !"); // টোস্ট নোটিফিকেশন দেখানো হচ্ছে
  };

  // বইয়ের রিটার্ন সিমুলেট করার জন্য ফাংশন
  const handleReturnBook = (id) => {
    toast.success("Book successfully Issue!"); // বইয়ের রিটার্ন সিমুলেট করা হচ্ছে এবং টোস্ট নোটিফিকেশন দেখানো হচ্ছে
  };

  // যদি লোডিং স্পিনার চলমান থাকে, তাহলে Spinner কম্পোনেন্ট রিটার্ন করা হবে
  if (loaderSpinner) {
    return <Spinner />;
  }

  return (
    <section className="dark:bg-gray-100 dark:text-gray-800">
      <div className="grid grid-cols-1 md:grid-cols-2 justify-center gap-8">
        {/* বইয়ের ছবি প্রদর্শন */}
        <figure className="bg-green-50 p-3 lg:p-12 flex justify-center rounded-2xl">
          <img
            src={image} // বইয়ের ছবি
            alt={bookName} // বইয়ের নাম
            className="md:max-w-[435px] md:max-h-[564px] object-cover rounded-2xl" // ছবির স্টাইলিং
          />
        </figure>
        <div className="space-y-4">
          <h1 className="playfair text-5xl font-bold">{bookName}</h1> {/* বইয়ের নাম প্রদর্শন */}
          <p className="text-xl font-medium">Author  : {author}</p> {/* লেখকের নাম */}
          <hr /> {/* ডিভাইডার */}
          <p className="text-xl font-medium">{category}</p> {/* বইয়ের ক্যাটাগরি */}
          <hr /> {/* ডিভাইডার */}
          <p className="text-base">
            <span className="font-bold">Review : </span>
            <span className="font-medium text-slate-500">{review}</span>
          </p> {/* বইয়ের রিভিউ */}
          <p>
            <span className="font-bold">Tag </span>
            <span className="bg-green-50 rounded-2xl py-1 px-3 text-green-400 text-base font-bold">
              #{tags}
            </span>
          </p> {/* বইয়ের ট্যাগ */}
          <p className="text-base">
            <span className="font-normal text-slate-500">Number of Pages: </span>
            <span className="font-semibold">{totalPages}</span> {/* বইয়ের পৃষ্ঠার সংখ্যা */}
          </p>
          <p className="text-base">
            <span className="font-normal text-slate-500">Publisher: </span>
            <span className="font-semibold">{publisher}</span> {/* প্রকাশক */}
          </p>
          <p className="text-base">
            <span className="font-normal text-slate-500">Year of Publishing: </span>
            <span className="font-semibold">{yearOfPublishing}</span> {/* প্রকাশনার বছর */}
          </p>
          <p className="text-base">
            <span className="font-normal text-slate-500">Rating: </span>
            <span className="font-semibold">{rating}</span> {/* বইয়ের রেটিং */}
          </p>
          <div className="flex gap-6">
            {/* বইয়ের উপর বিভিন্ন ক্রিয়াকলাপ বাটন */}
            <a
              onClick={() => handleRead(bookId)}
              className="relative rounded px-5 py-2.5 overflow-hidden group text-black hover:bg-gradient-to-r hover:from-green-500 hover:to-green-400 border-2 hover:ring-2 hover:ring-offset-2 hover:ring-green-400 transition-all ease-out duration-300 cursor-pointer text-lg font-semibold"
            >
              <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
              <span className="relative">Read Book</span> {/* Read Book বাটন */}
            </a>
            <a
              onClick={() => handleWishlist(bookId)}
              className="relative rounded px-5 py-2.5 overflow-hidden group bg-blue-300 hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-400 text-black hover:text-white hover:ring-2 hover:ring-offset-2 hover:ring-blue-400 transition-all ease-out duration-300 cursor-pointer text-lg font-semibold"
            >
              <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
              <span className="relative">Borrow Book</span> {/* Borrow Book বাটন */}
            </a>
            <a
              onClick={() => handleReturnBook(bookId)}
              className="relative rounded px-5 py-2.5 overflow-hidden group bg-red-300 hover:bg-gradient-to-r hover:from-red-500 hover:to-red-400 text-black hover:text-white hover:ring-2 hover:ring-offset-2 hover:ring-red-400 transition-all ease-out duration-300 cursor-pointer text-lg font-semibold"
            >
              <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
              <span className="relative">Issue Book</span> {/* Issue Book বাটন */}
            </a>
          </div>
        </div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition="Bounce" // টোস্ট নোটিফিকেশন এর ট্রানজিশন সেট করা হচ্ছে
      />
    </section>
  );
};

export default BookDetails; // কম্পোনেন্ট এক্সপোর্ট করা হচ্ছে



// এই কোডে সরাসরি কোনো জটিল অ্যালগরিদম ব্যবহৃত হয়নি, তবে কিছু সাধারণ কৌশল আছে:

// Linear Search: data.find() দিয়ে bookId এর সাথে মিলিয়ে বই খোঁজা হয়েছে।
// Local Storage: setRead এবং setWishlist দিয়ে বইয়ের ডেটা লোকাল স্টোরেজে সংরক্ষণ করা হয়েছে।
// Asynchronous Data Loading: useLoadData হুক দিয়ে ডেটা অ্যাসিঙ্ক্রোনাসভাবে লোড করা হয়েছে।
// Event Handling: ইউজার ইন্টারঅ্যাকশনের মাধ্যমে বইয়ের তথ্য আপডেট ও প্রদর্শন করা হয়েছে।
// এগুলো মূলত ডেটা ম্যানিপুলেশন এবং ইউজার ইন্টারঅ্যাকশন, কোন জটিল অ্যালগরিদম নয়।