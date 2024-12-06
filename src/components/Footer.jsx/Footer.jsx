





import { FaBookOpenReader } from "react-icons/fa6"; // React-icons থেকে "FaBookOpenReader" উপাদানটি ইম্পোর্ট করা হচ্ছে

const Footer = () => { // Footer কম্পোনেন্টের ডিফিনিশন
  return (
    <footer className="px-4 divide-y dark:bg-gray-100 dark:text-gray-800"> 
      {/* footer এলিমেন্টের জন্য CSS ক্লাস, যেগুলোর মধ্যে padding, divide এবং ডার্ক মোডের ব্যাকগ্রাউন্ড ও টেক্সট কালার নির্ধারণ করা হয়েছে */}
      
      <div className="container flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
        {/* মূল কন্টেইনার যেখানে ফ্লেক্সবক্স ব্যবহার করা হয়েছে এবং বিভিন্ন মিডিয়া সাইজের জন্য সেগুলি সমন্বিত করা হয়েছে */}
        
        <div className="lg:w-1/3"> {/* বড় স্ক্রীনে ১/৩ অংশ জায়গা পাবে */}
          <a
            rel="noopener noreferrer" 
            className="flex flex-col justify-center items-center gap-2 space-x-0 lg:justify-start"
          >
            {/* এন্টি-স্প্যাম প্রোটেকশন সহ <a> ট্যাগ এবং ফ্লেক্সবক্সের মাধ্যমে উপাদান সেন্টার করা হচ্ছে */}
            
            <FaBookOpenReader className="w-12 h-12" /> 
            {/* React-icons থেকে বইয়ের চিহ্ন (FaBookOpenReader) এবং তার সাইজ নির্ধারণ করা হয়েছে */}
            
            <span className="self-center text-2xl font-semibold">
              Library<span className="text-green-400">Hub</span>
            </span>
            {/* লোগো টেক্সট "LibraryHub", যেখানে Hub শব্দের জন্য একটি ভিন্ন রঙ দেওয়া হয়েছে */}
          </a>
        </div>

        <div className="grid grid-cols-2 text-sm gap-x-3 gap-y-8 lg:w-2/3 sm:grid-cols-4">
          {/* এই সেকশনটি ২ বা ৪টি কলামে বিভক্ত, ছোট স্ক্রীনে চারটি কলাম এবং বড় স্ক্রীনে দুটি কলাম */}
          
          <div className="space-y-3">
            <h3 className="tracking-wide uppercase dark:text-gray-900">Books</h3>
            {/* "Books" বিভাগের শিরোনাম */}
            <ul className="space-y-1">
              {/* বিভিন্ন বিষয়বস্তু দেখানোর জন্য তালিকা */}
              <li>
                <a rel="noopener noreferrer">Features</a>
              </li>
              <li>
                <a rel="noopener noreferrer">Integrations</a>
              </li>
              <li>
                <a rel="noopener noreferrer">Pricing</a>
              </li>
              <li>
                <a rel="noopener noreferrer">FAQ</a>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="tracking-wide uppercase dark:text-gray-900">Company</h3>
            {/* "Company" বিভাগের শিরোনাম */}
            <ul className="space-y-1">
              <li>
                <a rel="noopener noreferrer">Privacy</a>
              </li>
              <li>
                <a rel="noopener noreferrer">Terms of Service</a>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="uppercase dark:text-gray-900">Developers</h3>
            {/* "Developers" বিভাগের শিরোনাম */}
            <ul className="space-y-1">
              <li>
                <a rel="noopener noreferrer">Public API</a>
              </li>
              <li>
                <a rel="noopener noreferrer">Documentation</a>
              </li>
              <li>
                <a rel="noopener noreferrer">Guides</a>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <div className="uppercase dark:text-gray-900">Social media</div>
            {/* "Social media" বিভাগের শিরোনাম */}
            <div className="flex justify-start space-x-3">
              {/* সোশ্যাল মিডিয়া আইকনগুলি একে অপরের পাশে ফ্লেক্সবক্সে সাজানো হচ্ছে */}
              
              <a
                rel="noopener noreferrer"
                title="Facebook"
                className="flex items-center p-1"
              >
                {/* Facebook আইকন */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 32 32"
                  className="w-5 h-5 fill-current"
                >
                  <path d="M32 16c0-8.839-7.167-16-16-16-8.839 0-16 7.161-16 16 0 7.984 5.849 14.604 13.5 15.803v-11.177h-4.063v-4.625h4.063v-3.527c0-4.009 2.385-6.223 6.041-6.223 1.751 0 3.584 0.312 3.584 0.312v3.937h-2.021c-1.984 0-2.604 1.235-2.604 2.5v3h4.437l-0.713 4.625h-3.724v11.177c7.645-1.199 13.5-7.819 13.5-15.803z"></path>
                </svg>
              </a>

              <a
                rel="noopener noreferrer"
                title="Twitter"
                className="flex items-center p-1"
              >
                {/* Twitter আইকন */}
                <svg
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 fill-current"
                >
                  <path d="M23.954 4.569a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.691 8.094 4.066 6.13 1.64 3.161a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.061a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.937 4.937 0 004.604 3.417 9.868 9.868 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.936 9.936 0 002.46-2.548l-.047-.02z"></path>
                </svg>
              </a>

              <a
                rel="noopener noreferrer"
                title="Instagram"
                className="flex items-center p-1"
              >
                {/* Instagram আইকন */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                  fill="currentColor"
                  className="w-5 h-5 fill-current"
                >
                  <path d="M16 0c-4.349 0-4.891 0.021-6.593 0.093-1.709 0.084-2.865 0.349-3.885 0.745-1.052 0.412-1.948 0.959-2.833 1.849-0.891 0.885-1.443 1.781-1.849 2.833-0.396 1.020-0.661 2.176-0.745 3.885-0.077 1.703-0.093 2.244-0.093 6.593s0.021 4.891 0.093 6.593c0.084 1.704 0.349 2.865 0.745 3.885 0.412 1.052 0.959 1.948 1.849 2.833 0.885 0.891 1.781 1.443 2.833 1.849 1.020 0.391 2.181 0.661 3.885 0.745 1.703 0.077 2.244 0.093 6.593 0.093s4.891-0.021 6.593-0.093c1.704-0.084 2.865-0.349 3.885-0.745 1.052-0.412 1.948-0.959 2.833-1.849 0.891-0.885 1.443-1.781 1.849-2.833 0.396-1.020 0.661-2.176 0.745-3.885 0.077-1.703 0.093-2.244 0.093-6.593s-0.021-4.891-0.093-6.593c-0.084-1.704-0.349-2.865-0.745-3.885-0.412-1.052-0.959-1.948-1.849-2.833-0.885-0.891-1.781-1.443-2.833-1.849-1.020-0.396-2.176-0.661-3.885-0.745-1.703-0.077-2.244-0.093-6.593-0.093zM16 2c4.408 0 4.891 0.021 6.078 0.093 1.016 0.051 1.68 0.261 2.079 0.424 0.407 0.163 0.673 0.386 0.957 0.67 0.284 0.284 0.507 0.551 0.67 0.957 0.163 0.399 0.373 1.063 0.424 2.079 0.071 1.187 0.093 1.67 0.093 6.078 0 4.408-0.021 4.891-0.093 6.078-0.051 1.016-0.261 1.68-0.424 2.079-0.163 0.407-0.386 0.673-0.67 0.957-0.284 0.284-0.551 0.507-0.957 0.67-2.079 0.163-1.063 0.373-1.447 0.424-2.079-0.071-1.187-0.093-1.67-0.093-6.078-0.021-4.891 0.021-4.891 0.093-6.078 0.051-1.016 0.261-1.68 0.424-2.079 0.163-0.407 0.386-0.673 0.67-0.957 0.284-0.284 0.551-0.507 0.957-0.67 0.399-0.163 1.063-0.373 2.079-0.424 1.187-0.071 1.67-0.093 6.078-0.093z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="py-6 text-center text-xs dark:text-gray-600">
        <p>&copy; 2024 LibraryHub. All rights reserved.</p>
        {/* কপিরাইট এবং কোম্পানির নাম */}
      </div>
    </footer>
  );
};

export default Footer;



// এই কোডে React এবং CSS Flexbox/Grid Layout ব্যবহৃত হয়েছে। এখানে কোন জটিল অ্যালগরিদম নেই।

// React JSX: UI উপাদানগুলোকে একত্রিত করে প্রদর্শন করা হয়েছে।
// CSS Flexbox/Grid: লেআউট এবং উপাদানগুলির স্থান নির্ধারণ করা হয়েছে।
// React-icons: সোশ্যাল মিডিয়া এবং অন্যান্য আইকন দেখানোর জন্য ব্যবহার করা হয়েছে।
// এই কোডটি মূলত UI ডিজাইন এর জন্য।