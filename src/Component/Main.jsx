import { Routes , Route } from "react-router-dom"
import { Profile } from "./Profile"
import { Educations } from "./Educations"
export function Main()
{
    return (
        <>
            <main>
                <Routes>
                    <Route path="/" element={<Profile/>}/>
                    <Route path="/education" element={<Educations/>}/>
                </Routes>
            </main>
        </>
    )
}