


// Firebase SDK থেকে যে ফাংশনটি প্রয়োজন, সেটি ইম্পোর্ট করা হচ্ছে
import { initializeApp } from "firebase/app";

// TODO: যদি আপনি Firebase এর অন্যান্য সার্ভিস (যেমন: Authentication, Firestore, Storage) ব্যবহার করতে চান,
// তাহলে তাদের SDK এখানে যোগ করতে হবে। Firebase ওয়েব ডকুমেন্টেশনে দেওয়া বিস্তারিত নির্দেশনা অনুসরণ করুন
// https://firebase.google.com/docs/web/setup#available-libraries

// আপনার ওয়েব অ্যাপ্লিকেশনের জন্য Firebase কনফিগারেশন তথ্য
const firebaseConfig = {
  apiKey: "AIzaSyCCnCHV4qQ0WMF3s62oCFln-0Rhw3xR80A", // আপনার Firebase অ্যাপের API কী
  authDomain: "Library-Hub.firebaseapp.com", // Firebase অ্যাপের authentication domain
  projectId: "Library-Hub", // Firebase প্রোজেক্ট আইডি
  storageBucket: "Library-Hub.appspot.com", // Firebase স্টোরেজ বালতি (bucket) এর নাম
  messagingSenderId: "196024147602", // Firebase ক্লাউড মেসেজিংয়ের sender ID
  appId: "1:196024147602:web:1ccbf995a0d7617230d04b" // Firebase অ্যাপ্লিকেশনের appId
};

// Firebase অ্যাপটি ইনিশিয়ালাইজ করা হচ্ছে, যাতে এটি আপনার React অ্যাপ্লিকেশনের সাথে কাজ করতে পারে
const app = initializeApp(firebaseConfig);

// Firebase অ্যাপের ইনস্ট্যান্সটি অন্য কোনো ফাইলে ব্যবহার করার জন্য এক্সপোর্ট করা হচ্ছে
export default app;




// Firebase ইনিশিয়ালাইজেশন:

// initializeApp(firebaseConfig) একটি ফাংশন যা Firebase অ্যাপ ইনিশিয়ালাইজ করার জন্য ব্যবহার করা হয়। এটি একটি পরিবেশগত কনফিগারেশন ফাংশন, যা Firebase এর সাথে অ্যাপ্লিকেশনের সংযোগ স্থাপন করে।
// কনফিগারেশন অবজেক্ট:

// এখানে Firebase এর কনফিগারেশন যেমন API কী, authDomain, projectId, ইত্যাদি ডিক্লেয়ার করা হয়েছে। তবে, এটি কোনো এলগরিদম নয়, বরং কনফিগারেশন ডাটা যা Firebase অ্যাপকে কাজ করার জন্য প্রয়োজনীয় তথ্য প্রদান করে।
// এটি একটি কনফিগারেশন সেটআপ কোড, তাই এখানে কোনো লজিক্যাল এলগরিদম ব্যবহৃত হয়নি।