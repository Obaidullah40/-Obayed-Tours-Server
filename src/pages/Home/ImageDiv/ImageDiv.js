import React from 'react';
import { Col, Image, Row } from 'react-bootstrap';


const ImageDiv = () => {
    return (
        <div>
            <Row>
                <Col xs={1} md={2}></Col>
                <Col xs={12} md={7}>
                    <h1 className="fs-1 mt-5">
                        Choose The{" "}
                        <small className="text-warning heading">
                            Destination <br /> Just Right
                        </small>{" "}
                        For Your Vacation
                    </h1>
                    <p className="text-secondary">
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit. Aenean commodo ligula eget dolor. Aenean massa cum
                        sociis Theme natoque.
                    </p>
                </Col>
                <Col xs={1} md={3}></Col>
            </Row>
            <Row>
                <Col className="p-0 m-0" xs={6} md={4} xxl={3}>
                    <Image
                        className="image"
                        src="https://i.ibb.co/tXJfCcW/Tourist-from-mountain-top-sun-rays-man-wear-big-backpack-against-sun-light.jpg"
                        fluid
                    />
                </Col>

                <Col className="p-0 m-0" xs={6} md={4} xxl={3}>
                    <Image
                        className="image"
                        src="https://i.ibb.co/wpJ9T0Z/Idea-concept-Red-pink-tower-blue-hat-old-vintage-camera-and-shells-over-wooden-floor-on-sunshine-blu.jpg"
                        fluid
                    />
                </Col>
                <Col className="p-0 image m-0" xs={12} md={4} xxl={3}>
                    <p className="px-4 pt-3 pb-0 mb-0 fs-4">
                        Original <small className="heading">Experience</small>
                    </p>
                    <small className="text-danger px-4">
                        <i>Been there recently?</i>
                    </small>
                    <p className="text-secondary pt-3 px-4">
                        Lorem ipsum dolor sit amet, consectetur a elit. In ut
                        xullam corper leo, dsf eget euismod orci. Cum sociis
                        natoquepenatibus.
                    </p>
                </Col>
                <Col className="p-0 image m-0" xs={6} md={4} xxl={3}>
                    <Image
                        src="https://i.ibb.co/KWHMRT6/pexels-tirachard-kumtanom-587438.jpg"
                        fluid
                    />
                </Col>

                <Col className="p-0 image m-0" xs={6} md={4} xxl={3}>
                    <Image
                        src="https://i.ibb.co/PNGBSzz/pexels-alexandr-podvalny-1004584.jpg"
                        fluid
                    />
                </Col>
                <Col className="p-0 image m-0" xs={6} md={4} xxl={3}>
                    <Image
                        src="https://i.ibb.co/gJjmdz4/pexels-asad-photo-maldives-1268855.jpg"
                        fluid
                    />
                </Col>
                <Col className="p-0 image m-0" xs={6} md={4} xxl={3}>
                    <Image
                        src="https://i.ibb.co/wRGmqBY/pexels-kampus-production-6180447.jpg"
                        fluid
                    />
                </Col>
                <Col className="p-0 image m-0" xs={6} md={4} xxl={3}>
                    <Image
                        src="https://i.ibb.co/y0dLpQM/ammie-ngo-vcu-OZBxx-Rk-unsplash.jpg"
                        fluid
                    />
                </Col>
                <Col className="p-0 image m-0" xs={6} md={4} xxl={3}>
                    <Image
                        src="https://i.ibb.co/MszxFDk/chang-duong-Sj0i-Mtq-Z4w-unsplash.jpg"
                        fluid
                    />
                </Col>
            </Row>
        </div>
    );
};

export default ImageDiv;