import React from 'react';
import '../index.css'

export default function NavBar() {
   return (
      <nav className="navBar">
         <ul>
            <li>
               <a className="neonText_blue" href="https://www.linkedin.com/in/milton-melson?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BdwN00oL3QVWvfsUJJMT7fQ%3D%3D"><ion-icon name="logo-linkedin"></ion-icon>LinkedIn</a>
            </li>
            <li>
               <a className="neonText_green" href="https://github.com/MiltonMelson"><ion-icon name="logo-github"></ion-icon>GitHub</a>
            </li>
         </ul>
      </nav>
   )
}