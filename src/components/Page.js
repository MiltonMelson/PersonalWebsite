import React from 'react';
import '../index.css';

export default function Page() {

   return (
      <div className='page'>
         <div id="block1">
            <h1>Milton Melson</h1>
            <h3>Veteran and CSSE Student at UWB</h3>
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
            <p>
               I built this site to host some of my projects that are more interactive in one location, and to learn how to use React. The less interactive projects 
               written in C++ are in my GitHub, which can be accessed by following the link at the top of the page.
            </p>
         </div>
      </div>
   )
}

