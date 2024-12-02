import { toast } from "react-toastify";

export const getRead = () => {
  const readData = localStorage.getItem("read");
  if (readData) {
    return JSON.parse(readData);
  }
  return [];
};

export const getWishlist = () => {
  const wishlistData = localStorage.getItem("wishlist");
  if (wishlistData) {
    return JSON.parse(wishlistData);
  }
  return [];
};

export const getReturnlist = () => {
  const returnlistData = localStorage.getItem("returnlist"); // Corrected variable name
  if (returnlistData) {
    return JSON.parse(returnlistData);
  }
  return [];
};

export const setRead = (id) => {
  const readOldData = getRead();
  const exists = readOldData.find((item) => item == id);
  if (!exists) {
    readOldData.push(id);
    localStorage.setItem("read", JSON.stringify(readOldData));
    toast.success("Book added to read list");
  } else {
    toast.error("You have already read this book");
  }
};

export const setWishlist = (id) => {
  const readOldData = getRead();
  const wishlistOldData = getWishlist();
  const existsRead = readOldData.find((item) => item == id);
  const existsWishlist = wishlistOldData.find((item) => item == id);
  if (!existsRead && !existsWishlist) {
    wishlistOldData.push(id);
    localStorage.setItem("wishlist", JSON.stringify(wishlistOldData));
    toast.success("Book added to wishlist");
  } else {
    toast.error("You have already added this book to the wishlist");
  }
};

export const setReturnlist = (id) => {
  const wishlistOldData = getWishlist();
  const returnlistOldData = getReturnlist();
  const existsWishlist = wishlistOldData.find((item) => item == id);
  const existsReturnlist = returnlistOldData.find((item) => item == id);
  
  if (existsWishlist && !existsReturnlist) {
    // Remove the book from wishlist
    const updatedWishlist = wishlistOldData.filter((item) => item != id);
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
    
    // Add the book to returnlist
    returnlistOldData.push(id);
    localStorage.setItem("returnlist", JSON.stringify(returnlistOldData));
    
    toast.success("Book returned successfully");
  } else if (!existsWishlist) {
    toast.error("This book is not in your wishlist");
  } else {
    toast.error("This book is already in the return list");
  }
};

export const getThemes = () => {
  const readTheme = localStorage.getItem("theme");
  if (readTheme) {
    return readTheme;
  }
  return "";
};

export const setThemes = (theme) => {
  localStorage.setItem("theme", theme);
};
