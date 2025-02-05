import { toast, ToastContainer } from "react-toastify";

const getStoredReadList = () => {
    const storedListStr = localStorage.getItem('read-list');
    if(storedListStr){
        const storedList = JSON.parse(storedListStr);
        return storedList;
    }
    else{
        return [];
    }
}

const addToStoredReadList = (id) => {
    const storedList = getStoredReadList();
    if(storedList.includes(id)){
        console.log(id,'id already exist');
    }
    else{
        storedList.push(id);
        const storedListStr = JSON.stringify(storedList);   
        localStorage.setItem('read-list', storedListStr);
        toast('book added');
    }
}

const getStoredWishList = () =>{
    const storedWishStr = localStorage.getItem('wish-list');
    if(storedWishStr){
        const storedWish = JSON.parse(storedWishStr);
        return storedWish;
    }
    else{
        return [];
    }
}

const addToStoredWishList = (id) =>{
    const storedWish = getStoredWishList();
    if(storedWish.includes(id)){
        console.log(id, 'already exist');
    }
    else{
        storedWish.push(id);
        const storedWishStr = JSON.stringify(storedWish);
        localStorage.setItem('wish-list', storedWishStr);
        toast('book added')
    }
}

export {addToStoredReadList, addToStoredWishList, getStoredReadList, getStoredWishList}