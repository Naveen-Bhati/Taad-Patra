import React from 'react'
import { Button, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import classes from './LandingPage.module.css'

const LandingPage = () => {
    return (
        <div className={classes.main}>
            <Container>
                <Row>
                    <div className={classes.introText}>
                        <h1 className={classes.title}>Welcome to Taad-Patra</h1>
                        <p className={classes.subtitle}>One safe place for all your notes.</p>
                    </div>
                    <div className={classes.buttonContainer}>
                        <Link to='/login'>
                            <Button className={classes.landingButton} size="lg" variant='outline-dark'>Login</Button>
                        </Link>
                        <Link to='/register'>
                            <Button className={classes.landingButton} size='lg' variant='outline-light'>Signup</Button>
                        </Link>
                    </div>
                </Row>
            </Container>
        </div>
    )
}

export default LandingPage
