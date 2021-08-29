import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import classes from './Footer.module.css'

const Footer = () => {
    return (
        <footer className={classes.footer}>
            <Container>
                <Row>
                    <Col className='text-center py-3'>Copyright &copy; Taad-Patra</Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer
