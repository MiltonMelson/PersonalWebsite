import React from 'react';
import '../index.css';

export default function SlideShow() {
   return (
      <div id='slideShow'>
         <div className='spaceInvaderHeading'>
            <h1><ion-icon name="planet-sharp"></ion-icon>Space Invaders</h1>
            <ul>
               <p>
                  I built this game as my final project for my course with VetsInTech. It was a stepping stone
                  to help me understand the movement of objects and collision of objects. Understand this helps me
                  build my next game "Pac-Man". I have been adding minor improvements when I get time and keep a list
                  of  future features to make it more enjoyable.
               </p>
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
               for design. It was built as a team project at the UWB 2022 Hackathon event with one other teammate.
            </p>
            <p>
               The purpose of this app is to allow users to easily create notes during class and collaborate with other
               students who also use this app by setting their notes to public. Having your notes privacy set to public
               allows everyone who uses the app to also see your notes. This will help if you are bad at taking notes or
               if you have missed class that day and others may have set their notes to public so you could go over theres
               to see anything you may have missed.
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
               This is a simple memory game with a Fallout Theme. It was one of my first small prjoects
               in VetsInTech and it helped me learn how to add fuctions to obejects when clicked on or hovered.
            </p>
            <p>
               You are given a set amount of time and have to flip the cards to match with its pair.
               There is only one pair for each card, and you can only flip two cards at the same time
               when checking pairs. The pairs that match will stay flipped and lock so you cannot click them again.
               If all pairs are found before the time runs out you win.
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
            <p>
               Simply tool to draw using individual cells as pixels. It allows you to pick the size of the board
               before starting to draw.
            </p>
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