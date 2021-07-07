import { IExpense } from "../../App"

export type IActionType = ExpensesActionTypes;
// export type IActionPayload = IExpense[];

export interface ExpenseState {
    expenses:IExpense[];
}

const initialState: ExpenseState = {
    expenses:[]
}

export interface IAction {
type: IActionType,
payload: any
}


export enum ExpensesActionTypes {
    SET_EXPENSES = "SET_EXPENSES",
    NEW_EXPENSE = "NEW_EXPENSE",
    UPDATE_EXPENSE = "UPDATE_EXPENSE",
    DELETE_EXPENSE = "DELETE_EXPENSE"
}

//Action Creators
export const ActionCreators = {
  setExpenses: (payload:IExpense[]) => ({type:ExpensesActionTypes.SET_EXPENSES, payload}),
  newExpense: (payload:IExpense) => ({type:ExpensesActionTypes.NEW_EXPENSE, payload}),
  updateExpense:(payload:IExpense) =>({type:ExpensesActionTypes.UPDATE_EXPENSE, payload}),
  deleteExpense:(payload:IExpense)=>({type:ExpensesActionTypes.DELETE_EXPENSE, payload}),
}

const ExpensesReducer = (state = initialState, action:IAction)=>{
    switch(action.type) {
        case ExpensesActionTypes.SET_EXPENSES:
            return {...state, expenses:[...action.payload]};
        case ExpensesActionTypes.NEW_EXPENSE:
            return {...state, expenses:[action.payload, ...state.expenses]};
        case ExpensesActionTypes.UPDATE_EXPENSE:
            const expenses = state.expenses.map((exp)=>{
                if(exp.id === action.payload.id){
                    exp = action.payload
                }
                return exp;
            });
            return {...state, expenses:[...expenses]};
        case ExpensesActionTypes.DELETE_EXPENSE:
            const delExpenses = state.expenses.filter(exp=>exp.id !== action.payload.id);
            return {...state, expenses:[...delExpenses]};

        default: return state;
    }
}
// eslint-disable-next-line import/no-anonymous-default-export
export default ExpensesReducer