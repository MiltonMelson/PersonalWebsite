import React from 'react';
import '../index.css';

export default function Page() {

   return (
      <div className='page'>
         <div id="block1">
            <h1>Milton Melson</h1>
            <h3>Veteran and CSSE Student at UWB</h3>
            <p>
               I built this site to host all my project in one location. But it will also serve as a way for me to
               improve my skills in web design. Below are some of my projects that I have been working on recently.
            </p>
         </div>
         <div id='block2'>
            <h1>About Me</h1>
            <p>
               Hi, I'm Milton Melson, I previously served in the Navy as an Aviation Support Equipment Technician. I
               enjoyed my time in the Navy but I have decided to move on to learn new skills. I am currently attending school
               at the University of Washington at Bothell for my degree in Computer Science and Software Engineering.
            </p>
            <p>
               I currently use C++ in most of my school projects and recently some Java in my Operating Systems class. I have also been taking courses like VetsInTech and using any free time to
               teach myself other languages like JavaScript, HTML, and CSS. To improve these skills I have been building minor projects using tools like node.js, mongoDB, Express,
               and React.
            </p>
         </div>
      </div>
   )
}

