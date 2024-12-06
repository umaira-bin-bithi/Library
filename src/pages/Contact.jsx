


const Contact = () => {
  return (
    // সেকশনের শুরু, এখানে py-6 ব্যবহার করা হয়েছে যাতে প্যাডিং থাকে এবং ডার্ক ব্যাকগ্রাউন্ড ও টেক্সট রঙ দেওয়া হয়েছে
    <section className="py-6 dark:bg-gray-100 dark:text-gray-900">
      
      {/* এখানে গ্রিড লেআউট ব্যবহৃত হয়েছে যাতে মোবাইল ও বড় স্ক্রীনে ভিন্নভাবে উপাদানগুলি প্রদর্শিত হয় */}
      <div className="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x">

        {/* প্রথম অংশ, যা যোগাযোগের বিস্তারিত দেখাবে */}
        <div className="py-6 md:py-0 md:px-6">
          
          {/* হেডিং অংশ, যা ব্যবহারকারীদের বলছে যে তাদের যোগাযোগ করতে হবে */}
          <h1 className="text-4xl font-bold">Get in touch</h1>
          <p className="pt-2 pb-4">Fill in the form to start a conversation</p>
          
          {/* যোগাযোগের বিস্তারিত (ঠিকানা, ফোন নম্বর, ইমেইল) দেখানোর জন্য তিনটি প্যারাগ্রাফ */}
          <div className="space-y-4">
            {/* ঠিকানা */}
            <p className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5 mr-2 sm:mr-6"
              >
                <path
                  fillRule="evenodd"
                  d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span>Bangladesh, Chittagong City</span>
            </p>

            {/* ফোন নম্বর */}
            <p className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5 mr-2 sm:mr-6"
              >
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
              </svg>
              <span>01659874586</span>
            </p>

            {/* ইমেইল অ্যাড্রেস */}
            <p className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5 mr-2 sm:mr-6"
              >
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
              </svg>
              <span>libraryhub@readsbusiness.com</span>
            </p>
          </div>
        </div>

        {/* ফর্ম সেকশন যেখানে ব্যবহারকারী ইনপুট প্রদান করবে */}
        <form className="flex flex-col py-6 space-y-6 md:py-0 md:px-6">
          
          {/* নাম ইনপুট ফিল্ড */}
          <label className="block">
            <span className="mb-1">Full name</span>
            <input
              type="text"
              placeholder="Leroy Jenkins"
              className="block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 dark:bg-gray-100"
            />
          </label>
          
          {/* ইমেইল ইনপুট ফিল্ড */}
          <label className="block">
            <span className="mb-1">Email address</span>
            <input
              type="email"
              placeholder="leroy@jenkins.com"
              className="block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 dark:bg-gray-100"
            />
          </label>
          
          {/* মেসেজ ইনপুট ফিল্ড */}
          <label className="block">
            <span className="mb-1">Message</span>
            <textarea
              rows="3"
              className="block w-full rounded-md focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 dark:bg-gray-100"
            ></textarea>
          </label>
          
          {/* সাবমিট বাটন */}
          <button>
            <a
              className="relative rounded px-5 py-2.5 overflow-hidden group bg-green-500 cursor-pointer hover:bg-gradient-to-r hover:from-green-500 hover:to-green-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-green-400 transition-all ease-out duration-300"
            >
              {/* অ্যানিমেশন যার মাধ্যমে সাবমিট বাটনটি ক্লিক করার সময় চমকপ্রদ প্রভাব তৈরি হবে */}
              <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
              <span className="relative">Submit</span>
            </a>
          </button>
        </form>
      </div>
    </section>
  );
};

// কম্পোনেন্টটি এক্সপোর্ট করা হয়েছে যাতে অন্য কোথাও এটি ব্যবহৃত হতে পারে
export default Contact;






// এই কোডে কোনও বিশেষ অ্যালগরিদম ব্যবহৃত হয়নি। এটি একটি সাধারন ইউজার ইন্টারফেস (UI) কম্পোনেন্ট
//  যা ব্যবহারকারীর ইনপুট সংগ্রহ এবং প্রদর্শন করার জন্য ডিজাইন করা হয়েছে।

// CSS Grid Layout: গ্রিড লেআউটের মাধ্যমে উপাদানগুলোকে সুন্দরভাবে সাজানো হয়েছে।
// Responsive Design: মোবাইল এবং বড় স্ক্রীনে উপাদানগুলো যথাযথভাবে উপস্থাপন করতে md এবং lg ক্লাস ব্যবহার করা হয়েছে।
// এছাড়াও, এখানে Event Handling ব্যবহার করা হয়েছে সাবমিট বাটন ক্লিক করলে কার্য সম্পন্ন হবে এমন ধারণায়,
//  তবে ফর্মটি প্রেরণের জন্য কোন API সংযোগ বা ডেটা ম্যানিপুলেশন নেই।