import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredReadList } from '../../utility/addToDo';
import ReadBook from '../ReadBook/ReadBook';

const ListedBooks = () => {
    const [readList, setReadList] = useState([])
    const allBooks = useLoaderData();

    useEffect(() => {
        const storedReadList = getStoredReadList()
        const storedReadListInt = storedReadList.map(id => parseInt(id))
        console.log(allBooks, storedReadListInt, storedReadList);

        const readBookList = allBooks.filter(book => storedReadListInt.includes(book.bookId));
        setReadList(readBookList);

    }, [])

    return (
        <div>
            <h1 className='mb-5'>ListedBooks</h1>
            <Tabs>
                <TabList>
                    <Tab>Read Books</Tab>
                    <Tab>Wishlist Books</Tab>
                </TabList>

                <TabPanel>
                    <h2>Books I Read: {readList.length}</h2>
                    <div className='flex flex-col gap-6'>
                        {
                            readList.map((read, idx) => <ReadBook key={idx} read={read}></ReadBook>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <h2>My Wish List</h2>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ListedBooks;