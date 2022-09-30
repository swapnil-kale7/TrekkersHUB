import { Offcanvas, Stack } from "react-bootstrap";
import UseShoppingCart from "../context/shoppingCartcontext";
import { formatcurr } from "../utilities/formatcurr";
import { Itemscart } from "./Itemscart";
import storeItems from "../data/items.json"
type shoppingcartprops={
    isOpen: boolean
}
export function Shoppingcart({isOpen}:shoppingcartprops){
    const{closecart,cartItems}=UseShoppingCart()
    return <Offcanvas show={isOpen} onHide={closecart} placement="end">
        <Offcanvas.Header closeButton>
            <Offcanvas.Title>cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
            <Stack gap={3}>
                {cartItems.map(item=>(
                    <Itemscart key={item.id}{...item}/>
                ))}
                <div className="ms-auto fw-bold fs-5">
                    TOTAL{" "}
                    {formatcurr(
                        cartItems.reduce((total, cartItem) => {
                        const item = storeItems.find(i => i.id === cartItem.id)
                        return total + (item?.price || 0) * cartItem.quantity
                    }, 0)
                    )}</div>
            </Stack>
        </Offcanvas.Body>
    </Offcanvas>
}