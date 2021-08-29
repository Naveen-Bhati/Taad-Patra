import React, { Fragment } from 'react'
import { Container, Row } from 'react-bootstrap'
import classes from './MainScreen.module.css'

const MainScreen = (props) => {
    return (
        <div className={classes.mainBack}>
            <Container>
                <Row>
                    <div className={classes.page}>
                        {props.title &&
                            (<Fragment>
                                <h1 className={classes.heading}>
                                    {props.title}
                                </h1>
                                <hr />

                            </Fragment>)
                        }
                        {props.children}
                    </div>
                </Row>
            </Container>

        </div>
    )
}

export default MainScreen
