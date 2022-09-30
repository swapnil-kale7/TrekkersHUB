import { Col, Row } from "react-bootstrap"
import StoreItem from "../components/StoreItem"
import storeitems from "../data/items.json"

export default function Store() {
    return (<> <h1 className="d-flex justify-content-center">Store</h1>
    <Row md={2} xs={1} lg={3} className="g-3">
        {storeitems.map(item=>(
            <Col key={item.id}><StoreItem{...item}/>
            </Col>
        ))}
    </Row>
    </>
    )
}