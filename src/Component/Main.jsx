import { Routes , Route } from "react-router-dom"
import { Profile } from "./Profile"
import { Educations } from "./Educations"
import { Skills } from './Skills';
import { Projects } from "./Projects";
export function Main()
{
    return (
        <>
            <main>
                <Routes>
                    <Route path="/" element={<Profile/>}/>
                    <Route path="/education" element={<Educations/>}/>
                    <Route path="/skills" element={<Skills/>}/>
                    <Route path="/projects" element={<Projects/>}/>
                </Routes>
            </main>
        </>
    )
}