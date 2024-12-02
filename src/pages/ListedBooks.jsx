import { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ListedBook from "../components/ListedBook/ListedBook";
import useLoadData from "../Hooks/useLoadData";
import { getRead, getWishlist } from "../utils/localStorage";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Spinner from "../components/Spinner/Spinner";

const ListedBooks = () => {
  const { data , loaderSpinner} = useLoadData();
  const [sortBy, setSortBy] = useState("");
  const [tabIndex, setTabIndex] = useState(0);
  const [readList, setReadList] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    const localReadItems = getRead();
    const localWishItems = getWishlist();

    if (data.length > 0) {
      const readItems = [];
      const wishItems = [];
      for (const id of localReadItems) {
        const book = data.find((boo) => boo.bookId === id);
        if (book) {
          readItems.push(book);
        }
      }
      for (const id of localWishItems) {
        const book = data.find((boo) => boo.bookId === id);
        if (book) {
          wishItems.push(book);
        }
      }
      setReadList([...readItems]);
      setWishlist([...wishItems]);
    }
  }, [data]);

  useEffect(() => {
    const handleSortItem = () => {
      const sortedRead = [...readList].sort((a, b) => b[sortBy] - a[sortBy]);
      const sortedWish = [...wishlist].sort((a, b) => b[sortBy] - a[sortBy]);
      setReadList(sortedRead);
      setWishlist(sortedWish);
    };
    handleSortItem();
  }, [sortBy]);

  const handleSort = (e) => {
    setSortBy(e.target.value);
  };


  if (loaderSpinner) {
    return <Spinner></Spinner>
  }
  return (
    <div>
      <div className="bg-green-50 rounded-2xl py-8">
        <h3 className="text-2xl font-bold text-center">Books</h3>
      </div>
      <div className="my-4 flex justify-center items-center">
        <select
          onChange={(e) => handleSort(e)}
          className="bg-green-400 py-4 px-5 rounded-lg text-white text-lg font-semibold"
        >
          <option value="" className="bg-white text-black">
            Find By
          </option>
          <option value="name" className="bg-white text-black">
            Book Name
          </option>
          <option value="author" className="bg-white text-black">
            Author
          </option>
          <option value="yearOfPublishing" className="bg-white text-black">
            Publisher year
          </option>
          <option value="Rating" className="bg-white text-black">
            Rating
          </option>
        </select>
      </div>
      <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList>
          <Tab>Read Books</Tab>
          <Tab>Borrow Books</Tab>
          <Tab>Issue Books</Tab>
        </TabList>
        <TabPanel>
          <div className="flex flex-col gap-3">
            {readList.length < 1 ? (
              <ErrorPage mgs="You have not selected any books!"/>
            ) : (
              readList.map((book) => (
                <ListedBook key={book.bookId} book={book} />
              ))
            )}
          </div>
        </TabPanel>

        <TabPanel>
          <div className="flex flex-col gap-3">
            {wishlist.length<1 ? <ErrorPage mgs="You have not selected any borrow Book!"/> : wishlist.map((book) => (
              <ListedBook key={book.bookId} book={book} />
            ))}
          </div>
        </TabPanel>
        {/* <TabPanel>
          <div className="flex flex-col gap-3">
            {wishlist.length<1 ? <ErrorPage mgs="You have not selected any Issue Book!"/> : wishlist.map((book) => (
              <ListedBook key={book.bookId} book={book} />
            ))}
          </div>
        </TabPanel> */}
        <TabPanel>
          <div className="flex flex-col gap-3">
            {readList.length < 1 ? (
              <ErrorPage mgs="You have not selected any Issue Book!"/>
            ) : (
              readList.map((book) => (
                <ListedBook key={book.bookId} book={book} />
              ))
            )}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ListedBooks;
