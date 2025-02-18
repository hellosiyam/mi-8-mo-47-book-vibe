import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredReadList, getStoredWishlist } from '../../utility/addToDo';
import ReadBook from '../ReadBook/ReadBook';
import WishBooks from '../WishBooks/WishBooks';

const ListedBooks = () => {
    const [readList, setReadList] = useState([])
    const [wishList, setWishList] = useState([])
    const allBooks = useLoaderData();
    console.log(wishList);
    
    useEffect(() => {
        const storedReadList = getStoredReadList()
        const storedReadListInt = storedReadList.map(id => parseInt(id))
        const readBookList = allBooks.filter(book => storedReadListInt.includes(book.bookId));
        setReadList(readBookList);

        const storedWishList = getStoredWishlist()
        const storedWishListInt = storedWishList.map(id => parseInt(id))
        const wishBooksList = allBooks.filter(book => storedWishListInt.includes(book.bookId))
        setWishList(wishBooksList)
    }, []);

    

    return (
        <div className='my-5 lg:my-10'>
            <Tabs>
                <TabList>
                    <Tab>Read Books</Tab>
                    <Tab>Wishlist Books</Tab>
                </TabList>

                <TabPanel>
                    <h2 className='text-2xl'>Books I Read: {readList.length}</h2>
                    <div className='flex flex-col gap-6'>
                        {
                            readList.map((read, idx) => <ReadBook key={idx} read={read}></ReadBook>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                <h2 className='text-2xl'>Wish Books List: {wishList.length}</h2>
                    <div className='flex flex-col gap-6'>
                        {
                            wishList.map((wish, idx) => <WishBooks key={idx} wish={wish}></WishBooks>)
                        }
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ListedBooks;