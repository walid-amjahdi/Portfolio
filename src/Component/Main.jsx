import { Routes , Route } from "react-router-dom"
import { Profile } from "./Profile"
export function Main()
{
    return (
        <>
            <main>
                <Routes>
                    <Route path="/" element={<Profile/>}/>
                </Routes>
            </main>
        </>
    )
}