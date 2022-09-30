import { Carousel } from "react-bootstrap";

export default function Homeslide() {
    return (
        <div className="g-3">
            <Carousel fade>
                <Carousel.Item>
                    <img
                        className="d-block"
                        style={{ height: "650px", width: "1000px" }}
                        src="/images/1.png"
                        alt="First slide"
                    />
                    {/* <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption> */}
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block"
                        style={{ flex: 1, height: "650px" }}
                        src="/images/2.png"
                        alt="Second slide"
                    />

                    {/* <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption> */}
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block"
                        style={{ height: "650px",width:"1000px" }}
                        src="/images/3.png"
                        alt="Third slide"
                    />

                    {/* <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption> */}
                </Carousel.Item>
            </Carousel>
        </div>
    )
}