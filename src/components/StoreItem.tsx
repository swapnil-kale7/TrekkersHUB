import { Button, Card } from "react-bootstrap"
import UseShoppingCart from "../context/shoppingCartcontext"
import { formatcurr } from "../utilities/formatcurr"

type StoreItemprop={
    id:number
    name:string
    price:number
    image:string
}

export default function StoreItem({id, name ,price,image}:StoreItemprop){
    const {getItemQuantity,
        increasecartQuantity,
        decreasecartQuantity,
        removeFromcart}=UseShoppingCart()
    const quantity=getItemQuantity(id)
    return (<Card className="h-100">
        <Card.Img 
        variant="top" 
        src={image} 
        height="300px" 
        style={{objectFit:"cover"}}
        />
        <Card.Body className="d-flex flex-column">
            <Card.Title className="d-flex justify-content-between 
            align-items-baseline mb-4">
                <span className="fs-2">{name}</span>
                <span className="ms-2 text-muted">{formatcurr(price)}</span>
            </Card.Title>
            <div className="mt-auto">
                {quantity===0?
                    <Button className="w-100" onClick={() => increasecartQuantity(id)}>+ Add To Cart</Button>:
                    <div className="d-flex align-items-center
                    flex-column" style={{gap:"0.5rem"}}>
                    <div className="d-flex align-items-center justify-content-center"
                    style={{gap:"0.5rems"}}>
                            <Button onClick={() => decreasecartQuantity(id)}>-</Button>
                        <div>
                            <span className="f3-3">{quantity}</span> in cart </div>
                        <Button onClick={()=>increasecartQuantity(id)}>+</Button>
                    </div>
                        <Button variant="danger" size="sm"
                            onClick={() => removeFromcart(id)}>Remove</Button>
                        </div>}
                
            </div>
        </Card.Body>
    </Card>)
}