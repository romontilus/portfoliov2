// Requiring the lib for dealing with components
import React from 'react';
// Requiring the lib for dealing with rendering
import ReactDOM from 'react-dom';

// Require the game component
import App from './components/App/App.js'
// Require the header component
import Header from './components/header/header.js'
// Require the scoreboard component
// import ScoreBoard from './components/score_board/score_board.js'
// Require container for game
import Container from './components/container/container.js';
// Require footer for game
import Footer from './components/footer/footer.js'



// A stateless parent component
const Home = () => {
    return <App > 
            <Header /> 
            <Container />
            <Footer />
         </App>
}

//
ReactDOM.render(<Home />, (document.getElementById('root')));