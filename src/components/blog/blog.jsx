



import { useLoaderData } from "react-router-dom"; // React Router থেকে useLoaderData হুকটি ইম্পোর্ট করা হচ্ছে। এটি রাউটারের মাধ্যমে প্রি-লোড করা ডেটা ফেচ করার জন্য ব্যবহৃত হয়।
import Blog from "../Blog"; // Blog কম্পোনেন্টটি ইম্পোর্ট করা হচ্ছে, যা একক ব্লগ পোস্ট দেখাবে।

const Blogs = () => {  // Blogs নামের ফাংশনাল কম্পোনেন্ট তৈরি করা হচ্ছে
  const blogsData = useLoaderData(); // useLoaderData হুক ব্যবহার করে প্রি-লোড করা ব্লগ ডেটা blogsData ভেরিয়েবলে সেভ করা হচ্ছে।
  console.log(blogsData); // blogsData এর কনটেন্ট কনসোলে লগ করা হচ্ছে, যাতে ডেটা সঠিকভাবে লোড হয়েছে তা দেখা যায়।

  return (  // JSX রিটার্ন করা হচ্ছে
    <div>  {/* মূল div, যা ব্লগের তালিকাকে ধারণ করবে */}
      <h2 className="text-center text-3xl font-bold my-10">Blogs</h2>  {/* ব্লগস পেজের শিরোনাম "Blogs" */}
      <div className="grid grid-cols-3 gap-5 my-16">  {/* CSS grid ব্যবহৃত, ৩টি কলাম এবং গ্যাপ সহ ব্লগ পোস্টগুলি সজ্জিত হচ্ছে */}
        {blogsData.map((blog) => (  // blogsData এ থাকা প্রতিটি ব্লগ আইটেমের জন্য map ফাংশন চালানো হচ্ছে
          <Blog blog={blog} key={blog.id}></Blog>  {/* প্রতিটি ব্লগ আইটেমকে Blog কম্পোনেন্টে পাস করা হচ্ছে, key হিসেবে ব্লগের id দেওয়া হচ্ছে */}
        ))}
      </div>
    </div>
  );
};

export default Blogs;  // Blogs কম্পোনেন্টটি ডিফল্ট হিসেবে এক্সপোর্ট করা হচ্ছে, যাতে অন্য ফাইলে এটি ব্যবহার করা যায়।
