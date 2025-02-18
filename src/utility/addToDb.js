import { toast } from "react-toastify";

// Read-List
const getStoredReadList = () => {
    const storedListStr = localStorage.getItem('read-list');
    if (storedListStr) {
        const storedList = JSON.parse(storedListStr);
        return storedList;
    }
    else{
        return [];
    }
}

const addToStoredReadList = (id) => {
    const storedList = getStoredReadList(id);
    if (storedList.includes(id)) {
        toast.error('already exists in the read list');
    }
    else{
        storedList.push(id);
        const storedListStr = JSON.stringify(storedList);
        localStorage.setItem('read-list', storedListStr);
        toast.success('This book is added to your read list.')
    }
}

// Add-to-Wishlist

const getStoredWishlist = () => {
    const storedListStr = localStorage.getItem('read-list');
    if (storedListStr) {
        const storedList = JSON.parse(storedListStr);
        return storedList;
    }
    else{
        return [];
    }
}

const addToStoredWishlist = (id) => {
    const storedList = getStoredWishlist(id);
    if (storedList.includes(id)) {
        toast.error('already exists in the Wishlist');
    }
    else{
        storedList.push(id);
        const storedListStr = JSON.stringify(storedList);
        localStorage.setItem('Wishlist-list', storedListStr)
        toast.success('This book is added to your Wishlist.')
    }
}

export {addToStoredReadList, addToStoredWishlist, getStoredReadList}