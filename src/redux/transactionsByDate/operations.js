import { createAsyncThunk } from '@reduxjs/toolkit';
import transactionsByYear from "../../shared/api/transactionsByYear"

export const getTransactionsByDate = createAsyncThunk('transactionsByYear/getTransactionsByDate', async (date, {rejectWithValue})=>{
    try{
const data = await transactionsByYear(date);
return data;
    }catch(error){
        return rejectWithValue(error)
    }
})
