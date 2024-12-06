


// React Router থেকে NavLink আমদানি করা হয়েছে, যা পৃষ্ঠার নেভিগেশনে ব্যবহার হবে।
import { NavLink } from "react-router-dom";
// React Icons থেকে দুইটি আইকন আমদানি করা হয়েছে: একটি বাম দিকের তীর (FaArrowLeft) এবং একটি ডান দিকের তীর (FaArrowRight)।
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

// PropTypes ব্যবহার করা হয়েছে, যাতে props এর ডেটা টাইপ যাচাই করা যায়।
import PropTypes from "prop-types";

// ErrorPage কম্পোনেন্ট তৈরি করা হয়েছে, যেখানে একটি ডিফল্ট মেসেজ থাকবে এবং তা props এর মাধ্যমে কাস্টমাইজ করা যাবে।
const ErrorPage = ({mgs = "Looks like our services are currently offline"}) => {
  return (
    // মূল সেকশনটি একটি flexbox কনটেইনার হিসেবে কাজ করবে, যা পুরো পৃষ্ঠার দৈর্ঘ্য গ্রহণ করবে।
    <section className="flex items-center h-full sm:p-16 dark:bg-gray-50 dark:text-gray-800">
      <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8 space-y-8 text-center sm:max-w-md">
        {/* এখানে একটি SVG ব্যবহার করা হয়েছে, যা একটি আইকনের মতো দেখাবে।*/}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          className="w-40 h-40 dark:text-gray-400"
        >
          <path
            fill="currentColor"
            d="M256,16C123.452,16,16,123.452,16,256S123.452,496,256,496,496,388.548,496,256,388.548,16,256,16ZM403.078,403.078a207.253,207.253,0,1,1,44.589-66.125A207.332,207.332,0,0,1,403.078,403.078Z"
          ></path>
          <rect
            width="176"
            height="32"
            x="168"
            y="320"
            fill="currentColor"
          ></rect>
          {/* দুটি পলিগন ট্যাগ দিয়ে ক্রসের মতো দুটি চিহ্ন প্রদর্শন করা হয়েছে।*/}
          <polygon
            fill="currentColor"
            points="210.63 228.042 186.588 206.671 207.958 182.63 184.042 161.37 162.671 185.412 138.63 164.042 117.37 187.958 141.412 209.329 120.042 233.37 143.958 254.63 165.329 230.588 189.37 251.958 210.63 228.042"
          ></polygon>
          <polygon
            fill="currentColor"
            points="383.958 182.63 360.042 161.37 338.671 185.412 314.63 164.042 293.37 187.958 317.412 209.329 296.042 233.37 319.958 254.63 341.329 230.588 365.37 251.958 386.63 228.042 362.588 206.671 383.958 182.63"
          ></polygon>
        </svg>
        {/* এখানে একটি প্যারাগ্রাফে ব্যবহারকারীর কাস্টমাইজড বা ডিফল্ট মেসেজ দেখানো হচ্ছে।*/}
        <p className="text-3xl">
         {mgs}
        </p>
        {/* NavLink ব্যবহার করে হোমপেজে ফিরে যাওয়ার জন্য একটি ব্যাক বাটন তৈরি করা হয়েছে।*/}
        <NavLink
              to="/"
              className="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-green-400 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group"
            >
              {/* ব্যাকগ্রাউন্ডের হরিজেন্টাল লাইন যা হোভার করলে ফুল হবে।*/}
              <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-green-400 group-hover:h-full"></span>
              {/* ডান দিকের তীরের আইকন (FaArrowRight) ব্যবহার করা হয়েছে।*/}
              <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                <FaArrowRight />
              </span>
              {/* বাম দিকের তীরের আইকন (FaArrowLeft) ব্যবহৃত হয়েছে।*/}
              <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                <FaArrowLeft className="w-4 h-4 text-white" />
              </span>
              {/* বাটনের মূল টেক্সট "Back to homepage"*/}
              <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">
              Back to homepage
              </span>
            </NavLink>
      </div>
    </section>
  );
};

// PropTypes এর মাধ্যমে mgs নামক prop এর টাইপ চেক করা হচ্ছে। এটি string হবে।
ErrorPage.propTypes = {
  mgs: PropTypes.string,
};

// ErrorPage কম্পোনেন্টটি ডিফল্ট এক্সপোর্ট করা হচ্ছে।
export default ErrorPage;


// এই কোডে কোন বিশেষ অ্যালগরিদম ব্যবহার করা হয়নি, কারণ এটি একটি React কম্পোনেন্ট যা মূলত ইউজার ইন্টারফেস তৈরি করতে ব্যবহৃত হয়েছে। 
// এখানে কেবলমাত্র React Router এবং React Icons ব্যবহার করা হয়েছে, এবং একটি SVG গ্রাফিক্স তৈরি করা হয়েছে, যা একটি ইন্টারফেস উপাদান।