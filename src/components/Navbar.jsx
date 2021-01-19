import React from 'react';
import '../common/nav.scss';
 
 
 const Navbar = () => {
     return(
         <>
           
    <header>
      <a href=" " ><img src="tedxjneclogo_white.png" alt='TEDxJNEC_logo' /></a>
	     <nav>
  			<ul>
  				<li className="active"><a href=" ">HOME</a></li>
 				<li><a href=" ">SPEAKERS</a></li>
  				<li><a href=" ">ABOUT</a></li>
  				<li><a href=" ">BOOKING</a></li>
  				<li><a href=" ">TEAM</a></li>
  			</ul>  	 
        </nav>    
   </header>

         </>
     )
 }

export default Navbar;