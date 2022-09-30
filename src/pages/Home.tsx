import { Badge, Toast } from "react-bootstrap";
import Homeslide2 from "../components/Homeslide2";


export default function Home(){
    return (
        <>
             
        <div>
            <div className="d-flex justify-content-center">
                <h1>
                    <Badge bg="dark">HOME</Badge>
                </h1>
            </div>

            <div className="d-flex justify-content-center"
                 >
                    <Toast>
                     
                        <img src="/images/party-removebg-preview.png" className="rounded me-2" style={{width:"2rem",height:"2rem"}}/>
                            <strong className="me-auto">SALE ALERT</strong>
                        
                   
                        <Toast.Body>20% DISCOUNT soon!</Toast.Body>
                        <Toast.Body> New tents Available in the shop section</Toast.Body>
                        <Toast.Body> No deposit</Toast.Body>
                        
                    </Toast>
                {/* <Homeslide/> */}
                <Homeslide2 />
            </div>
        </div>
            
    </>
    )}
