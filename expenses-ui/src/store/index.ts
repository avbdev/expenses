import {configureStore} from "@reduxjs/toolkit"
import { Reducer } from "react";
import {useDispatch, useSelector, TypedUseSelectorHook} from "react-redux"
import expensesReducers, { ExpensesActionTypes, ExpenseState } from "./reducers/expensesReducers";

export const store = configureStore({
    reducer:{
       expensesReducer:expensesReducers as any
    }
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector:TypedUseSelectorHook<RootState> = useSelector;