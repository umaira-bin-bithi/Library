   

// প্রয়োজনীয় কম্পোনেন্ট এবং হুকস ইমপোর্ট করা হচ্ছে
import { Outlet, useNavigate } from "react-router-dom";  // Outlet (nested route render করার জন্য), useNavigate (পেজ নেভিগেট করতে)
import Navbar from "../components/Navbar/Navbar";  // Navbar কম্পোনেন্ট (নেভিগেশন বার দেখানোর জন্য)
import Footer from "../components/Footer.jsx/Footer";  // Footer কম্পোনেন্ট (ফুটার দেখানোর জন্য)
import { UserContext } from "../Hooks/useUserContext";  // UserContext (ইউজার ডেটা অন্য কম্পোনেন্টে শেয়ার করার জন্য)
import { useState } from "react";  // React hook (স্টেট ম্যানেজমেন্টের জন্য)
import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";  // Firebase authentication (গুগল ও গিটহাব লগইন ফিচারের জন্য)
import app from "../firebase/firebase.init";  // Firebase ইনিশিয়ালাইজেশন ফাইল

// Root কম্পোনেন্ট যেটি অন্য পেজের জন্য র‍্যাপার হিসেবে কাজ করবে
const Root = () => {
  const navigate = useNavigate();  // পেজ নেভিগেশন করার জন্য হুক
  const [user, setUser] = useState(null);  // ইউজারের ডেটা স্টোর করার জন্য স্টেট (প্রথমে null থাকবে)
  const auth = getAuth(app);  // Firebase auth ইনস্ট্যান্স
  const googleProvider = new GoogleAuthProvider();  // গুগল লগইন প্রোভাইডার
  const githubProvider = new GithubAuthProvider();  // গিটহাব লগইন প্রোভাইডার

  // গুগল লগইন হ্যান্ডলারের ফাংশন
  const handleGoogleLogin = () => {
    signInWithPopup(auth, googleProvider)  // গুগল লগইন পপআপ ট্রিগার করা
      .then((result) => {  // লগইন সফল হলে
        setUser(result.user);  // ইউজারের ডেটা স্টেটে সেট করা
        navigate("/");  // লগইনের পর হোম পেজে নেভিগেট করা
      })
      .catch((error) => {  // লগইনে যদি সমস্যা হয়
        console.log("error", error.message);  // এরর মেসেজ লগ করা
      });
  };

  // গিটহাব লগইন হ্যান্ডলারের ফাংশন
  const handleGithubLogin = () => {
    signInWithPopup(auth, githubProvider)  // গিটহাব লগইন পপআপ ট্রিগার করা
      .then((result) => {  // লগইন সফল হলে
        setUser(result.user);  // ইউজারের ডেটা স্টেটে সেট করা
        navigate("/");  // লগইনের পর হোম পেজে নেভিগেট করা
      })
      .catch((error) => {  // লগইনে যদি সমস্যা হয়
        console.log("error", error.message);  // এরর মেসেজ লগ করা
      });
  };

  // সাইন আউট হ্যান্ডলারের ফাংশন
  const handleSignOut = () => {
    signOut(auth)  // ফায়ারবেস থেকে সাইন আউট
    .then(() => {  // সাইন আউট সফল হলে
      setUser(null);  // ইউজার স্টেটকে null করে দেওয়া (অর্থাৎ, সাইন আউট হয়ে গিয়েছে)
    })
    .catch(error => {  // যদি কোনো এরর হয়
      console.log(error);  // এরর মেসেজ লগ করা
    });
  }

  return (
    // UserContext.Provider ব্যবহার করা হচ্ছে যাতে ইউজার ডেটা এবং লগইন/লগআউট ফাংশন সব কম্পোনেন্টে শেয়ার করা যায়
    <UserContext.Provider value={{ user, handleGoogleLogin, handleGithubLogin, handleSignOut }}>
      <div>
        <nav className="h-[79.2px] bg-white">
          <Navbar />  
          {/* Navbar কম্পোনেন্ট রেন্ডার করা */}
        </nav>
        <div className="min-h-[calc(100vh-352px)] max-w-[1240px] w-[90%] mx-auto my-2">
          <Outlet />  
           {/* Outlet (nested routes এখানে রেন্ডার হবে) */}
        </div>
        <hr />
        <Footer />  
         {/* Footer কম্পোনেন্ট রেন্ডার করা */}
      </div>
    </UserContext.Provider>
  );
};

export default Root;

// এই কোডে কোনো ক্লাসিক অ্যালগরিদম ব্যবহৃত হয়নি, তবে Firebase Authentication (গুগল এবং গিটহাব লগইন) এবং React State Management ব্যবহার করা হয়েছে।

// OAuth 2.0 অ্যালগরিদম (গুগল/গিটহাব লগইন) ব্যবহার করা হয়েছে।
// Firebase signInWithPopup() এবং signOut() ফাংশন ইউজার লগইন এবং সাইন আউট পরিচালনা করে।
// React's useState hook দিয়ে ইউজারের লগইন স্টেট ম্যানেজ করা হচ্ছে।
// React Context API দিয়ে ইউজার ডেটা শেয়ার করা হচ্ছে।