



import { NavLink } from "react-router-dom"; 
// 'react-router-dom' থেকে NavLink ইম্পোর্ট করা হচ্ছে, এটি রাউটিংয়ের জন্য ব্যবহার হবে। 
// NavLink ব্যবহার করলে, পেজে নেভিগেট করার জন্য লিঙ্ক তৈরি করা হয় এবং এটি অ্যাকটিভ স্টেট নির্ধারণও করতে সাহায্য করে।

import { FaArrowRight, FaArrowLeft } from "react-icons/fa"; 
// 'react-icons/fa' থেকে ডান (FaArrowRight) এবং বাম (FaArrowLeft) অ্যারো আইকনগুলি ইম্পোর্ট করা হচ্ছে,
// যা বাটনে নির্দেশনা হিসেবে ব্যবহার করা হবে।

import Marquee from "react-fast-marquee"; 
// react-fast-marquee লাইব্রেরি থেকে Marquee কম্পোনেন্ট ইম্পোর্ট করা হচ্ছে,
// যা একটি স্ক্রোলিং বা মুভিং টেক্সট বা ইমেজ তৈরি করতে ব্যবহৃত হয়।

const Banner = () => { // Banner নামক একটি ফাংশনাল কম্পোনেন্ট তৈরি করা হচ্ছে।
  return (
    <section className="dark:bg-gray-100 dark:text-gray-800 rounded-3xl">
      {/* সেকশন ট্যাগ, এর ব্যাকগ্রাউন্ড কালার (ধূসর এবং গা dark কালো) নির্ধারণ করা হয়েছে,
           এবং কোণাগুলির আকার গোলাকার (৩xl) করা হয়েছে */}

      <div className="flex flex-col justify-center md:p-6 mx-auto sm:py-12 lg:py-12 lg:flex-row lg:justify-items-center md:gap-7">
        {/* ফ্লেক্সবক্স ব্যবহৃত হয়েছে, যেখানে উপাদানগুলি কলাম আকারে প্রদর্শিত হবে (sm, md, lg প্রোফাইলের জন্য),
            এবং বিভিন্ন স্ক্রীন সাইজের জন্য প্যাডিং এবং মার্জিন সেট করা হয়েছে। */}
        
        <div className="flex-auto flex flex-col justify-center text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
          {/* ফ্লেক্স-অটো কন্টেইনার, যা ফ্লেক্সবক্সের ভিতরে সেন্টারিং করে এবং টেক্সট কেন্দ্রীয়ভাবে ঠিক করে */}
          
          <h1 className="text-5xl font-bold leading-none sm:text-6xl playfair">
            {/* বড় আকারের শিরোনাম, প্লেইফেয়ার ফন্ট স্টাইল এবং স্মালার স্ক্রীনের জন্য আরও বড় ফন্ট সাইজ */}
            Transform Your Shelf with Fresh Titles
          </h1>
          
          <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start mt-9">
            {/* বাটনের জন্য ফ্লেক্স লেআউট, যেখানে ছোট স্ক্রীনে কলাম আকারে এবং বড় স্ক্রীনে সারি আকারে বাটন প্রদর্শিত হবে */}

            <NavLink
              to="/pages_to_read"
              className="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-green-400 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group"
              // NavLink ব্যবহার করা হয়েছে, এটি "/pages_to_read" রাউটে নিয়ে যাবে। বাটনের স্টাইলসহ ক্লাস যুক্ত করা হয়েছে,
              // বাটনের উপর হোভার করলে প্যাডিং পরিবর্তন হবে এবং গ্রিন রঙের টেক্সট পরিবর্তন হবে।
            >
              <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-green-400 group-hover:h-full"></span>
              {/* বাটনের নিচে হালকা গ্রিন লাইনের ইফেক্ট এবং হোভার করলে লাইনের উচ্চতা বেড়ে যাবে */}

              <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                {/* ডান অ্যারো আইকন (FaArrowRight) */}
                <FaArrowRight />
              </span>

              <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                {/* বাম অ্যারো আইকন (FaArrowLeft) */}
                <FaArrowLeft className="w-4 h-4 text-white" />
              </span>

              <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">
                {/* বাটনের টেক্সট, যখন হোভার হবে তখন টেক্সটের রঙ সাদা হয়ে যাবে */}
                View The List
              </span>
            </NavLink>
          </div>
        </div>

        <div className="flex items-center justify-center p-6 mt-2 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
          {/* ইমেজ ব্লক যেখানে প্রতিটি স্ক্রীনে ইমেজের উচ্চতা পরিবর্তিত হবে এবং ফ্লেক্স কন্টেইনার দ্বারা সেন্টার হবে */}

          <img
            src="public/banner.jpg"
            alt=""
            className="object-contain h-72 hidden lg:flex sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
            // এই ইমেজটি বড় স্ক্রীনে দেখাবে। sm, lg, xl ইত্যাদি স্টাইলিং অনুযায়ী সাইজ পরিবর্তিত হবে।
          />

          <div className="flex lg:hidden">
            {/* বড় স্ক্রীনে নয়, শুধুমাত্র ছোট স্ক্রীনে Marquee (স্ক্রোলিং ইফেক্ট) প্রদর্শিত হবে */}
            <Marquee pauseOnClick={true} speed={30}>
              {/* Marquee কম্পোনেন্টের মাধ্যমে স্ক্রোলিং ছবি প্রদর্শিত হবে, ক্লিক করলে এটি থেমে যাবে */}
              <img src="/slide1.png" alt="" className="h-48 mx-3" />
              <img src="/slide2.png" alt="" className="h-48 mx-3" />
              <img src="/slide3.png" alt="" className="h-48 mx-3" />
              <img src="/slide4.png" alt="" className="h-48 mx-3" />
              <img src="/slide1.png" alt="" className="h-48 mx-3" />
            </Marquee>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
// এই কম্পোনেন্টটি অন্য কোথাও ব্যবহার করার জন্য এক্সপোর্ট করা হচ্ছে।



// এই কোডে কোনো নির্দিষ্ট অ্যালগোরিদম ব্যবহার করা হয়নি। এটি React কম্পোনেন্ট যা UI ডিজাইন এবং ইন্টারঅ্যাকটিভ ফিচার যেমন Marquee স্ক্রোলিং, নেভিগেশন এবং বাটন স্টাইলিং প্রদর্শন করে। 
// Flexbox এবং Tailwind CSS ব্যবহার করা হয়েছে রেসপন্সিভ লেআউট তৈরি করতে।

