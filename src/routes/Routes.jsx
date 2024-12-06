



// react-router-dom থেকে createBrowserRouter ফাংশন ইমপোর্ট করা হয়েছে, যা ব্রাউজার বেসড রাউটিং ব্যবস্থাপনা করে।
import { createBrowserRouter } from "react-router-dom";

// বিভিন্ন পেজ কম্পোনেন্ট ইমপোর্ট করা হয়েছে, যা প্রতিটি রাউটের জন্য ভিন্ন ভিন্ন কনটেন্ট প্রদর্শন করবে।
import Root from "../pages/Root"; // মূল রুট বা বেস লেআউট কম্পোনেন্ট।
import Home from "../pages/Home"; // হোম পেজের জন্য কম্পোনেন্ট।
import ListedBooks from "../pages/ListedBooks"; // লিস্টেড বুকস পেজের জন্য কম্পোনেন্ট।
import PagesToRead from "../pages/PagesToRead"; // পেজ টু রিড পেজের জন্য কম্পোনেন্ট।
import Bio from "../pages/Bio"; // বায়ো পেজের জন্য কম্পোনেন্ট।
import SignIn from "../pages/SignIn"; // সাইন ইন পেজের জন্য কম্পোনেন্ট।
import SignUp from "../pages/SignUp"; // সাইন আপ পেজের জন্য কম্পোনেন্ট।
import BookDetails from "../pages/BookDetails"; // বুক ডিটেইলস পেজের জন্য কম্পোনেন্ট।
import ErrorPage from "../components/ErrorPage/ErrorPage"; // এরর পেজ কম্পোনেন্ট।
import Contact from "../pages/Contact"; // কন্টাক্ট পেজের জন্য কম্পোনেন্ট।

// রাউট কনফিগারেশনের জন্য createBrowserRouter ফাংশন ব্যবহার করা হয়েছে।
export const router = createBrowserRouter([
  {
    path: "/", // মূল রুট বা বেস পাথ।
    element: <Root />, // Root কম্পোনেন্ট লোড হবে।
    errorElement: <ErrorPage />, // যদি কোনো এরর হয়, তাহলে ErrorPage কম্পোনেন্ট দেখানো হবে।
    children: [
      // চাইল্ড রাউটগুলো ডিফাইন করা হয়েছে।
      {
        path: "/", // হোম পেজের পাথ।
        element: <Home />, // Home কম্পোনেন্ট লোড হবে।
      },
      {
        path: "/listed_books", // লিস্টেড বুকস পেজের পাথ।
        element: <ListedBooks />, // ListedBooks কম্পোনেন্ট লোড হবে।
      },
      {
        path: "/pages_to_read", // পেজ টু রিড পেজের পাথ।
        element: <PagesToRead />, // PagesToRead কম্পোনেন্ট লোড হবে।
      },
      {
        path: "/bio", // বায়ো পেজের পাথ।
        element: <Bio />, // Bio কম্পোনেন্ট লোড হবে।
      },
      {
        path: "/sign_in", // সাইন ইন পেজের পাথ।
        element: <SignIn />, // SignIn কম্পোনেন্ট লোড হবে।
      },
      {
        path: "/sign_up", // সাইন আপ পেজের পাথ।
        element: <SignUp />, // SignUp কম্পোনেন্ট লোড হবে।
      },
      {
        path: "/book_details/:bookId", // বুক ডিটেইলস পেজের ডাইনামিক পাথ, যেখানে :bookId প্যারামিটার থাকবে।
        loader: () => fetch('/data.json'), // ডেটা লোড করার জন্য লোডার ফাংশন ব্যবহৃত হয়েছে।
        element: <BookDetails />, // BookDetails কম্পোনেন্ট লোড হবে।
      },
      {
        path: "/contact", // কন্টাক্ট পেজের পাথ।
        element: <Contact />, // Contact কম্পোনেন্ট লোড হবে।
      },
    ],
  },
]);

