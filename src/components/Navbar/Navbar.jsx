import { useEffect, useState } from "react"; // React এর useEffect এবং useState হুক ইম্পোর্ট করা হচ্ছে
import { NavLink } from "react-router-dom"; // React Router থেকে NavLink ইম্পোর্ট করা হচ্ছে
import { getThemes, setThemes } from "../../utils/localStorage"; // থিম সংরক্ষণ এবং প্রাপ্তির জন্য ইউটিলিটি ফাংশন ইম্পোর্ট করা হচ্ছে
import { useContext } from "react"; // React থেকে useContext হুক ইম্পোর্ট করা হচ্ছে
import { UserContext } from "../../Hooks/useUserContext"; // ইউজার কনটেক্সট ইম্পোর্ট করা হচ্ছে

const Navbar = () => {   // Navbar নামক একটি কম্পোনেন্ট তৈরি করা হচ্ছে
  const [theme, setTheme] = useState("light");   // থিমের জন্য একটি state তৈরি করা হচ্ছে, যার প্রাথমিক মান হচ্ছে "light"
  const { user , handleSignOut} = useContext(UserContext);  // ইউজার কনটেক্সট থেকে user এবং handleSignOut ফাংশন নেয়া হচ্ছে
  useEffect(() => {   // useEffect হুক ব্যবহার করে থিম সেট করা হচ্ছে
    const localTheme = getThemes();   // লোকাল স্টোরেজ থেকে থিম নিয়ে আসা হচ্ছে
    document
      .querySelector("html")   // HTML ডকুমেন্টের "html" ট্যাগের মধ্যে থিম সেট করা হচ্ছে
      .setAttribute("data-theme", localTheme || theme);   // যদি লোকাল থিম না থাকে তবে ডিফল্ট থিম হবে "light"
  }, [theme]);  // থিম পরিবর্তিত হলে এটি পুনরায় চলবে

  const handleTheme = (e) => {   // থিম পরিবর্তনের জন্য একটি ফাংশন তৈরি করা হচ্ছে
    if (e.target.checked) {  // যদি চেকবক্স চেক করা থাকে, তখন ডার্ক থিম সেট হবে
      setThemes("dark");  // থিমকে "dark" সেট করা হচ্ছে
      setTheme("dark");  // থিম state পরিবর্তন করা হচ্ছে
    } else {   // যদি চেকবক্স চেক না থাকে, তখন লাইট থিম সেট হবে
      setThemes("light");  // থিমকে "light" সেট করা হচ্ছে
      setTheme("light");   // থিম state পরিবর্তন করা হচ্ছে
    } 
  };

  const navLink = (   // নেভিগেশন লিঙ্কগুলির JSX কোড
    <>
      <NavLink
        to="/"
        className={({ isActive, isPending }) =>   // রুটের জন্য ক্লাস কনফিগার করা হচ্ছে
          isActive ? (
            "py-2 px-5 text-green-400 rounded-lg border-2 border-green-400 text-lg font-semibold"
          ) : isPending ? (
            <></>
          ) : (
            "py-2 px-5 rounded-lg border-2 border-white text-lg font-semibold"
          )
        }
      >
        <p>Home</p>
      </NavLink>
       {/* অন্যান্য নেভিগেশন লিঙ্কগুলিও একইভাবে তৈরি করা হয়েছে */}
      <NavLink
        to="/listed_books"
        className={({ isActive, isPending }) =>
          isActive ? (
            "py-2 px-5 text-green-400 rounded-lg border-2 border-green-400 text-lg font-semibold"
          ) : isPending ? (
            <></>
          ) : (
            "py-2 px-5 rounded-lg border-2 border-white text-lg font-semibold"
          )
        }
      >
        <p>Books Details</p>
      </NavLink>
      <NavLink
        to="/pages_to_read"
        className={({ isActive, isPending }) =>
          isActive ? (
            "py-2 px-5 text-green-400 rounded-lg border-2 border-green-400 text-lg font-semibold"
          ) : isPending ? (
            <></>
          ) : (
            "py-2 px-5 rounded-lg border-2 border-white text-lg font-semibold"
          )
        }
      >
        <p> Read page figure</p>
      </NavLink>
    

      <NavLink
        to="/bio"
        className={({ isActive, isPending }) =>
          isActive ? (
            "py-2 px-5 text-green-400 rounded-lg border-2 border-green-400 text-lg font-semibold"
          ) : isPending ? (
            <></>
          ) : (
            "py-2 px-5 rounded-lg border-2 border-white text-lg font-semibold"
          )
        }
      >
        <p>Bio</p>
      </NavLink>
      <NavLink
        to="/contact"
        className={({ isActive, isPending }) =>
          isActive ? (
            "py-2 px-5 text-green-400 rounded-lg border-2 border-green-400 text-lg font-semibold"
          ) : isPending ? (
            <></>
          ) : (
            "py-2 px-5 rounded-lg border-2 border-white text-lg font-semibold"
          )
        }
      >
        <p>Contact</p>
      </NavLink>
    </>
  );
  const loggedBtn = (   // লগ ইন অবস্থায় যে UI উপাদানগুলো দেখানো হবে তা এখানে তৈরি করা হচ্ছে
    <>
      <label className="swap swap-rotate">  
        {/* থিম সুইচ করার জন্য লেবেল */}
        <input
          onChange={handleTheme}  // থিম পরিবর্তনের জন্য ইনপুটের পরিবর্তন ইভেন্ট হ্যান্ডলার
          type="checkbox"
          className="theme-controller"
        />

        <svg  // থিম সুইচিং আইকন (চাঁদের আকার এবং সূর্যের আকার)
          className="swap-off fill-current w-10 h-10"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
        </svg>

        <svg
          className="swap-on fill-current w-10 h-10"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
        </svg>
      </label>
{/* যদি ইউজার লগ আউট থাকে, তাহলে সাইন ইন এবং সাইন আপ লিঙ্ক দেখানো হবে */}
      {!user && (
        <>
          <NavLink
            to="/sign_in"
            className={({ isActive, isPending }) =>   // সাইন ইন লিঙ্কের জন্য ক্লাস কনফিগার করা হচ্ছে
              isActive ? (
                "btn bg-white border-2 border-green-400"
              ) : isPending ? (
                <></>
              ) : (
                "btn bg-green-400 text-white border-2 border-green-400"
              )
            }
          >
            Sign In
          </NavLink>
          <NavLink
            to="/sign_up"
            className={({ isActive, isPending }) =>   // সাইন আপ লিঙ্কের জন্য ক্লাস কনফিগার করা হচ্ছে
              isActive ? (
                "hidden md:flex btn bg-white border-2 border-green-400"
              ) : isPending ? (
                <></>
              ) : (
                "hidden md:flex btn bg-blue-500 text-white border-2 border-blue-500"
              )
            }
          >
            Sign Up
          </NavLink>
        </>
      )}
{/* যদি ইউজার লগ ইন থাকে, তাহলে ইউজারের প্রোফাইল ও লগ আউট অপশন দেখানো হবে */}
      {user && (
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="m-1">
            <img
              alt=""
              className="w-12 h-12 rounded-full ring-2 ring-offset-4 dark:bg-gray-500 dark:ring-violet-600 dark:ring-offset-gray-100"
              src={user.photoURL}  // ইউজারের প্রোফাইল ছব
            />
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>{user.displayName || "Unknown"}</a>   {/* ইউজারের নাম */}
            </li>
            <li>
              <a>Setting</a>  {/* সেটিং লিঙ্ক */}
            </li>
            <li>
              <a onClick={handleSignOut}>Logout</a>   {/* লগ আউট অপশন */}
            </li>
          </ul>
        </div>
      )}
    </>
  );
  return (  // Navbar কম্পোনেন্টের রিটার্ন অংশ
    <div className="navbar bg-base-100 shadow-md fixed z-20">  {/* Navbar এর মূল কন্টেইনার */}
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg  // মোবাইল ডিভাইসের জন্য হ্যামবার্গার মেনু আইকন
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 gap-4"
          >
            {navLink}  {/* মোবাইল ডিভাইসের জন্য নেভিগেশন লিঙ্ক */}
          </ul>
        </div>
        <NavLink to="/" className="btn btn-ghost text-2xl font-bold gap-0">
          Library<span className="text-green-400">Hub</span>  {/* Navbar এর ব্র্যান্ড নাম */}
        </NavLink>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-4">{navLink}</ul> {/* ডেস্কটপের জন্য নেভিগেশন লিঙ্ক */}
      </div>
      <div className="navbar-end gap-2">{loggedBtn}</div>  {/* লগ ইন বা লগ আউট বোতাম */}
    </div>
  );
};

export default Navbar; // Navbar কম্পোনেন্ট এক্সপোর্ট করা হচ্ছে



// এই কোডে কোনো জটিল অ্যালগোরিদম ব্যবহার করা হয়নি। এখানে মূলত:

// থিম সুইচিং: থিম পরিবর্তন করার জন্য handleTheme ফাংশন ব্যবহার হয়েছে।
// React Context: ইউজারের তথ্য পাওয়ার জন্য useContext হুক ব্যবহার হয়েছে।
// নেভিগেশন: NavLink এর মাধ্যমে বিভিন্ন পেজে নেভিগেশন করা হচ্ছে এবং অ্যাকটিভ লিঙ্কের জন্য স্টাইল পরিবর্তন করা হচ্ছে।
// এগুলো স্টেট ম্যানেজমেন্ট এবং UI কন্ট্রোল লজিক।



