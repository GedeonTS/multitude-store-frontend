import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./productSlice";
import { TypedUseSelectorHook, useDispatch } from "react-redux";
import { useSelector } from 'react-redux';

export const store = configureStore({
  reducer: {
    products:productSlice
  }
});

export const useAppDispatch:()=>typeof store.dispatch=useDispatch;

export const useAppSelector: TypedUseSelectorHook<ReturnType<typeof store.getState>>=useSelector;