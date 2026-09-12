import { Link } from "react-router-dom"

export function Header()
{
    return (
        <>
            <header>
                <h3>Amjahdi Walid</h3>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Profile</Link>
                        </li>
                        <li>
                            <Link to="/education">Education</Link>
                        </li>
                        <li>
                            <Link to="/skills">Technical Skills</Link>
                        </li>
                        <li>
                            <Link to="/certifications">Certifications</Link>
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