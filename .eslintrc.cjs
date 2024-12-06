


// মডিউল এক্সপোর্ট করে এই কনফিগারেশনটি সবার জন্য উপলব্ধ করা হচ্ছে
module.exports = {
  // root প্রপার্টি সেট করা হচ্ছে true, এর মানে এই ফাইলটি হলো ESLint কনফিগারেশনের মূল ফাইল
  root: true,
  
  // এখানে env প্রপার্টি দিয়ে কোড চলবে এমন পরিবেশ নির্ধারণ করা হচ্ছে
  env: { 
    // ব্রাউজার পরিবেশের জন্য কোড রান করার অনুমতি দিচ্ছে
    browser: true, 
    
    // ES2020 এর বৈশিষ্ট্য ব্যবহারের অনুমতি দিচ্ছে
    es2020: true,
    
    // Node.js পরিবেশে কোড রান করার অনুমতি দিচ্ছে
    node: true,
  },
  
  // বিভিন্ন স্ট্যান্ডার্ড কনফিগারেশন সেট করা হচ্ছে যেগুলো কোড চেকিংয়ের জন্য ব্যবহৃত হবে
  extends: [
    // ESLint এর রেকমেন্ডেড সেটিংস ইনক্লুড করা হচ্ছে
    'eslint:recommended',
    
    // React কোডে রেকমেন্ডেড ESLint রুলস ইনক্লুড করা হচ্ছে
    'plugin:react/recommended',
    
    // JSX রেন্ডারিং সম্পর্কিত React এর রুলস ইনক্লুড করা হচ্ছে
    'plugin:react/jsx-runtime',
    
    // React Hooks সম্পর্কিত ESLint রুলস ইনক্লুড করা হচ্ছে
    'plugin:react-hooks/recommended',
  ],
  
  // কিছু ফাইল ও ডিরেক্টরি, যেমন dist এবং .eslintrc.cjs, চেকিং থেকে বাদ দেওয়ার জন্য ignorePatterns সেট করা হচ্ছে
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  
  // প্যার্সার অপশনস সেট করা হচ্ছে: ECMA স্ক্রিপ্টের সর্বশেষ ভার্সন এবং মডিউল টাইপ ব্যবহার করা হবে
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  
  // React এর জন্য কনফিগারেশন সেট করা হচ্ছে, এর ভার্সন 18.2 হবে
  settings: { react: { version: '18.2' } },
  
  // React-refresh প্লাগইন ইনক্লুড করা হচ্ছে (যেটি React হট রিলোডিংয়ের জন্য ব্যবহৃত হয়)
  plugins: ['react-refresh'],
  
  // কাস্টম রুলস এখানে সেট করা হচ্ছে
  rules: {
    // 'jsx-no-target-blank' রুলটি বন্ধ করা হচ্ছে (যার মানে হচ্ছে <a> ট্যাগের target="_blank" বৈশিষ্ট্য ব্যবহার করতে অনুমতি দেওয়া হবে)
    'react/jsx-no-target-blank': 'off',
    
    // 'react-refresh/only-export-components' রুলটি সতর্কতার সঙ্গে চালু করা হচ্ছে, constant export করার অনুমতি দেওয়া হচ্ছে
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
}


// এই কোডে কোনো অ্যালগরিদম ব্যবহৃত হয়নি। এটি একটি ESLint কনফিগারেশন ফাইল,
//  যা কোডের গুণগত মান এবং সেরা প্র্যাকটিস অনুসরণ করার জন্য ব্যবহৃত হয়। এটি কোডের ভুল শনাক্ত করে এবং স্টাইল চেক করে,
//  যেমন React কোডে সঠিক রুলস প্রয়োগ করা এবং কোডের সমস্যা শনাক্ত করা।