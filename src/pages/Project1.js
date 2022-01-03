import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import {
    ColorPicker,
    FontSetting,
    Reset,
    Result,
} from "../Components/Project-1";
import ColorProvider from "../contexts/ColorContext";
import SizeProvider from "../contexts/SizeContext";
export default function Project1() {
    return (
        <ColorProvider>
            <SizeProvider>
                <div className="App">
                    <Container style={{ marginTop: 20 }}>
                        <Row>
                            <Col>
                                <ColorPicker />
                            </Col>
                            <Col>
                                <FontSetting />
                            </Col>
                        </Row>
                        <Reset />
                        <Row>
                            <Result />
                        </Row>
                    </Container>
                </div>
            </SizeProvider>
        </ColorProvider>
    );
}
