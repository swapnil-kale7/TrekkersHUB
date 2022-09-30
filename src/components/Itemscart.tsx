import { Button, Stack } from "react-bootstrap"
import UseShoppingCart from "../context/shoppingCartcontext"
import StoreItem from "../data/items.json"
import { formatcurr } from "../utilities/formatcurr"

type carItemprop={
    id:number
    quantity:number
}
export function Itemscart({id,quantity}:carItemprop){
    const { removeFromcart }=UseShoppingCart()
    const item=StoreItem.find(i=>i.id===id)
    if(item==null)return null

    return(
        <Stack direction="horizontal" gap={2} className="d-flex align-items-center">
            <img src={item.image} style={{
                width: "125px", height: "75px",
                objectFit: "cover"
            }} />
            <div className="me-auto">
                <div>
                    {item.name} {quantity > 1 && (
                    <span className="text=muted" style={{fontSize:".65rem"}}>
                        x{quantity}
                    </span>)}
                </div>
                <div className="text-muted" style={{fontSize:".75rem"}}>
                    {formatcurr(item.price)}
                </div>
                <div>{formatcurr(item.price *quantity)}</div>
                <Button variant="outline-danger" size="sm" onClick={()=>
                removeFromcart(item.id)}>x</Button>
            </div>
        </Stack>
    )
}