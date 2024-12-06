



// React লাইব্রেরি ইনপোর্ট করা হচ্ছে
import React from "react";
// ReactDOM লাইব্রেরি ইনপোর্ট করা হচ্ছে, যা React কম্পোনেন্ট রেন্ডার করতে ব্যবহৃত হয়
import ReactDOM from "react-dom/client";
// index.css ফাইলটি ইনপোর্ট করা হচ্ছে, যাতে স্টাইলিং প্রয়োগ করা যায়
import "./index.css";
// React Router থেকে RouterProvider ইনপোর্ট করা হচ্ছে, যা রাউটিং ব্যবস্থাপনা করবে
import { RouterProvider } from "react-router-dom";
// আমাদের routes ফোল্ডারে সংজ্ঞায়িত রাউটিং কনফিগারেশন ইনপোর্ট করা হচ্ছে
import { router } from "./routes/Routes";

// ReactDOM.createRoot() মেথড দিয়ে "root" ID সম্পন্ন DOM এলিমেন্টে React অ্যাপ রেন্ডার করা হচ্ছে
ReactDOM.createRoot(document.getElementById("root")).render(
  // StrictMode একটি ডেভেলপমেন্ট টুল যা আপনার অ্যাপকে আরও নিরাপদ ও উন্নত করার জন্য কিছু চেক করে
  <React.StrictMode>
    {/* RouterProvider উপাদান ব্যবহার করে রাউটারের কনফিগারেশন পাস করা হচ্ছে */}
    <RouterProvider router={router} />
  </React.StrictMode>
);




// এই কোডে কোনো গাণিতিক অ্যালগোরিদম বা লজিক প্রয়োগ করা হয়নি, এটি কেবল UI রেন্ডারিং এবং রাউটিং সংক্রান্ত কাজ করছে।
