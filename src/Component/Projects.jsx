import { Link } from "react-router-dom"

export function Projects()
{
    return (
        <>
        <div className="project">
            <Link to={"/with_me_shop"}>
                <h4>With Me Shop</h4>
            </Link>
            <p>
                Full-stack e-commerce platform developed as a semester project with role-based access and a microservices-based
                backend. Built with React, Spring Boot, Spring Security, JPA/Hibernate, SQLite, Spring Cloud Gateway, Redis,
                Docker, GitHub Actions, and Railway.
            </p>
        </div>        
        <div className="project">
            <Link to={"/exam_room"}>
                <h4>Project Exam Room Management </h4>
            </Link>
            <p>
                Full-stack academic project developed using React and Spring Boot.
            </p>
        </div>        
        <div className="project">
            <Link to={"/ml_project"}>
                <h4>ML Project</h4>
            </Link>
            <p>
                Machine learning project using Python and supervised and unsupervised learning techniques.
            </p>
        </div>        
        <div className="project">
            <Link to={"/bike_game"}>
                <h4>2D Bike Game </h4>
            </Link>
            <p>
                2D game developed using C++ and SFML.
            </p>
        </div>
        </>
    )
}