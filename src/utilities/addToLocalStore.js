const getBookListFromStorage = () => {
    const storeData = localStorage.getItem('readList');
    if (storeData) {
        const StoreBook = JSON.parse(storeData)
        return StoreBook;
    }
    else {
        return [];
    }
}

const addBookList = (id) => {
    const storeBookData = getBookListFromStorage()
    if (storeBookData.includes(id)) {
        alert('Already read')
    }
    else {
        storeBookData.push(id)
        // console.log(storeBookData)
        const data = JSON.stringify(storeBookData)
        localStorage.setItem('readList', data)
    }
}


const getWishListFromLocalStorage = () => {
    const storedList = localStorage.getItem('wishList')
    if (storedList) {
        return JSON.parse(storedList)
    }
    else {
        return []
    }
}

const addWishList = (id) => {
    const storedWishList = getWishListFromLocalStorage();
    // console.log(storedWishList)
    if (storedWishList.includes(id)){
        alert('Already added')
    }
    else{
        const list = [...storedWishList , id]
        localStorage.setItem('wishList' , JSON.stringify(list))
    }
    console.log(storedWishList)
}

export {
    addBookList,
    getBookListFromStorage as getBookList,
    addWishList,
    getWishListFromLocalStorage as getWishList
}