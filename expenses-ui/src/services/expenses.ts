import { IExpense } from "../App";
import { AppDispatch } from "../store";
import { ActionCreators } from "../store/reducers/expensesReducers";
// import * as axios from 'axios';

const axios:any= require('axios');
export const Config = {
    baseUrl: process.env.REACT_APP_BASE_URL || `https://localhost:5001`
}

const axiosInstance = axios.create({
    baseURL: `${Config.baseUrl}/expenses`
});
export const GetExpenses = async (dispatch:AppDispatch) => {
    try {
        // api call
        const {data} = await axiosInstance.get();
        dispatch(ActionCreators.setExpenses(data));
    }
    catch {
        console.log("Get Expenses Error");
    }
}

export const NewExpense = async (dispatch:AppDispatch, expense:IExpense) => {
    try {
        // api call
        const { data } = await axiosInstance.post('', expense);
        dispatch(ActionCreators.newExpense(data));
    }
    catch {
        console.log("New Expense Error");
    }
}


export const UpdateExpense = async (dispatch:AppDispatch, expense:IExpense) => {
    try{
        // api call
        const { data } = await axiosInstance.put('', expense);
        dispatch(ActionCreators.updateExpense(data));
    }
    catch {
                console.log("Update Expense Error");
    }
}

export const DeleteExpense = async (dispatch:AppDispatch, expense:IExpense) => {
    try{
        // api call
        await axiosInstance.delete('', {data: expense});
        dispatch(ActionCreators.deleteExpense(expense));
    }
    catch {
                console.log("Delete Expense Error");
    }
}