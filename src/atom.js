import {atom, useRecoilState} from "recoil"
 const cartState = atom({
    key: "cart",
    default: 0
  })

export const useCartState = () => useRecoilState(cartState)

 const categoryState = atom({
    key: "category",
    default:""
  })

export const useCategoryState = () => useRecoilState(categoryState)