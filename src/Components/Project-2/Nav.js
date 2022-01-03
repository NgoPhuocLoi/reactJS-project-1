import React from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Navigation() {
    return (
        <Nav>
            <Nav.Item>
                <Link className="nav-link" to="/">
                    Home
                </Link>
            </Nav.Item>
            <Nav.Item>
                <Link className="nav-link" to="/project-1">
                    Project 1
                </Link>
            </Nav.Item>
            <Nav.Item>
                <Link className="nav-link" to="/project-2">
                    Project 2
                </Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="disabled" disabled>
                    Disabled
                </Nav.Link>
            </Nav.Item>
        </Nav>
    );
}
