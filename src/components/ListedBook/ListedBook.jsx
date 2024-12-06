
   




import { CiLocationOn } from "react-icons/ci";  // অবস্থান সম্পর্কিত আইকন আমদানি করা হয়েছে
import { FaUserShield } from "react-icons/fa";  // প্রকাশক সম্পর্কিত আইকন আমদানি করা হয়েছে
import { LuBookOpenCheck } from "react-icons/lu";  // বই সম্পর্কিত আইকন আমদানি করা হয়েছে
import PropTypes from "prop-types";  // প্রোপ টাইপস ব্যবহারের জন্য
import { NavLink } from "react-router-dom";  // রাউটিং এর জন্য 'NavLink' আমদানি করা হয়েছে

// ListedBook কম্পোনেন্ট
const ListedBook = ({ book }) => {
  const {
    bookId,  // বইয়ের আইডি
    image,  // বইয়ের ছবি
    tags,  // বইয়ের ট্যাগ
    bookName,  // বইয়ের নাম
    author,  // বইয়ের লেখক
    category,  // বইয়ের ক্যাটাগরি
    rating,  // বইয়ের রেটিং
    totalPages,  // বইয়ের মোট পাতা
    publisher,  // বইয়ের প্রকাশক
    yearOfPublishing,  // বইয়ের প্রকাশনার বছর
  } = book;  // props থেকে বইয়ের সমস্ত তথ্য ডেস্ট্রাকচার করা হচ্ছে

  return (
    <div className="flex flex-col md:flex-row gap-6 border-2 p-5 rounded-2xl">
      {/* বইয়ের কন্টেন্টের জন্য একটি flexbox কনটেইনার */}
      <figure className="md:max-w-[230px] md:max-h-[230px] bg-green-50 px-10 py-6 rounded-2xl">
        {/* বইয়ের ইমেজ দেখানোর জন্য একটি figure এলিমেন্ট */}
        <img src={image} alt="" className="h-full w-full" />  {/* বইয়ের ছবি এখানে দেখানো হচ্ছে */}
      </figure>
      <div className="flex-auto">
        {/* বইয়ের বিস্তারিত তথ্যের জন্য একটি flex কন্টেইনার */}
        <h1 className="text-2xl font-bold playfair mb-4">{bookName}</h1>
        {/* বইয়ের নাম বড় আকারে দেখানো হচ্ছে */}
        <p className="text-base font-medium text-slate-500 mb-4">
          By : {author}
        </p>
        {/* বইয়ের লেখক নাম দেখানো হচ্ছে */}

        <div className="flex flex-col md:flex-row md:items-center gap-6 mb-4">
          <div className="flex items-center gap-4">
            <p className="text-base font-bold">Tag</p>
            {tags.map((tag) => (
              <p
                key={tag}
                className="bg-green-50 rounded-2xl py-1 px-3 text-green-400 text-base font-bold"
              >
                #{tag}
              </p>
            ))}
            {/* বইয়ের ট্যাগগুলো দেখানো হচ্ছে, ট্যাগগুলিকে একে একে প্রদর্শন করা হচ্ছে */}
          </div>
          <p className="flex items-center gap-1">
            <CiLocationOn /> Year of Publishing: {yearOfPublishing}
          </p>
          {/* বইয়ের প্রকাশনার বছর এবং অবস্থান আইকন দেখানো হচ্ছে */}
        </div>

        <div className="flex items-center gap-6 mb-4">
          <p className="flex items-center gap-1">
            <FaUserShield /> Publisher: {publisher}
          </p>
          {/* বইয়ের প্রকাশক এবং তার আইকন দেখানো হচ্ছে */}
          <p className="flex items-center gap-1">
            <LuBookOpenCheck /> Page {totalPages}
          </p>
          {/* বইয়ের মোট পাতা এবং আইকন দেখানো হচ্ছে */}
        </div>
        <hr />
        {/* একটি অনুভূমিক রেখা */}
        <div className="mt-4 flex gap-2 flex-wrap">
          <a className="px-5 py-2.5 font-medium bg-blue-50 hover:bg-blue-100 hover:text-blue-600 text-blue-500 rounded-lg text-sm cursor-pointer">
            Category: {category}
          </a>
          {/* বইয়ের ক্যাটাগরি একটি ট্যাগ আকারে দেখানো হচ্ছে */}
          <a className="px-5 py-2.5 font-medium bg-red-50 hover:bg-red-100 hover:text-red-600 text-red-500 rounded-lg text-sm cursor-pointer">
            Rating: {rating}
          </a>
          {/* বইয়ের রেটিং একটি ট্যাগ আকারে দেখানো হচ্ছে */}
          <NavLink
            to={`/book_details/${bookId}`}
            className="px-5 py-2.5 font-medium bg-green-50 hover:bg-blue-100 hover:text-green-600 text-green-500 rounded-lg text-sm cursor-pointer"
          >
            View Details
          </NavLink>
          {/* বইয়ের বিস্তারিত দেখতে একটি লিঙ্ক */}
        </div>
      </div>
    </div>
  );
};

// প্রোপ টাইপস চেক
ListedBook.propTypes = {
  book: PropTypes.object.isRequired,  // বই সম্পর্কিত ডেটার জন্য প্রোপ টাইপ চেক করা হচ্ছে
};

// কম্পোনেন্ট এক্সপোর্ট করা হচ্ছে
export default ListedBook;



// এই কোডে কোনো জটিল অ্যালগরিদম ব্যবহার করা হয়নি। এটি React UI কম্পোনেন্ট যা বইয়ের তথ্য ডাইনামিক্যালি রেন্ডার করে। 
// tags.map() একটি সাধারণ ইটেরেটিভ প্রক্রিয়া ব্যবহার করেছে, তবে এটি কোনো জটিল অ্যালগরিদম নয়।





