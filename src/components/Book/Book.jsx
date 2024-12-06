



import { NavLink } from "react-router-dom"; // React Router থেকে NavLink কম্পোনেন্ট ইমপোর্ট করা হচ্ছে, যা নেভিগেশনের জন্য ব্যবহৃত হয়।
import { IoMdStarOutline } from "react-icons/io"; // React Icons থেকে IoMdStarOutline আইকনটি ইমপোর্ট করা হচ্ছে, যা বইয়ের রেটিং দেখানোর জন্য ব্যবহৃত হবে।
import PropTypes from "prop-types"; // PropTypes ব্যবহার করে কম্পোনেন্টে প্রপার্টি validation করা হচ্ছে।

// Book কম্পোনেন্ট তৈরির শুরু
const Book = ({ book }) => {
  // `book` নামক প্রপস থেকে প্রয়োজনীয় তথ্য ডিকনস্ট্রাক্ট করা হচ্ছে।
  const { bookId, image, tags, bookName, author, category, rating } = book;

  return (
    <NavLink
      to={`/book_details/${bookId}`} // বইয়ের বিস্তারিত পেজে নেভিগেট করতে `NavLink` ব্যবহার হচ্ছে। URL-এ বইয়ের ID যুক্ত করা হচ্ছে।
      className="flex flex-col p-6 space-y-6 overflow-hidden rounded-lg shadow-md dark:bg-gray-50 dark:text-gray-800" // Tailwind CSS দিয়ে স্টাইল দেওয়া হচ্ছে।
    >
      <div>
        <figure className="flex flex-col justify-center items-center py-4 bg-green-50 rounded-2xl"> 
          {/* বইয়ের ছবি প্রদর্শনের জন্য figure ব্যবহার করা হয়েছে। */}
          <img
            src={image} // বইয়ের ছবি `image` প্রপার্টি থেকে নেওয়া হচ্ছে।
            alt={bookName} // বইয়ের নাম ব্যবহার করে alt টেক্সট দেওয়া হচ্ছে।
            className="max-w-[134px] max-h-[166px] mb-4 h-60 sm:h-96 dark:bg-gray-500" // Tailwind CSS দিয়ে ইমেজের সাইজ এবং স্টাইল দেওয়া হচ্ছে।
          />
        </figure>
        <p className="flex gap-4 my-4">
          {tags.map((tag, idx) => ( // `tags` অ্যারে থেকে প্রতিটি ট্যাগ ম্যাপ করে প্রদর্শন করা হচ্ছে।
            <span
              key={idx} // `key` প্রপস ব্যবহার করা হচ্ছে প্রতিটি ট্যাগের জন্য অনন্য আইডেন্টিফায়ার হিসেবে।
              className="bg-green-50 rounded-2xl py-1 px-3 text-green-400 text-base font-bold"
            >
              {tag} 
              {/* ট্যাগের নাম এখানে প্রদর্শিত হবে। */}
            </span>
          ))}
        </p>
        <h2 className="mb-1 text-xl font-semibold playfair my-3 h-[30px] overflow-auto scrollBar">{bookName}</h2> 
        {/* বইয়ের নাম এখানে প্রদর্শিত হচ্ছে। */}
        <p className="text-sm dark:text-gray-600">By : {author}</p> 
        {/* লেখক (author) নাম এখানে প্রদর্শিত হচ্ছে। */}
      </div>
      <hr />  {/* একটি অনুভূমিক রেখা যোগ করা হচ্ছে UI'তে বিভাজক হিসেবে */}
      <div className="flex flex-wrap justify-between">
        <button
          aria-label="Share this post" // Share বাটনের জন্য অ্যাক্সেসিবিলিটি লেবেল দেওয়া হচ্ছে।
          type="button"
          className="p-2 text-center"
        >
          {category} 
           {/* বইয়ের ক্যাটাগরি এখানে দেখানো হচ্ছে। */}
        </button>
        <button type="button" className="flex items-center p-1 space-x-1.5">
          {rating} <IoMdStarOutline className="text-xl" /> 
         {/* রেটিং এবং একটি স্টার আইকন এখানে প্রদর্শিত হচ্ছে। */}
        </button>
      </div>
    </NavLink>
  );
};

// PropTypes দিয়ে `book` প্রপসের জন্য validation করা হচ্ছে।
Book.propTypes = {
  book: PropTypes.object.isRequired, // `book` প্রপস একটি অবজেক্ট হতে হবে এবং এটি প্রয়োজনীয়।
};

// কম্পোনেন্টটি এক্সপোর্ট করা হচ্ছে যাতে এটি অন্য জায়গায় ব্যবহার করা যেতে পারে।
export default Book;



// এই কোডে কোনো বিশেষ অ্যালগরিদম ব্যবহার করা হয়নি। এটি একটি React কম্পোনেন্ট যা বইয়ের তথ্য প্রদর্শন করে এবং নেভিগেট করতে সাহায্য করে। 
// এখানে ডেটা শুধু UI তে রেন্ডার করা হয় এবং নেভিগেশন এর জন্য NavLink ব্যবহার করা হয়েছে।
