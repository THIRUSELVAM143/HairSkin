export const addTOCart=(item)=>{
    // console.log(item);

    return {
       
        type:'ADD_TO_CART',
        payload:item,
    };
};

export const  addToLiked=(item)=>{
    return{
        type:'ADD_TO_LIKED',
        payload:item,
    }
};
export const removeToLiked=(itemid)=>{
    return{
        type:'REMOVE_TO_LIKED',
        payload:itemid,
    }
};