





// React components এবং অন্যান্য লাইব্রেরি ইমপোর্ট করা হচ্ছে।
import {
  BarChart, // বার চার্ট কম্পোনেন্ট
  Bar, // বার কম্পোনেন্ট
  Cell, // প্রতিটি বার রেন্ডার করার জন্য সেল কম্পোনেন্ট
  XAxis, // X-অ্যাক্সিস
  YAxis, // Y-অ্যাক্সিস
  CartesianGrid, // Cartesian গ্রিড (গ্রিড লাইন)
  Legend, // লেজেন্ড
  Tooltip, // টুলটিপ
  ResponsiveContainer, // রেসপন্সিভ কনটেইনার (স্ক্রীন সাইজ অনুযায়ী চার্ট সাইজ ঠিক করবে)
} from "recharts"; // recharts লাইব্রেরি থেকে গ্রাফ সম্পর্কিত কম্পোনেন্ট ইমপোর্ট হচ্ছে।

import PropTypes from "prop-types"; // PropTypes ব্যবহার করা হচ্ছে, কম্পোনেন্ট প্রপসের টাইপ চেক করার জন্য।
import { getRead } from "../utils/localStorage"; // localStorage থেকে পড়া বইয়ের আইডি গুলি নেওয়ার জন্য ফাংশন।
import useLoadData from "../Hooks/useLoadData"; // কাস্টম হুক যা ডেটা লোড করবে।
import { useEffect, useState } from "react"; // React hooks (useEffect, useState) ইমপোর্ট করা হচ্ছে।
import ErrorPage from "../components/ErrorPage/ErrorPage"; // যদি কোনো বই না থাকে তাহলে ErrorPage কম্পোনেন্ট দেখানো হবে।
import Spinner from "../components/Spinner/Spinner"; // লোডিং স্পিনার কম্পোনেন্ট ইমপোর্ট করা হচ্ছে।

// গ্রাফে ট্রায়াঙ্গল শেপ তৈরি করার জন্য একটি ফাংশন তৈরি করা হচ্ছে।
const getPath = (x, y, width, height) => {
  // এখানে `M` এবং `C` দ্বারা বেজিয়ার কার্ভ ডিফাইন করা হয়েছে, যেটি ট্রায়াঙ্গল শেপের পাথ তৈরি করবে।
  return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${
    y + height / 3
  }
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
    x + width
  }, ${y + height}
  Z`;
};

// TriangleBar কম্পোনেন্ট যা কাস্টম শেপ হিসেবে ট্রায়াঙ্গল বার দেখানোর জন্য ব্যবহৃত হবে।
const TriangleBar = (props) => {
  const { fill, x, y, width, height } = props;

  // `path` ট্যাগ দিয়ে কাস্টম গ্রাফিক্যাল শেপ তৈরি করা হচ্ছে।
  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

// PagesToRead কম্পোনেন্ট যেটি ব্যবহারকারীর পড়া বইয়ের উপর ভিত্তি করে বার চার্ট তৈরি করবে।
const PagesToRead = () => {
  const { data, loaderSpinner } = useLoadData(); // ডেটা এবং লোডার স্পিনার হুক থেকে নেয়া হচ্ছে।
  const [readList, setReadList] = useState([]); // 'readList' স্টেট, যা পড়া বইয়ের তালিকা রাখবে।

  // 'useEffect' হুক ব্যবহার করে, ডেটা লোড হওয়ার পর localStorage থেকে পড়া বইয়ের আইডি নিয়ে আসা হচ্ছে।
  useEffect(() => {
    const localReadItems = getRead(); // localStorage থেকে 'read' তালিকা নেওয়া হচ্ছে।

    if (data.length > 0) {
      const readItems = []; // খালি অ্যারে তৈরি করা হচ্ছে।
      
      // পড়া বইয়ের আইডি গুলি দেখে ডেটা থেকে বইয়ের নাম এবং পৃষ্ঠা সংখ্যা পাওয়া হচ্ছে।
      for (const id of localReadItems) {
        const book = data.find((boo) => boo.bookId === id); // প্রতিটি বই খুঁজে বের করা হচ্ছে বইয়ের আইডি দ্বারা।
        const createChartData = {
          name: book.bookName, // বইয়ের নাম
          pages: book.totalPages, // বইয়ের মোট পৃষ্ঠা সংখ্যা
        };
        if (book) {
          readItems.push(createChartData); // বইটি পাওয়া গেলে `readItems` এ যুক্ত করা হচ্ছে।
        }
      }
      setReadList([...readItems]); // 'readItems' অ্যারে থেকে 'readList' স্টেট আপডেট করা হচ্ছে।
    }
  }, [data]); // 'data' পরিবর্তিত হলে এই effect পুনরায় চালু হবে।

  // যদি লোডিং চলছে (spinner দেখানোর জন্য), তাহলে Spinner কম্পোনেন্ট রিটার্ন করা হচ্ছে।
  if (loaderSpinner) {
    return <Spinner></Spinner>;
  } else if (readList.length < 1) { // যদি কোনো বই না থাকে (readList খালি), ErrorPage রিটার্ন হবে।
    return <ErrorPage mgs="You haven't read any books!" />;
  }

  // রেসপন্সিভ কনটেইনারের মধ্যে একটি BarChart কম্পোনেন্ট রেন্ডার হচ্ছে।
  return (
    <div className="flex justify-center items-center">
      <ResponsiveContainer width="100%" height={400}>
        <BarChart
          width={700} // চার্টের প্রস্থ
          height={400} // চার্টের উচ্চতা
          data={readList} // যে ডেটা প্রদর্শিত হবে তা 'readList' থেকে আনা হবে।
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" /> {/* গ্রিড লাইনগুলো */}
          <XAxis dataKey="name" /> {/* X অ্যাক্সিস: বইয়ের নাম */}
          <YAxis /> {/* Y অ্যাক্সিস: পৃষ্ঠা সংখ্যা */}
          <Legend /> {/* লেজেন্ড */}
          <Tooltip /> {/* টুলটিপ: বইয়ের বিস্তারিত দেখাবে */}
          <Bar
            dataKey="pages" // Y অ্যাক্সিসের মান (পৃষ্ঠার সংখ্যা)
            fill="#8884d8" // বার-এর রঙ
            shape={<TriangleBar />} // কাস্টম ট্রায়াঙ্গল শেপ বার হিসেবে ব্যবহার করা হচ্ছে।
            label={{ position: "top" }} // টপে লেবেল থাকবে।
          >
            {/* বিভিন্ন রঙে সেল যোগ করা হচ্ছে। */}
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index % 20]} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

// TriangleBar কম্পোনেন্টের প্রপসের টাইপ নির্ধারণ করা হচ্ছে।
TriangleBar.propTypes = {
  fill: PropTypes.string, // রঙের মান
  x: PropTypes.number, // X কোঅর্ডিনেট
  y: PropTypes.number, // Y কোঅর্ডিনেট
  width: PropTypes.number, // প্রস্থ
  height: PropTypes.number, // উচ্চতা
};

export default PagesToRead; // PagesToRead কম্পোনেন্ট এক্সপোর্ট করা হচ্ছে।




// এই কোডে মূলত Array Manipulation এবং Mapping Algorithm ব্যবহৃত হয়েছে:

// Array Manipulation:

// LocalStorage থেকে পড়া বইয়ের আইডি গুলি নেওয়া হচ্ছে (getRead() ফাংশন দিয়ে)।
// তারপর, প্রতিটি বইয়ের আইডি দিয়ে ডেটা থেকে সম্পর্কিত বই খুঁজে বের করা হচ্ছে (data.find() ব্যবহার করে)।
// বইটি পাওয়া গেলে, তার নাম এবং পৃষ্ঠা সংখ্যা নিয়ে একটি নতুন অ্যারে (readItems) তৈরি করা হচ্ছে।
// Mapping Algorithm:

// readList অ্যারে তৈরি হওয়ার পর, BarChart কম্পোনেন্টে প্রতিটি বইয়ের জন্য একটি বার তৈরি করা হচ্ছে।
// data.map() ব্যবহার করে, প্রতিটি বইয়ের জন্য একটি Cell (বা বার) তৈরি হয়, যেটি বইয়ের পৃষ্ঠা সংখ্যা এবং রঙের ভিত্তিতে প্রদর্শিত হয়।