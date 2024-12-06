


// React এর হুক (useEffect, useState) এবং অন্যান্য কম্পোনেন্ট ইমপোর্ট করা হচ্ছে।
import { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs"; // react-tabs প্যাকেজ থেকে Tabs কম্পোনেন্ট ইমপোর্ট করা হচ্ছে।
import "react-tabs/style/react-tabs.css"; // react-tabs এর স্টাইল শিট ইমপোর্ট করা হচ্ছে।
import ListedBook from "../components/ListedBook/ListedBook"; // প্রতিটি বই দেখানোর জন্য ListedBook কম্পোনেন্ট ইমপোর্ট করা হচ্ছে।
import useLoadData from "../Hooks/useLoadData"; // ডেটা লোড করার জন্য কাস্টম হুক useLoadData ইমপোর্ট করা হচ্ছে।
import { getRead, getWishlist } from "../utils/localStorage"; // localStorage থেকে পড়া এবং ইচ্ছা তালিকা পেতে সহায়ক ফাংশন ইমপোর্ট করা হচ্ছে।
import ErrorPage from "../components/ErrorPage/ErrorPage"; // যদি কোনো বই না থাকে তবে ErrorPage কম্পোনেন্ট দেখানোর জন্য ইমপোর্ট করা হচ্ছে।
import Spinner from "../components/Spinner/Spinner"; // লোডিং স্পিনার কম্পোনেন্ট ইমপোর্ট করা হচ্ছে।

// ListedBooks নামক একটি Functional Component তৈরি করা হচ্ছে।
const ListedBooks = () => {
  // 'useLoadData' হুক থেকে ডেটা এবং লোডার স্পিনার স্টেট নেয়া হচ্ছে।
  const { data , loaderSpinner} = useLoadData();
  
  // 'sortBy', 'tabIndex', 'readList', এবং 'wishlist' নামক স্টেট ভ্যারিয়েবল গুলি ডিফাইন করা হচ্ছে।
  const [sortBy, setSortBy] = useState(""); // কোন কলামের ভিত্তিতে বইগুলো সাজানো হবে তা রাখা হবে।
  const [tabIndex, setTabIndex] = useState(0); // বর্তমানে কোন ট্যাবটি সিলেক্ট করা আছে তা ধরে রাখবে।
  const [readList, setReadList] = useState([]); // পড়া বইয়ের তালিকা।
  const [wishlist, setWishlist] = useState([]); // ইচ্ছার তালিকা বই।

  // 'useEffect' হুক ব্যবহার করে, 'data' লোড হওয়ার পর স্থানীয় স্টোরেজ থেকে 'readList' এবং 'wishlist' এর আইটেম লোড করা হচ্ছে।
  useEffect(() => {
    const localReadItems = getRead(); // getRead() ফাংশনটি localStorage থেকে 'read' আইটেম নেয়।
    const localWishItems = getWishlist(); // getWishlist() ফাংশনটি localStorage থেকে 'wishlist' আইটেম নেয়।

    if (data.length > 0) { // যদি ডেটা পাওয়া যায়।
      const readItems = []; // একটি খালি অ্যারে তৈরি করা হচ্ছে 'readItems'।
      const wishItems = []; // একটি খালি অ্যারে তৈরি করা হচ্ছে 'wishItems'।
      
      // 'readItems' এবং 'wishItems' অ্যারে গুলি পূর্ণ হচ্ছে ডেটার সাথে মিলিয়ে।
      for (const id of localReadItems) { // স্থানীয় 'read' তালিকা থেকে একে একে আইডি নেওয়া হচ্ছে।
        const book = data.find((boo) => boo.bookId === id); // 'data' থেকে প্রতিটি 'bookId' এর ভিত্তিতে বই খুঁজে বের করা হচ্ছে।
        if (book) { // যদি বই পাওয়া যায়।
          readItems.push(book); // বইটি 'readItems' তে যোগ করা হচ্ছে।
        }
      }
      for (const id of localWishItems) { // একইভাবে 'wishlist' আইটেম খুঁজে বের করা হচ্ছে।
        const book = data.find((boo) => boo.bookId === id);
        if (book) {
          wishItems.push(book); // বইটি 'wishItems' তে যোগ করা হচ্ছে।
        }
      }
      
      // অবশেষে, 'readList' এবং 'wishlist' এর স্টেট আপডেট করা হচ্ছে।
      setReadList([...readItems]); // 'readItems' এর কপি 'readList' তে সেট করা হচ্ছে।
      setWishlist([...wishItems]); // 'wishItems' এর কপি 'wishlist' তে সেট করা হচ্ছে।
    }
  }, [data]); // 'data' পরিবর্তন হলে এই 'useEffect' রান করবে।

  // সোর্টিং লজিক। যখন 'sortBy' পরিবর্তিত হবে, তখন 'readList' এবং 'wishlist' সঠিকভাবে সোর্ট হবে।
  useEffect(() => {
    const handleSortItem = () => { // সোর্টিং ফাংশন।
      const sortedRead = [...readList].sort((a, b) => b[sortBy] - a[sortBy]); // 'readList' সোর্ট করা হচ্ছে 'sortBy' এর মান অনুযায়ী।
      const sortedWish = [...wishlist].sort((a, b) => b[sortBy] - a[sortBy]); // 'wishlist' সোর্ট করা হচ্ছে।
      setReadList(sortedRead); // সোর্টেড 'readList' আপডেট করা হচ্ছে।
      setWishlist(sortedWish); // সোর্টেড 'wishlist' আপডেট করা হচ্ছে।
    };
    handleSortItem(); // সোর্টিং ফাংশনটি চালানো হচ্ছে।
  }, [sortBy]); // যখন 'sortBy' পরিবর্তিত হবে, তখন এই 'useEffect' রান হবে।

  // সিলেক্ট বক্সের মাধ্যমে সোর্ট অপশন পরিবর্তন করার জন্য একটি হ্যান্ডলার ফাংশন।
  const handleSort = (e) => {
    setSortBy(e.target.value); // সিলেক্টেড অপশনের মান 'sortBy' তে সেট করা হচ্ছে।
  };

  // যদি লোডিং হয় (spinner দেখানোর জন্য), তবে Spinner কম্পোনেন্ট রিটার্ন করা হচ্ছে।
  if (loaderSpinner) {
    return <Spinner></Spinner>; // লোডিং এর সময় Spinner কম্পোনেন্ট রিটার্ন করবে।
  }

  return (
    <div>
      {/* গ্রিন ব্যাকগ্রাউন্ড এবং টাইটেল */}
      <div className="bg-green-50 rounded-2xl py-8">
        <h3 className="text-2xl font-bold text-center">Books</h3> {/* বইয়ের টাইটেল */}
      </div>
      
      {/* সিলেক্ট অপশন যেখানে ব্যবহারকারী বই সেগুলি সোর্ট করতে পারবেন */}
      <div className="my-4 flex justify-center items-center">
        <select
          onChange={(e) => handleSort(e)} // সিলেক্ট অপশনের পরিবর্তন হলে 'handleSort' কল হবে।
          className="bg-green-400 py-4 px-5 rounded-lg text-white text-lg font-semibold"
        >
          <option value="" className="bg-white text-black">
            Find By
          </option>
          <option value="name" className="bg-white text-black">
            Book Name
          </option>
          <option value="author" className="bg-white text-black">
            Author
          </option>
          <option value="yearOfPublishing" className="bg-white text-black">
            Publisher year
          </option>
          <option value="Rating" className="bg-white text-black">
            Rating
          </option>
        </select>
      </div>
      
      {/* React Tabs কম্পোনেন্ট, যেখানে তিনটি ট্যাব থাকবে: Read Books, Borrow Books, Issue Books */}
      <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList>
          <Tab>Read Books</Tab> {/* পড়া বই */}
          <Tab>Borrow Books</Tab> {/* ধার নেয়া বই */}
          <Tab>Issue Books</Tab> {/* ইস্যু করা বই */}
        </TabList>

        {/* Read Books ট্যাব */}
        <TabPanel>
          <div className="flex flex-col gap-3">
            {readList.length < 1 ? ( // যদি 'readList' খালি থাকে, ErrorPage কম্পোনেন্ট দেখানো হবে।
              <ErrorPage mgs="You have not selected any books!" />
            ) : (
              readList.map((book) => ( // 'readList' থেকে প্রতিটি বই মেপ করা হবে।
                <ListedBook key={book.bookId} book={book} /> // প্রতিটি বইয়ের জন্য ListedBook কম্পোনেন্ট রেন্ডার হবে।
              ))
            )}
          </div>
        </TabPanel>

        {/* Borrow Books ট্যাব */}
        <TabPanel>
          <div className="flex flex-col gap-3">
            {wishlist.length < 1 ? (
              <ErrorPage mgs="You have not selected any borrow Book!" /> // যদি 'wishlist' খালি থাকে, ErrorPage কম্পোনেন্ট দেখানো হবে।
            ) : (
              wishlist.map((book) => ( // 'wishlist' থেকে প্রতিটি বই মেপ করা হবে।
                <ListedBook key={book.bookId} book={book} /> // প্রতিটি বইয়ের জন্য ListedBook কম্পোনেন্ট রেন্ডার হবে।
              ))
            )}
          </div>
        </TabPanel>

        {/* Issue Books ট্যাব */}
        <TabPanel>
          <div className="flex flex-col gap-3">
            {readList.length < 1 ? ( // যদি 'readList' খালি থাকে, ErrorPage কম্পোনেন্ট দেখানো হবে।
              <ErrorPage mgs="You have not selected any Issue Book!" />
            ) : (
              readList.map((book) => ( // 'readList' থেকে প্রতিটি বই মেপ করা হবে।
                <ListedBook key={book.bookId} book={book} /> // প্রতিটি বইয়ের জন্য ListedBook কম্পোনেন্ট রেন্ডার হবে।
              ))
            )}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ListedBooks; // কম্পোনেন্টটি এক্সপোর্ট করা হচ্ছে।









// // // অ্যালগরিদম ব্যাখ্যা:
// // // সোর্সিং অ্যালগরিদম:

// // // কোডে একটি sorting algorithm ব্যবহৃত হয়েছে, যেখানে readList এবং wishlist এর আইটেমগুলো sortBy স্টেটের মান অনুযায়ী সোর্ট করা হচ্ছে। 
// // // সorting অপারেশনটি sort() মেথড ব্যবহার করে, যা b[sortBy] - a[sortBy] দিয়ে ডেটা সাজানোর কাজ করে। এটি সাধারণত সংখ্যাসূচক মানের ভিত্তিতে ডেটা সোর্ট করে।
// // // ডেটা ফিল্টারিং অ্যালগরিদম:

// // // কোডে useEffect ব্যবহার করে স্থানীয় স্টোরেজ থেকে read এবং wishlist আইটেমগুলি ফিল্টার করা হচ্ছে। এখানেও data.find() ফাংশন ব্যবহৃত হচ্ছে, 


// // // যা প্রতিটি আইডি মেলানোর পর বইটি খুঁজে বের করে এবং উপযুক্ত আইটেমগুলোকে readItems এবং wishItems অ্যারেতে যোগ করা হচ্ছে।

// // এই কোডটি একটি React কম্পোনেন্ট তৈরি করেছে যা বইয়ের তালিকা দেখায় এবং সেগুলি সorting করার সুবিধা প্রদান করে।
//  এতে useEffect, useState হুক এবং sort() অ্যালগরিদম ব্যবহৃত হয়েছে। 
//  React Tabs কম্পোনেন্ট দিয়ে তিনটি ট্যাব (Read Books, Borrow Books, Issue Books) তৈরি করা হয়েছে 
//  এবং স্থানীয় স্টোরেজ থেকে ডেটা লোড করার জন্য getRead এবং getWishlist ফাংশন ব্যবহৃত হয়েছে।






