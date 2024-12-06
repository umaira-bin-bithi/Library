



// react-router-dom থেকে NavLink ইম্পোর্ট করা হয়েছে। এটি পৃষ্ঠার মধ্যে নেভিগেশনের জন্য ব্যবহৃত হয়।
import { NavLink } from "react-router-dom";

// SignUp নামক একটি ফাংশনাল কম্পোনেন্ট ডিক্লেয়ার করা হয়েছে।
const SignUp = () => {
  return (
    // পুরো সাইন আপ ফর্মটি `section` ট্যাগের মধ্যে রাখা হয়েছে এবং কন্টেন্টকে কেন্দ্রস্থলে রাখার জন্য Tailwind CSS ক্লাস ব্যবহার করা হয়েছে।
    <section className="flex justify-center">
      {/* একটি ডিভ তৈরি করা হয়েছে, যেখানে ফর্ম কন্টেন্ট যুক্ত করা হয়েছে। */}
      <div className="flex flex-col w-full max-w-md p-12 space-y-4 text-center dark:bg-gray-50 dark:text-gray-800">
        {/* শিরোনাম */}
        <h1 className="text-3xl font-semibold">Sign in to your account</h1>

        {/* ছোট টেক্সট যা লিঙ্কে ক্লিক করার জন্য ইউজারকে উৎসাহিত করে */}
        <p className="text-sm text-center dark:text-gray-600">
          Already account?
          {/* NavLink ব্যবহার করে সাইন ইন পৃষ্ঠায় নেভিগেশনের লিঙ্ক দেওয়া হয়েছে */}
          <NavLink
            to="/sign_in"
            rel="noopener noreferrer"
            className="focus:underline hover:underline text-green-500"
          >
            Sign in
          </NavLink>
        </p>

        {/* ফর্মের মূল অংশ */}
        <form className="space-y-6">
          {/* ইনপুট ফিল্ডগুলোর জন্য একটি ডিভ */}
          <div className="flex flex-col space-y-4">
            {/* ইউজারনেম ইনপুট */}
            <label className="sr-only">UserName</label>
            <input
              id="text"
              type="text"
              placeholder="username"
              className="rounded-t-md dark:border-gray-400 dark:bg-gray-50 dark:text-gray-800 focus:dark:ring-violet-600 focus:dark:border-violet-600 focus:ring-2"
            />

            {/* ইমেইল ইনপুট */}
            <label className="sr-only">Email</label>
            <input
              id="email"
              type="email"
              placeholder="email"
              className="-mt-1 rounded-b-md dark:border-gray-400 dark:bg-gray-50 dark:text-gray-800 focus:dark:ring-violet-600 focus:dark:border-violet-600 focus:ring-2"
            />

            {/* পাসওয়ার্ড ইনপুট */}
            <label className="sr-only">Password</label>
            <input
              id="password"
              type="password"
              placeholder="Password"
              className="-mt-1 rounded-b-md dark:border-gray-400 dark:bg-gray-50 dark:text-gray-800 focus:dark:ring-violet-600 focus:dark:border-violet-600 focus:ring-2"
            />

            {/* পুনরায় পাসওয়ার্ড ইনপুট */}
            <label className="sr-only">Re-Type Password</label>
            <input
              id="password2"
              type="password"
              placeholder="Re-Type Password"
              className="-mt-1 rounded-b-md dark:border-gray-400 dark:bg-gray-50 dark:text-gray-800 focus:dark:ring-violet-600 focus:dark:border-violet-600 focus:ring-2"
            />

            {/* রিমেম্বার মি চেকবক্স */}
            <div className="flex gap-2 my-5">
              <input type="checkbox" className="checkbox checkbox-success" />
              <label>Remember me</label>
            </div>
          </div>

          {/* সাবমিট বাটন */}
          <div className="flex justify-center">
            <button>
              {/* একটি আকর্ষণীয় এবং ইন্টারেক্টিভ বাটন ডিজাইন */}
              <a className="relative rounded px-5 py-2.5 overflow-hidden group bg-green-500 cursor-pointer hover:bg-gradient-to-r hover:from-green-500 hover:to-green-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-green-400 transition-all ease-out duration-300">
                {/* বাটনে একটি অ্যানিমেশন ইফেক্ট যুক্ত করা হয়েছে */}
                <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                <span className="relative">Sign up</span>
              </a>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

// SignUp কম্পোনেন্টকে এক্সপোর্ট করা হয়েছে, যাতে এটি অন্যান্য পৃষ্ঠায় ব্যবহার করা যায়।
export default SignUp;



// React কোডে সরাসরি কোনো জটিল অ্যালগরিদম নেই, তবে কিছু কার্যকর কৌশল ব্যবহার করা হয়েছে:

// Component-Based Design: UI-কে মডিউলার করা হয়েছে, যা রিডেবিলিটি ও পুনঃব্যবহারযোগ্যতা বাড়ায়।
// Conditional Rendering (NavLink): ইভেন্ট-ড্রিভেন পদ্ধতিতে নেভিগেশনের জন্য।
// Styling with Tailwind CSS: দ্রুত এবং রেসপন্সিভ ডিজাইন তৈরির জন্য।
// Input Validation Logic (Future Scope): ভবিষ্যতে RegEx দিয়ে ইনপুট যাচাই করা যেতে পারে।
// Interactive Animations: CSS Transition ব্যবহার করে বাটন ইন্টারেকশনে স্মুথ অ্যানিমেশন।
// State Management (Future Scope): ফর্ম ডেটা সংরক্ষণে React স্টেট ব্যবহারের সুযোগ।
// এগুলো UI উন্নত করতে ব্যবহৃত স্ট্র্যাটেজি, অ্যালগরিদম নয়।