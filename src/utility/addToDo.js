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
    const storedWishListStr = localStorage.getItem('wishlist-list');
    if (storedWishListStr) {
        const storedList = JSON.parse(storedWishListStr);
        return storedList;
    }
    else{
        return [];
    }
}

const addToStoredWishlist = (id) => {
    const storedWishList = getStoredWishlist(id);
    if (storedWishList.includes(id)) {
        toast.error('already exists in the Wishlist');
    }
    else{
        storedWishList.push(id);
        const storedListStr = JSON.stringify(storedWishList);
        localStorage.setItem('wishlist-list', storedListStr)
        toast.success('This book is added to your Wishlist.')
    }
}

export {addToStoredReadList, addToStoredWishlist, getStoredReadList, getStoredWishlist}