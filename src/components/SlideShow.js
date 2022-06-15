import React from 'react';
import '../index.css';

export default function SlideShow() {
   return (
      <div>
         <div className='spaceInvaderHeading'>
            <h1><ion-icon name="planet-sharp"></ion-icon>Space Invaders</h1>
            <ul>
               <p>What I learned from this project:</p>
               <li>
                  How to use canvas to draw and move objects using setInterval.
               </li>
               <li>
                  How to detect collisions between objects.
               </li>
               <li>
                  How to use eventListeners to detect keyboard keys for movement on the x and y axis on the canvas.
               </li>
               <li>
                  How to use id, classes, and keyframes in CSS/HTML.
               </li>
            </ul>
            <a className="neonText" href="https://miltonmelson.github.io/SpaceInvaders/"><ion-icon name="planet-sharp"></ion-icon>Play Game</a>
            <div className="slider">
               <div className="slides">
                  <div id="slide1-1">
                     <img src={require('../img/a.png')} alt=""></img>
                  </div>
                  <div id="slide1-2">
                     <img src={require("../img/b.png")} alt=""></img>
                  </div>
                  <div id="slide1-3">
                     <img src={require("../img/c.png")} alt=""></img>
                  </div>
               </div>
            </div>
         </div>

         <div className='hackathonHeading'>
            <h1>UWB Hackathon 2022 Note Taking App</h1>
            <p>
               This app uses Node.js/Express/MongoDB with Google OAuth20 for authentication and Handlebars/Materialize
               for design.
            </p>
            <p>
               The purpose of this app is to allow users to easily create notes during class and collaborate with other
               students who also use this app by setting their notes to public. You can also set your notes to private
               so
               only yourself will be able to view them.
            </p>
            <a className='neonText' href="https://tranquil-bastion-78148.herokuapp.com/">Try It Out</a>
            <div className="slider">
               <div className="slides">
                  <div id="slide2-1">
                     <img src={require('../img/note1.png')} alt=""></img>
                  </div>
                  <div id="slide2-2">
                     <img src={require("../img/note2.png")} alt=""></img>
                  </div>
                  <div id="slide2-3">
                     <img src={require("../img/note3.png")} alt=""></img>
                  </div>
                  <div id="slide2-4">
                     <img src={require("../img/note4.png")} alt=""></img>
                  </div>
               </div>
            </div>
         </div>

         <div className="falloutHeading">
            <h1>Fallout Memory Game</h1>
            <p>
               This is a simple memory game with a Fallout Theme.
               Given 30 seconds to solve the puzzle.
               Keeps track of number of tries, and has a reset function.
            </p>
            <a className='neonText' href="https://miltonmelson.github.io/FalloutMemoryGame/">Play Game</a>
            <div className="slider">
               <div className="slides">
                  <div id="slide3-1">
                     <img src={require('../img/fallout.png')} alt=""></img>
                  </div>
               </div>
            </div>
         </div>

         <div class="pixelHeading">
            <h1 id="pixel">Pixel Art Maker</h1>
            <a className='neonText' href="https://miltonmelson.github.io/PixelArtMaker/">Try It Out</a>
            <div className="slider">
               <div className="slides">
                  <div id="slide3-1">
                     <img src={require('../img/pixel-art-maker-alt.png')} alt=""></img>
                  </div>
               </div>
            </div>
         </div>

      </div>
   )
}