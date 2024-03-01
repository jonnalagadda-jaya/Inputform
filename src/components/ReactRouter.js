import React from 'react'
import { Link } from 'react-router-dom';



function ReactRouter(){
    return(
        <div>
            <header> 
                <Link to ="/About" className='link'>About Us</Link>
                <Link to ="/contact" className='link'>Contact Us</Link>
                <Link to ="/product" className='link'>Product</Link>
                <Link to ="/userlist" className='link'>UserList</Link>
                
            </header>
            <img src='https://www.imageshine.in/uploads/gallery/lavender-colour-background-hd.jpg'></img>
        </div>
    )
}

export default ReactRouter;