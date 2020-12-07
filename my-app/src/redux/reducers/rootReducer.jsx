import React, { Component } from 'react'
import {combineReducers} from 'redux'
import {CartReducer} from './CartReducer'
 
export const rootReducer = combineReducers({
    // reducer con = object con
    CartReducer: CartReducer,
})