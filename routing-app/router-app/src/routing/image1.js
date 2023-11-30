import React from 'react'

export default function image1() {
    return (
        <div>
   <header>

                <ul type="none">
                    <li><a href="home"> HOME </a> </li>
                    <li><a href="image1"> RED </a> </li>
                    <li><a href="image2"> PURPLE </a> </li>
                    <li><a href="image3"> BLUE </a> </li>

                </ul>
            </header>
            <main>
                <h1> RED FLOWER </h1>
                <img className='image' src="https://upload.wikimedia.org/wikipedia/commons/3/3d/Une_fleur_rouge_Algerie.jpg" />

            </main>

            <footer> <p>Routing by Yousr</p> </footer>
        </div>
    )
}
