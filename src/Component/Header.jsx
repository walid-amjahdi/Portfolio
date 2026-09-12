import { Link } from "react-router-dom"
import '../Styles/Header.css'

export function Header()
{
    return (
        <>
            <header>
                <h3>Portfolio</h3>
                <nav>
                    <ul className="link-list">
                        <li>
                            <Link to="/">Profile</Link>
                        </li>
                        <li>
                            <Link to="/education">Education & Certifications</Link>
                        </li>
                        <li>
                            <Link to="/skills">Technical Skills</Link>
                        </li>
                        <li>
                            <Link to="/projects">Projects</Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    )
}