import '../Styles/Skills.css'
import Java from '../Imgs/Icons/java.png'
import JavaScript from '../Imgs/Icons/java-script.png'
import Python from '../Imgs/Icons/python.png'
import Cpp from '../Imgs/Icons/C++.png'
import C from '../Imgs/Icons/c.png'
import SQL from '../Imgs/Icons/sql.png'
import HTML from '../Imgs/Icons/html.png'
import CSS from '../Imgs/Icons/css.png'
import Spring from '../Imgs/Icons/spring.png'
import React from '../Imgs/Icons/react.png'
import SFML from '../Imgs/Icons/sfml.png'


export function Skills()
{
    return (
        <>
            <h3>Technical Skills</h3>
                <h4>Programming Language</h4>
                <ul className="skills-list">
                    <li>
                        <img src={Java} alt="" className='logo'/>
                    </li>
                    <li>
                        <img src={JavaScript} alt="" className='logo'/>
                    </li>
                    <li>
                        <img src={Python} alt="" className='logo'/>
                    </li>
                    <li>
                        <img src={Cpp} alt="" className='logo'/>
                    </li>
                    <li>
                        <img src={C} alt="" className='logo'/>
                    </li>
                    <li>
                        <img src={SQL} alt="" className='logo'/>
                    </li>
                    <li>
                        <img src={HTML} alt="" className='logo'/>
                    </li>
                    <li>
                        <img src={CSS} alt="" className='logo'/>
                    </li>
                </ul>
                <h4>Frameworks & bibliotics</h4>
                <ul className="skills-list">
                    <li>
                        <img src={Spring} alt="" className="logo" />
                    </li>
                    <li>
                        <img src={React} alt="" className="logo" />
                    </li>
                    <li>
                        <img src={SFML} alt="" className="logo" />
                    </li>
                </ul>

        </>
    )
}