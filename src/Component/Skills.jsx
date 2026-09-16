import '../Styles/Skills.css'
import Java from '../Imgs/Icons/java.png'
import JavaScript from '../Imgs/Icons/java-script.png'
import Python from '../Imgs/Icons/python.png'

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
                        <img src="" alt="" className='logo'/>
                    </li>
                    <li>
                        <img src="" alt="" className='logo'/>
                    </li>
                    <li>
                        <img src="" alt="" className='logo'/>
                    </li>
                    <li>
                        <img src="" alt="" className='logo'/>
                    </li>
                    <li>
                        <img src="" alt="" className='logo'/>
                    </li>
                </ul>

        </>
    )
}