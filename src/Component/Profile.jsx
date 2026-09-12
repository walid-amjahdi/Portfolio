import '../Styles/Profile.css'
import profile from '../Imgs/profile.jpeg'

export function Profile()
{
    return (
        <>
            <div className="profile">
                <div className="first-profile-sec">
                    <h2>
                        Amjahdi Walid
                    </h2>
                    <img src={profile} alt="profile pic" />
                </div>
                <p>
                    Information Systems Engineering student with hands-on experience 
                    building scalable full-stack web applications and microservices 
                    architectures using Spring Boot, React, and Docker. 
                    Strong background in software design patterns, databases, and 
                    continuous integration. 
                    Seeking a Software Engineering Internship to contribute to 
                    production-grade applications.
                </p>
            </div>
        </>
    )
}