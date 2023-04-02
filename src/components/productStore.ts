import { create } from "zustand";

interface ProductState {
  products: number;
  increase: () => void;
  decrease: () => void;
}

const useStore = create<ProductState>((set) => ({
  products: 0,
  increase: () => set((state) => ({ products: state.products + 1 })),
  decrease: () => set((state) => ({ products: state.products - 1 })),
}));

export default useStore
