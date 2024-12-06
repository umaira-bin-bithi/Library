// import { FaFacebook, FaInstagramSquare, FaTwitter } from "react-icons/fa";

// const AwardCard = ({ imgSrc, title, description }) => (
//   <div className="text-center bg-white shadow-md rounded-lg p-6 space-y-4">
//     <figure className="flex justify-center">
//       <img src={imgSrc} alt={title} className="w-20 h-20 object-cover" />
//     </figure>
//     <h2 className="text-xl font-bold playfair text-green-600">{title}</h2>
//     <p className="text-gray-700 text-sm">{description}</p>
//   </div>
// );

// const Bio = () => {
//   const awards = [
//     {
//       imgSrc: "/award1.png",
//       title: "Readers’ Choice Award",
//       description: "Awarded for our exceptional commitment to empowering readers worldwide.",
//     },
//     {
//       imgSrc: "/award2.png",
//       title: "Best Digital Library Platform",
//       description: "Recognized for creating a seamless, innovative online library experience.",
//     },
//     {
//       imgSrc: "/award3.png",
//       title: "Innovation in Knowledge Access",
//       description: "Celebrated for integrating technology to expand access to learning resources.",
//     },
//   ];

//   return (
//     <div className="bg-gray-50">
//       {/* Header Section */}
//       <div className="text-center py-20 bg-gradient-to-r from-green-500 via-green-600 to-green-700 text-white rounded-lg mb-10">
//         <h1 className="text-6xl font-bold tracking-wide">
//           Welcome to <span className="text-yellow-300">LibraryHub</span>
//         </h1>
//         <p className="mt-4 max-w-2xl mx-auto text-lg">
//           Your gateway to knowledge, inspiration, and community. Discover a world of resources, tailored for every reader.
//         </p>
//       </div>

//       {/* Story Section */}
//       <div className="container mx-auto px-5 md:px-20 flex flex-col md:flex-row gap-12 items-center">
//         <div className="flex-1 space-y-6">
//           <h2 className="text-4xl font-bold text-green-700 playfair">
//             Our Journey at <span className="text-yellow-500">LibraryHub</span>
//           </h2>
//           <p className="text-gray-700 leading-relaxed text-justify">
//             At LibraryHub, we aim to redefine how people connect with books, knowledge, and learning. Founded with a mission 
//             to make reading accessible and engaging for everyone, LibraryHub bridges the gap between traditional libraries 
//             and the modern digital experience. 
//             <br /><br />
//             Our curated collection of physical and digital books spans genres, interests, and languages, ensuring that 
//             everyone finds something they love. With state-of-the-art technology and a passion for literacy, we strive to 
//             create a space where readers, students, and researchers can thrive.
//           </p>
//           <div className="flex gap-4">
//             <a href="https://facebook.com" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
//               <FaFacebook className="text-green-600 hover:text-green-800 text-3xl cursor-pointer" />
//             </a>
//             <a href="https://twitter.com" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
//               <FaTwitter className="text-green-600 hover:text-green-800 text-3xl cursor-pointer" />
//             </a>
//             <a href="https://instagram.com" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
//               <FaInstagramSquare className="text-green-600 hover:text-green-800 text-3xl cursor-pointer" />
//             </a>
//           </div>
//         </div>
//         <figure className="flex-1">
//           <img
//             src="public/bio1.png"
//             alt="Illustration of LibraryHub's journey"
//             className="rounded-lg shadow-lg object-cover w-full"
//           />
//         </figure>
//       </div>

//       {/* Awards Section */}
//       <div className="mt-20 pb-20">
//         <h2 className="text-center text-5xl font-bold text-green-700 mb-12">
//           Why Choose <span className="text-yellow-500">LibraryHub</span>
//         </h2>
//         <p className="text-center text-gray-700 max-w-3xl mx-auto mb-10">
//           LibraryHub is more than just a library; it's an innovative platform that integrates education, 
//           entertainment, and community. Our accolades reflect our dedication to bringing readers and learners 
//           the very best experiences.
//         </p>
//         <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-5 md:px-20">
//           {awards.map((award, index) => (
//             <AwardCard key={index} {...award} />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Bio;



import { FaFacebook, FaInstagramSquare, FaTwitter } from "react-icons/fa"; 
// react-icons লাইব্রেরি থেকে ফেসবুক, ইনস্টাগ্রাম, এবং টুইটারের আইকন ইম্পোর্ট করা হচ্ছে।

const AwardCard = ({ imgSrc, title, description }) => ( 
  // AwardCard কম্পোনেন্ট যা পুরস্কারের তথ্য শো করবে। এখানে imgSrc, title, এবং description প্রপস হিসেবে নেওয়া হচ্ছে।

  <div className="text-center bg-white shadow-md rounded-lg p-6 space-y-4"> 
    {/* পুরস্কারের কার্ডের মূল div, যেখানে সব কিছু সাজানো হবে। bg-white হল পটভূমির রঙ, shadow-md হল শ্যাডো, এবং rounded-lg কোণাগুলি গোলাকার করবে। */}
    
    <figure className="flex justify-center"> 
      {/* এখানে ছবির জন্য figure ব্যবহার করা হয়েছে, যা flexbox ব্যবহার করে কেন্দ্রস্থলে স্থাপন করা হয়েছে। */}
      
      <img src={imgSrc} alt={title} className="w-20 h-20 object-cover" /> 
      {/* ছবির সাইজ ২০x২০ পিক্সেল করা হয়েছে এবং object-cover প্রপার্টি নিশ্চিত করবে যে ছবি সম্পূর্ণভাবে কভার করবে। */}
      
    </figure>
    
    <h2 className="text-xl font-bold playfair text-green-600">{title}</h2> 
    {/* পুরস্কারের শিরোনাম দেখানোর জন্য h2 ট্যাগ ব্যবহার করা হয়েছে, text-xl সাইজ এবং font-bold স্টাইল প্রয়োগ করা হয়েছে। */}
    
    <p className="text-gray-700 text-sm">{description}</p> 
    {/* পুরস্কারের বর্ণনা দেখানোর জন্য p ট্যাগ ব্যবহার করা হয়েছে, text-gray-700 গ্রে রঙ এবং text-sm ছোট সাইজ ব্যবহার করা হয়েছে। */}
    
  </div>
);

const Bio = () => { 
  // Bio কম্পোনেন্ট যা সাইটের পরিচিতি এবং পুরস্কারের তথ্য প্রদর্শন করবে।
  
  const awards = [ 
    // পুরস্কারের তথ্য সম্বলিত অ্যারে।
    {
      imgSrc: "/award1.png", 
      title: "Readers’ Choice Award", 
      description: "Awarded for our exceptional commitment to empowering readers worldwide.",
    },
    {
      imgSrc: "/award2.png", 
      title: "Best Digital Library Platform", 
      description: "Recognized for creating a seamless, innovative online library experience.",
    },
    {
      imgSrc: "/award3.png", 
      title: "Innovation in Knowledge Access", 
      description: "Celebrated for integrating technology to expand access to learning resources.",
    },
  ];

  return (
    <div className="bg-gray-50"> 
    {/* এই div ট্যাগটি সাইটের মূল ব্যাকগ্রাউন্ড হবে, যেখানে bg-gray-50 সাপোর্ট করবে সাইটের হালকা ধূসর ব্যাকগ্রাউন্ড। */}

      {/* Header Section */}
      <div className="text-center py-20 bg-gradient-to-r from-green-500 via-green-600 to-green-700 text-white rounded-lg mb-10">
        {/* হেডার সেকশন যেখানে একটি গ্রেডিয়েন্ট ব্যাকগ্রাউন্ড এবং কেন্দ্রস্থলে টেক্সট রয়েছে। */}

        <h1 className="text-6xl font-bold tracking-wide"> 
          {/* মূল শিরোনাম, text-6xl দিয়ে আকার বড় করা হয়েছে এবং font-bold দিয়ে স্টাইল প্রয়োগ করা হয়েছে। */}
          
          Welcome to <span className="text-yellow-300">LibraryHub</span> 
          {/* "LibraryHub" নামটি হলুদ রঙে প্রদর্শিত হবে। */}
        </h1>

        <p className="mt-4 max-w-2xl mx-auto text-lg"> 
          {/* এখানে সাইটের একটি সংক্ষিপ্ত বিবরণ রয়েছে। mt-4 দিয়ে উপরের মার্জিন, max-w-2xl দিয়ে সর্বোচ্চ প্রস্থ নির্ধারণ এবং text-lg দিয়ে ফন্ট সাইজ বড় করা হয়েছে। */}
          
          Your gateway to knowledge, inspiration, and community. Discover a world of resources, tailored for every reader.
        </p>
      </div>

      {/* Story Section */}
      <div className="container mx-auto px-5 md:px-20 flex flex-col md:flex-row gap-12 items-center">
        {/* flexbox ব্যবহার করে কনটেন্টকে সারিবদ্ধ করা হচ্ছে। প্রথমে এটি কলাম হিসেবে দেখানো হবে এবং বড় স্ক্রীনে সারি হিসাবে। */}
        
        <div className="flex-1 space-y-6"> 
          {/* এটি প্রথম কলাম, flex-1 দিয়ে প্রস্থ পূর্ণ করা হচ্ছে। space-y-6 দিয়ে উপাদানগুলির মধ্যে ফাঁকা জায়গা রাখা হয়েছে। */}
          
          <h2 className="text-4xl font-bold text-green-700 playfair">
            {/* গল্পের শিরোনাম, text-4xl সাইজ এবং text-green-700 রঙ দিয়ে সবুজ শিরোনাম দেওয়া হয়েছে। */}
            
            Our Journey at <span className="text-yellow-500">LibraryHub</span> 
            {/* "LibraryHub" নামটি হলুদ রঙে প্রদর্শিত হবে। */}
          </h2>

          <p className="text-gray-700 leading-relaxed text-justify">
            {/* বিস্তারিত বিবরণ প্রদর্শিত হচ্ছে যেখানে text-gray-700 গ্রে রঙ এবং leading-relaxed স্পেসিং প্রয়োগ করা হয়েছে। */}
            
            At LibraryHub, we aim to redefine how people connect with books, knowledge, and learning...
          </p>
          
          <div className="flex gap-4"> 
            {/* এখানে সোশ্যাল মিডিয়ার আইকনগুলির জন্য flexbox ব্যবহার করা হয়েছে এবং আইকনগুলির মধ্যে ৪ পিক্সেল ফাঁকা রাখা হয়েছে। */}
            
            <a href="https://facebook.com" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="text-green-600 hover:text-green-800 text-3xl cursor-pointer" /> 
              {/* ফেসবুক আইকন, hover করে রঙ পরিবর্তন করবে। */}
            </a>

            <a href="https://twitter.com" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="text-green-600 hover:text-green-800 text-3xl cursor-pointer" /> 
              {/* টুইটার আইকন, hover করলে রঙ পরিবর্তন হবে। */}
            </a>

            <a href="https://instagram.com" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
              <FaInstagramSquare className="text-green-600 hover:text-green-800 text-3xl cursor-pointer" /> 
              {/* ইনস্টাগ্রাম আইকন, hover করলে রঙ পরিবর্তন হবে। */}
            </a>
          </div>
        </div>

        <figure className="flex-1">
          {/* ছবির জন্য figure ট্যাগ। flex-1 দিয়ে প্রস্থ নিয়ন্ত্রণ করা হয়েছে। */}
          
          <img
            src="public/bio1.png"
            alt="Illustration of LibraryHub's journey"
            className="rounded-lg shadow-lg object-cover w-full" 
            // ছবির জন্য বিভিন্ন স্টাইল প্রয়োগ করা হয়েছে, rounded-lg কোণ গোলাকার, shadow-lg শ্যাডো এবং object-cover ইমেজকে ভালোভাবে ফিট করতে সাহায্য করবে।
          />
        </figure>
      </div>

      {/* Awards Section */}
      <div className="mt-20 pb-20">
        {/* এই অংশটি পুরস্কার প্রদর্শন করতে ব্যবহৃত হবে। mt-20 এবং pb-20 দিয়ে যথাক্রমে উপরের এবং নিচের মার্জিন দেওয়া হয়েছে। */}
        
        <h2 className="text-center text-5xl font-bold text-green-700 mb-12">
          {/* পুরস্কারের শিরোনাম, text-5xl ফন্ট সাইজ বড় এবং সবুজ রঙ দিয়ে স্টাইল করা হয়েছে। */}
          
          Why Choose <span className="text-yellow-500">LibraryHub</span> 
          {/* "LibraryHub" শব্দটি হলুদ রঙে। */}
        </h2>
        
        <p className="text-center text-gray-700 max-w-3xl mx-auto mb-10">
          {/* এক্সপ্লানেশন প্যারাগ্রাফ, যেখানে সাইটের আরও বিশদ বর্ণনা রয়েছে। max-w-3xl দিয়ে সর্বাধিক প্রস্থ নির্ধারণ এবং mx-auto দিয়ে এটি কেন্দ্রীভূত করা হয়েছে। */}
          
          LibraryHub is more than just a library; it's an innovative platform that integrates education...
        </p>
        
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-5 md:px-20">
          {/* গ্রিড লেআউট, যেখানে মোবাইল ডিভাইসের জন্য এক কলাম এবং বড় স্ক্রীনে তিনটি কলাম প্রদর্শিত হবে। */}
          
          {awards.map((award, index) => (
            <AwardCard key={index} {...award} />
            // এখানে awards অ্যারের প্রতিটি উপাদানের জন্য AwardCard কম্পোনেন্ট রেন্ডার করা হচ্ছে।
          ))}
        </div>
      </div>
    </div>
  );
};

export default Bio; 
// Bio কম্পোনেন্টটি এক্সপোর্ট করা হচ্ছে যাতে অন্য কোথাও ব্যবহৃত হতে পারে।


// এখানে React এবং CSS ফিচারগুলি ব্যবহৃত হয়েছে। যেমন:

// Flexbox Layout: flex এবং flex-1 ক্লাস ব্যবহার করা হয়েছে এলিমেন্টগুলোকে সঠিকভাবে স্থান দেওয়ার জন্য।
// Grid Layout: grid-cols-1 md:grid-cols-3 ক্লাস ব্যবহার করে মোবাইল এবং ডেস্কটপের জন্য আলাদা লেআউট তৈরি করা হয়েছে।
// CSS Utility Classes: বিভিন্ন CSS utility ক্লাস যেমন text-center, text-gray-700, text-6xl ইত্যাদি ব্যবহার করা হয়েছে স্টাইলিং এবং উপাদানগুলোর অবস্থান নিয়ন্ত্রণ করার জন্য।
// সারাংশ:
// এই কোডে কোন সার্চ, সোর্টিং, গ্রাফ ট্র্যাভার্সাল বা অন্য কোনো অ্যালগোরিদম ব্যবহৃত হয়নি। এটি একটি UI/UX ডিজাইন কম্পোনেন্ট যা React এবং Tailwind CSS ব্যবহার করে তৈরি হয়েছে।







