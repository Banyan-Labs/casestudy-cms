import React from "react";
import './style.js';
import {ProjectContainer} from './style';
import indeedHP from './Images/indeedHomepage.jpg';

const EditDelete = () => {
    return (
        <ProjectContainer>
        <div>
            <h1>Project Title</h1>
            <img src={indeedHP} />
            <div>
                <h3>Synopsis:</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, quo at, accusantium sint asperiores maxime eos exercitationem ullam quasi similique ea facere nostrum molestiae doloribus consectetur est autem. Rem, impedit!</p>
            </div>
            <div>
                <h3>Findings:</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, quo at, accusantium sint asperiores maxime eos exercitationem ullam quasi similique ea facere nostrum molestiae doloribus consectetur est autem. Rem, impedit!</p></div>
            <div>
                <h3>Discussion:</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam velit totam earum, laudantium ad distinctio nulla numquam vero corrupti ipsa. Totam, facere ipsum! Magni, corrupti dolores? Debitis reiciendis similique mollitia at itaque qui autem fugit assumenda, facilis quasi suscipit explicabo aliquam ratione placeat dolorem id error repudiandae omnis. Veniam, cum!</p>
            </div>
            <div>
                <h3>Conclusion:</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, quo at, accusantium sint asperiores maxime eos exercitationem ullam quasi similique ea facere nostrum molestiae doloribus consectetur est autem. Rem, impedit!</p>
            </div>
            <div>
                <h3>Recommendations:</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, quo at, accusantium sint asperiores maxime eos exercitationem ullam quasi similique ea facere nostrum molestiae doloribus consectetur est autem. Rem, impedit!</p>
            </div>
            <div>
                <h3>Implementation:</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, quo at, accusantium sint asperiores maxime eos exercitationem ullam quasi similique ea facere nostrum molestiae doloribus consectetur est autem. Rem, impedit!</p>
            </div>
            <div>
                <h3>References:</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, quo at, accusantium sint asperiores maxime eos exercitationem ullam quasi similique ea facere nostrum molestiae doloribus consectetur est autem. Rem, impedit!</p>
            </div>
            <div>
                <h3>Appendices:</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat veniam nam alias ullam molestias in eius quibusdam voluptatibus a vel?</p>
            </div>
            
            <a href="#" id="edit">Edit</a>
            <a href="#" id="delete">Delete</a>
            <br />
            <a href="#" id="home">Home</a>

        </div>
        </ProjectContainer>
    )
}

export default EditDelete;
