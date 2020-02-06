import * as actionTypes from '../Actions/ActionTypes';

const initialState = {
    mobiles: [],
    laptops: [],
    cartItems: []
}

const shoppingReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case actionTypes.SET_MOBIES_DATA:
            return {
                ...state,
                mobiles: payload
            }
        case actionTypes.SET_LAPTOPS_DATA:
            return {
                ...state,
                laptops: payload
            }
        case actionTypes.ADD_MOBILE_TO_CART:
        case actionTypes.ADD_LAPTOP_TO_CART:
            const copyCartItems = [...state.cartItems];
            copyCartItems.push(action.product);
            const productIndex = copyCartItems.findIndex(pro => pro.id === action.id);
            copyCartItems[productIndex].count = copyCartItems[productIndex].count + 1;
            copyCartItems[productIndex].addedToCart = true;
            const copyMobiles = [...state.mobiles];
            const copyLaptops = [...state.laptops];
            if (action.id.startsWith('M')) {
                const mobileIndex = copyMobiles.findIndex(pro => pro.id === action.id);
                copyMobiles[mobileIndex].count = 1;
                copyMobiles[mobileIndex].addedToCart = true;
            } else {
                const mobileIndex = copyLaptops.findIndex(pro => pro.id === action.id);
                copyLaptops[mobileIndex].count = 1;
                copyLaptops[mobileIndex].addedToCart = true;
            }
            return {
                ...state,
                cartItems: copyCartItems,
                mobiles: copyMobiles,
                laptops: copyLaptops
            }
        case actionTypes.REMOVE_ITEMS_IN_CART: {
            const copyItems = [...state.cartItems]
            const productIndex = copyItems.findIndex(pro => pro.id === action.id);
            copyItems[productIndex].count = 0;
            copyItems[productIndex].addedToCart = false;
            const newCartItems = copyItems.filter(item => item.id !== action.id);
            const copyMobiles = [...state.mobiles];
            const copyLaptops = [...state.laptops];
            if (action.id.startsWith('M')) {
                const mobileIndex = copyMobiles.findIndex(pro => pro.id === action.id);
                copyMobiles[mobileIndex].count = 0;
                copyMobiles[mobileIndex].addedToCart = false;
            } else {
                const mobileIndex = copyLaptops.findIndex(pro => pro.id === action.id);
                copyLaptops[mobileIndex].count = 0;
                copyLaptops[mobileIndex].addedToCart = false;
            }
            return {
                ...state,
                cartItems: newCartItems,
                mobiles: copyMobiles,
                laptops: copyLaptops
            }
        }
        case actionTypes.ADD_MORE_ITEMS_COUNT: {
            const copyCartItems = [...state.cartItems];
            const productIndex = copyCartItems.findIndex(pro => pro.id === action.id);
            copyCartItems[productIndex].count = copyCartItems[productIndex].count + 1;
            return {
                ...state,
                cartItems: copyCartItems
            }
        }
        case actionTypes.REMOVE_ITEMS_COUNT: {
            const copyCartItems = [...state.cartItems];
            const productIndex = copyCartItems.findIndex(pro => pro.id === action.id);
            copyCartItems[productIndex].count = copyCartItems[productIndex].count - 1;
            return {
                ...state,
                cartItems: copyCartItems
            }
        }
        default: return state;
    }
}

export default shoppingReducer;