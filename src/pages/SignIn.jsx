
   




import { NavLink } from "react-router-dom"; 
// "react-router-dom" থেকে NavLink ইমপোর্ট করা হয়েছে, যা রাউটিংয়ের জন্য লিঙ্ক তৈরি করতে ব্যবহার করা হয়।

import { useContext } from "react"; 
// React এর useContext হুকটি ইমপোর্ট করা হয়েছে, যা Context API এর মাধ্যমে ডেটা শেয়ার করতে সাহায্য করে।

import { UserContext } from "../Hooks/useUserContext"; 
// "useUserContext" ফাইল থেকে UserContext ইমপোর্ট করা হয়েছে, যাতে লগইন ফাংশনগুলো অ্যাক্সেস করা যায়।

const SignIn = () => { 
  // SignIn নামে একটি ফাংশন কম্পোনেন্ট ডিক্লেয়ার করা হয়েছে।
  const {handleGoogleLogin, handleGithubLogin} = useContext(UserContext); 
  // useContext ব্যবহার করে handleGoogleLogin এবং handleGithubLogin ফাংশনগুলো Context API থেকে গ্রহণ করা হয়েছে।

  return ( 
    // JSX রিটার্ন করা হচ্ছে যা Sign-In পেজের UI তৈরি করবে।
    <>
      <section className="flex justify-center">
        {/* সেকশনটি একটি ফ্লেক্স বক্স যা কন্টেন্টকে কেন্দ্রীভূত অবস্থানে রাখবে। */}
        <div className="w-full max-w-md p-4 rounded-md shadow sm:p-8 dark:bg-gray-50 dark:text-gray-800">
          {/* একটি ডিভ ব্লক তৈরি করা হয়েছে যেখানে Sign-In ফর্ম থাকবে। */}
          <h2 className="mb-3 text-3xl font-semibold text-center">
            {/* একটি শিরোনাম যা ব্যবহারকারীকে লগইন করার জন্য নির্দেশ করে। */}
            Login to your account
          </h2>
          <p className="text-sm text-center dark:text-gray-600">
            {/* যদি ব্যবহারকারীর অ্যাকাউন্ট না থাকে, তবে সাইন আপ করার অপশন দেখানো হবে। */}
            Dont have account?
            <NavLink
              to="/sign_up"
              rel="noopener noreferrer"
              className="focus:underline hover:underline text-green-500"
            >
              {/* সাইন আপ পেজে ন্যাভিগেট করার জন্য NavLink ব্যবহার করা হয়েছে। */}
              Sign up here
            </NavLink>
          </p>
          <div className="my-6 space-y-4">
            {/* Google এবং GitHub লগইন বাটনের জন্য একটি ডিভ। */}
            <button
              onClick={handleGoogleLogin} 
              // Google লগইন ফাংশন কল করবে।
              aria-label="Login with Google"
              type="button"
              className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 dark:border-gray-600 focus:dark:ring-violet-600"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                className="w-5 h-5 fill-current"
              >
                {/* Google আইকন SVG */}
                <path d="..."></path>
              </svg>
              <p>Login with Google</p>
            </button>
            <button
              onClick={handleGithubLogin} 
              // GitHub লগইন ফাংশন কল করবে।
              aria-label="Login with GitHub"
              role="button"
              className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 dark:border-gray-600 focus:dark:ring-violet-600"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                className="w-5 h-5 fill-current"
              >
                {/* GitHub আইকন SVG */}
                <path d="..."></path>
              </svg>
              <p>Login with GitHub</p>
            </button>
            <button
              aria-label="Login with Twitter"
              role="button"
              className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 dark:border-gray-600 focus:dark:ring-violet-600"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                className="w-5 h-5 fill-current"
              >
                {/* Twitter আইকন SVG */}
                <path d="..."></path>
              </svg>
              <p>Login with Twitter</p>
            </button>
          </div>
          <div className="flex items-center w-full my-4">
            {/* বা (OR) সেকশন যা সোশ্যাল লগইন এবং ফর্ম লগইন আলাদা করে। */}
            <hr className="w-full dark:text-gray-600" />
            <p className="px-3 dark:text-gray-600">OR</p>
            <hr className="w-full dark:text-gray-600" />
          </div>
          <form className="space-y-8">
            {/* লগইন ফর্ম যা ইমেইল এবং পাসওয়ার্ড ইনপুট নেয়। */}
            <div className="space-y-4">
              <div className="space-y-2">
                <label className="block text-sm">Email address</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="leroy@jenkins.com"
                  className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
                />
              </div>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <label className="text-sm">Password</label>
                  <a className="text-xs hover:underline dark:text-gray-600">
                    Forgot password?
                  </a>
                </div>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="*****"
                  className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
                />
              </div>
            </div>
            <div className="flex justify-center">
              <button>
                {/* সাবমিট বাটন */}
                <a className="relative rounded px-5 py-2.5 overflow-hidden group bg-green-500 cursor-pointer hover:bg-gradient-to-r hover:from-green-500 hover:to-green-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-green-400 transition-all ease-out duration-300">
                  <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                  <span className="relative">Sign in</span>
                </a>
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default SignIn; 
// SignIn কম্পোনেন্ট এক্সপোর্ট করা হয়েছে যাতে এটি অন্য ফাইলেও ব্যবহার করা যায়।







// এই কোডে কোনও ক্লাসিক্যাল অ্যালগরিদম সোজাসুজি ব্যবহার করা হয়নি, তবে এটি React এবং এর ইকোসিস্টেমের বিভিন্ন ফিচার ব্যবহার করে UI ডেভেলপমেন্ট এবং কার্যকারিতা অর্জন করেছে। 
// নিচে আমি বিভিন্ন কনসেপ্ট এবং React ফিচারগুলোর ব্যাখ্যা করছি:

// 1. ইভেন্ট হ্যান্ডলিং অ্যালগরিদম:
// গুগল/গিটহাব/টুইটারে লগইন:
// handleGoogleLogin এবং handleGithubLogin নামক ইভেন্ট হ্যান্ডলারগুলি নির্দিষ্ট বাটনে ক্লিক করার পর কল হয়। 
// এই ফাংশনগুলো সম্ভবত অ্যানথেন্টিকেশন লাইব্রেরি (যেমন: Firebase, OAuth) ব্যবহার করে লগইন রিকোয়েস্ট সিকিউরভাবে হ্যান্ডল করে।
// কনসেপ্ট: এখানে callback functions ব্যবহার করা হয়েছে, যেখানে ইভেন্ট (যেমন বাটনে ক্লিক) ঘটলে সেই ইভেন্টের জন্য নির্ধারিত ফাংশনটি চালু হয়।
// 2. ফর্ম ম্যানেজমেন্ট অ্যালগরিদম:
// ইনপুট ভ্যালিডেশন এবং ডাটা কালেকশন:
// email এবং password ফিল্ড ব্যবহারকারীর ইনপুট সংগ্রহ করে। আরও ব্যাপকভাবে, এই ইনপুটগুলো ভ্যালিডেট করা হতে পারে:
// ফ্রন্টএন্ড ভ্যালিডেশন: Regex বা কাস্টম JavaScript ফাংশন ব্যবহার করে।
// ব্যাকএন্ড ভ্যালিডেশন: ফর্ম সাবমিশনের পর সার্ভার সাইডে চেক করা।
// কনসেপ্ট: এটি একটি বেসিক ফর্ম হ্যান্ডলিং, যেখানে controlled components ব্যবহার করা হয় React-এ (যদিও এই কোডে ইনপুটগুলো অঙ্কন করা হয়েছে, 
//   যার মানে React স্টেট সরাসরি ব্যবহার করা হয়নি)।