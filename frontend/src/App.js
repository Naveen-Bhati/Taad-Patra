import React, { Fragment } from 'react'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import './bootstrap.min.css'
import './App.css'
import LandingPage from './screens/LandingPage/LandingPage'
import { Route } from 'react-router-dom'
import MyNotes from './screens/MyNotes/MyNotes'


function App(props) {
    return (
        <Fragment>

            <Header />

            <main>
                <Route path='/' exact>
                    <LandingPage />
                </Route>
                <Route path='/mynotes'>
                    <MyNotes />
                </Route>
            </main>

            <Footer />

        </Fragment>
    )
}

export default App

