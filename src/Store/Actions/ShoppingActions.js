import * as actionTypes from './ActionTypes';

export const setMobiles = data => ({
    type: actionTypes.SET_MOBIES_DATA,
    payload: data
});

export const setLapTops = data => ({
    type: actionTypes.SET_LAPTOPS_DATA,
    payload: data
});

export const addMobileToCart = (product, id) => ({
    type: actionTypes.ADD_MOBILE_TO_CART,
    product,
    id
});

export const addLapTocart = (product, id) => ({
    type: actionTypes.ADD_LAPTOP_TO_CART,
    product,
    id
});

export const removeItems = id => ({
    type: actionTypes.REMOVE_ITEMS_IN_CART,
    id
});

export const addMoreItemsCount = id => ({
    type: actionTypes.ADD_MORE_ITEMS_COUNT,
    id
});

export const reduceItemsCount = id => ({
    type: actionTypes.REMOVE_ITEMS_COUNT,
    id
})