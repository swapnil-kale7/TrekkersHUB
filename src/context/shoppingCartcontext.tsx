import { createContext, ReactNode, useContext, useState } from "react";
import { Shoppingcart } from "../components/shoppingcart";
import { useLocalStorage } from "../hooks/useLocalStoreage";

type Shoppingcartcontext={
    opencart:()=>void
    closecart:()=>void
    getItemQuantity:(id:number)=>number
    increasecartQuantity: (id: number) => void
    decreasecartQuantity: (id: number) => void
    removeFromcart: (id: number) => void
    cartQuantity:number
    cartItems:cartItem[]
}
const Shoppingcartcontext=createContext({} as Shoppingcartcontext)

export default function UseShoppingCart(){
    return useContext(Shoppingcartcontext)
}

interface shoppingcartprop{
    children:ReactNode;
}
type cartItem={
    id:number
    quantity:number
}
export function Shoppingcartprovider(props: shoppingcartprop){
    const [cartItems,setItems]=useLocalStorage<cartItem[]>("shopping-cart",[])
    const [isOpen,setIsOpen]=useState(false)

    const cartQuantity=cartItems.reduce(
        (quantity,item)=>item.quantity+quantity,
        0
    )
    const opencart=()=>setIsOpen(true)
    const closecart=()=>setIsOpen(false)

    function getItemQuantity(id:number) {
        return cartItems.find(item=>item.id===id)?.quantity || 0
    }
    function increasecartQuantity(id:number){
        setItems(currItems => {
            if(currItems.find(item=>item.id===id)==null){
                return [...currItems, {id,quantity:1}]
            }else{
                return currItems.map(item =>{
                    if(item.id===id){
                        return{...item, quantity:item.quantity+1}
                    }else{
                        return item
                    }
                })
            }
        })
    }
    function decreasecartQuantity(id: number) {
        setItems(currItems => {
            if (currItems.find(item => item.id === id)?.quantity ===1) {
                return currItems.filter(item=>item.id!==id)
            } else {
                return currItems.map(item => {
                    if (item.id === id) {
                        return { ...item, quantity: item.quantity - 1 }
                    } else {
                        return item
                    }
                })
            }
        })
    }
    function removeFromcart(id:number) {
        setItems(currItems=>{
            return currItems.filter(item=>item.id!==id)
        })
    }

    return (<Shoppingcartcontext.Provider value={{ getItemQuantity,
     increasecartQuantity, 
     decreasecartQuantity, 
     removeFromcart,
     cartItems,
     opencart,
     closecart,
    cartQuantity }}>
        {props.children}
        <Shoppingcart isOpen={isOpen}/>
    </Shoppingcartcontext.Provider>
    )
}