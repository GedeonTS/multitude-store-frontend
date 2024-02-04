import {PayloadAction,createAsyncThunk,createSlice} from '@reduxjs/toolkit';

export interface Product {
    id: number;
    name: string;
    description: string;
    price: string;
    stock_quantity: number;
    category: string;
    created_at: string;
    updated_at: string;
}

export interface ProductState {
    products: {
        status: number,
        products:Product[]};
}

const initialState: ProductState = {
    products: {
        status: 0,
        products:[]},
};
export const fetchProduct= createAsyncThunk("product/fetch", async (thunkAPI)=>{
    const response=await fetch("http://127.0.0.1:8000/api/products/",{
        method:"GET"
    });
    const data=response.json();
    console.log("data:",data);
    return data
})

 const ProductSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        setProducts: (state, action: PayloadAction<Product[]>) => {
            state.products = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchProduct.fulfilled, (state, action) => {
            state.products = action.payload;
        });
    }
});

export const { setProducts } = ProductSlice.actions;

export default ProductSlice.reducer;

