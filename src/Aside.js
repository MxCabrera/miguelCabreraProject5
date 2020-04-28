import React from 'react';
import './App.css';

function Aside() {
   return (
      <aside className="wrapper">
         <div class="nav">
            <nav>
                  <ul class="flex">
                     <li><a href="https://breakingbadapi.com/documentation">Breaking Bad API</a></li>
                     <li><a href="http://www.mcabrera.ca">My Portfolio</a></li>
                  <li><a href="https://breakingbad.fandom.com/wiki/Breaking_Bad_Wiki">Official Website</a></li>
                  </ul>
            </nav>
            </div>
         <h3 className="credits">Breaking Bad API was used to create this App. Photos and audio files are not mine, and are owned by there respective creators</h3>
      </aside>
   )
}

export default Aside;