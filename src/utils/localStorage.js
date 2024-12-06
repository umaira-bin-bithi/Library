// React-toastify থেকে 'toast' ফাংশন ইমপোর্ট করা হচ্ছে, যা সফলতা বা ত্রুটি বার্তা দেখাতে ব্যবহৃত হবে।
import { toast } from "react-toastify";

// "read" তালিকা পাওয়ার জন্য ফাংশন
export const getRead = () => {
  // localStorage থেকে "read" কীগুলির মান সংগ্রহ করা হচ্ছে।
  const readData = localStorage.getItem("read"); 
  // যদি "read" তথ্য পাওয়া যায়, তবে তা JSON ফরম্যাট থেকে অবজেক্টে রূপান্তরিত করা হচ্ছে।
  if (readData) {
    return JSON.parse(readData); 
  }
  // যদি "read" তথ্য না পাওয়া যায়, তবে একটি খালি অ্যারে ফেরত দেওয়া হচ্ছে।
  return [];
};

// "wishlist" তালিকা পাওয়ার জন্য ফাংশন
export const getWishlist = () => {
  // localStorage থেকে "wishlist" কীগুলির মান সংগ্রহ করা হচ্ছে।
  const wishlistData = localStorage.getItem("wishlist"); 
  // যদি "wishlist" তথ্য পাওয়া যায়, তবে তা JSON থেকে অবজেক্টে রূপান্তরিত করে ফেরত দেওয়া হচ্ছে।
  if (wishlistData) {
    return JSON.parse(wishlistData); 
  }
  // যদি "wishlist" তথ্য না পাওয়া যায়, তবে একটি খালি অ্যারে ফেরত দেওয়া হচ্ছে।
  return []; 
};

// "returnlist" তালিকা পাওয়ার জন্য ফাংশন
export const getReturnlist = () => {
  // localStorage থেকে "returnlist" কীগুলির মান পাওয়া হচ্ছে।
  const returnlistData = localStorage.getItem("returnlist"); 
  // যদি "returnlist" তথ্য পাওয়া যায়, তবে তা JSON থেকে অবজেক্টে রূপান্তরিত হয়ে ফেরত দেওয়া হচ্ছে।
  if (returnlistData) {
    return JSON.parse(returnlistData); 
  }
  // যদি "returnlist" তথ্য না পাওয়া যায় তবে একটি খালি অ্যারে ফেরত দেওয়া হচ্ছে।
  return []; 
};

// "read" তালিকায় একটি বই যোগ করার জন্য ফাংশন
export const setRead = (id) => {
  // পূর্বে পড়া বইয়ের ডেটা 'getRead' ফাংশন থেকে নেওয়া হচ্ছে।
  const readOldData = getRead(); 
  // চেক করা হচ্ছে যে বইটি আগে পড়া হয়েছে কিনা।
  const exists = readOldData.find((item) => item == id); 
  if (!exists) {
    // যদি বইটি আগে পড়া না হয়ে থাকে, তবে সেটি 'readOldData' অ্যারেতে যোগ করা হচ্ছে।
    readOldData.push(id); 
    // আপডেট করা 'read' তথ্য 'localStorage' এ সেভ করা হচ্ছে।
    localStorage.setItem("read", JSON.stringify(readOldData)); 
    // সফলতার বার্তা হিসেবে টোস্ট (notification) দেখানো হচ্ছে।
    toast.success("Book added to read list"); 
  } else {
    // যদি বইটি পূর্বে পড়া হয়ে থাকে, তাহলে ত্রুটি বার্তা দেখানো হচ্ছে।
    toast.error("You have already read this book"); 
  }
};

// "wishlist" তালিকায় একটি বই যোগ করার জন্য ফাংশন
export const setWishlist = (id) => {
  // 'read' এবং 'wishlist' ডেটা নেওয়া হচ্ছে।
  const readOldData = getRead(); 
  const wishlistOldData = getWishlist(); 
  // চেক করা হচ্ছে বইটি 'read' তালিকায় আছে কিনা।
  const existsRead = readOldData.find((item) => item == id); 
  // চেক করা হচ্ছে বইটি 'wishlist' এ আছে কিনা।
  const existsWishlist = wishlistOldData.find((item) => item == id); 
  if (!existsRead && !existsWishlist) {
    // যদি বইটি পড়া না হয়ে থাকে এবং 'wishlist' এ না থাকে, তবে এটি 'wishlist' এ যোগ করা হচ্ছে।
    wishlistOldData.push(id); 
    // আপডেট করা 'wishlist' 'localStorage' এ সেভ করা হচ্ছে।
    localStorage.setItem("BorrowList", JSON.stringify(wishlistOldData)); 
    // সফলতার বার্তা হিসেবে টোস্ট দেখানো হচ্ছে।
    toast.success("Book added to Borrow Book"); 
  } else {
    // যদি বইটি 'wishlist' বা 'read' এ আগে থেকে থাকে, তবে ত্রুটি বার্তা দেখানো হচ্ছে।
    toast.error("You have already added this book to the Borrow Book"); 
  }
};

// "returnlist" তালিকায় একটি বই যোগ করার জন্য ফাংশন
export const setReturnlist = (id) => {
  // 'wishlist' এবং 'returnlist' ডেটা নেওয়া হচ্ছে।
  const wishlistOldData = getWishlist(); 
  const returnlistOldData = getReturnlist(); 
  // চেক করা হচ্ছে বইটি 'wishlist' এ আছে কিনা।
  const existsWishlist = wishlistOldData.find((item) => item == id); 
  // চেক করা হচ্ছে বইটি 'returnlist' এ আছে কিনা।
  const existsReturnlist = returnlistOldData.find((item) => item == id); 
  
  if (existsWishlist && !existsReturnlist) {
    // যদি বইটি 'wishlist' এ থাকে কিন্তু 'returnlist' এ না থাকে
    // 'wishlist' থেকে বইটি সরানো হচ্ছে।
    const updatedWishlist = wishlistOldData.filter((item) => item != id); 
    // আপডেট করা 'wishlist' 'localStorage' এ সেভ করা হচ্ছে।
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist)); 
    
    // বইটি 'returnlist' এ যোগ করা হচ্ছে।
    returnlistOldData.push(id); 
    // আপডেট করা 'returnlist' 'localStorage' এ সেভ করা হচ্ছে।
    localStorage.setItem("returnlist", JSON.stringify(returnlistOldData)); 
    
    // সফলতার বার্তা হিসেবে টোস্ট দেখানো হচ্ছে।
    toast.success("Book Issue successfully"); 
  } else if (!existsWishlist) {
    // যদি বইটি 'wishlist' এ না থাকে, তবে ত্রুটি বার্তা দেখানো হচ্ছে।
    toast.error("This book is not in your wishlist"); 
  } else {
    // যদি বইটি ইতিমধ্যে 'returnlist' এ থাকে, তবে ত্রুটি বার্তা দেখানো হচ্ছে।
    toast.error("This book is already in the return list"); 
  }
};

// থিম পড়া (get) করার জন্য ফাংশন
export const getThemes = () => {
  // localStorage থেকে "theme" কীগুলির মান পাওয়া যাচ্ছে।
  const readTheme = localStorage.getItem("theme"); 
  if (readTheme) {
    // যদি থিম ডেটা পাওয়া যায়, তবে তা ফেরত দেওয়া হচ্ছে।
    return readTheme; 
  }
  // যদি থিম ডেটা না পাওয়া যায়, তবে খালি স্ট্রিং ফেরত দেওয়া হচ্ছে।
  return ""; 
};

// থিম সেট (set) করার জন্য ফাংশন
export const setThemes = (theme) => {
  // 'theme' ডেটা 'localStorage' এ সেভ করা হচ্ছে।
  localStorage.setItem("theme", theme); 
};




// এই কোডে লিনিয়ার সার্চ (অর্থাৎ find() মেথড) এবং ফিল্টারিং (অর্থাৎ filter() মেথড) ব্যবহার করা হয়েছে:

// লিনিয়ার সার্চ: find() মেথড ব্যবহার করে বইয়ের আইডি খুঁজে বের করা হয়, যা একে একে প্রতিটি আইটেম চেক করে।
// ফিল্টারিং: filter() মেথড ব্যবহার করে তালিকা থেকে নির্দিষ্ট আইটেম (যেমন, বই) বাদ দেওয়া হয়।
// এছাড়া, localStorage-এ ডেটা সংরক্ষণের জন্য setItem() এবং JSON.stringify() ব্যবহার করা হচ্ছে।