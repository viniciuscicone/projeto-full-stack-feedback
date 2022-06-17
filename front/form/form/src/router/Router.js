
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { FormPage } from '../pages/form/formPage'
import { SucessPage } from '../pages/sucess/sucessPage'

export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/:id" element={<FormPage />} />
                <Route path="/sucess" element={<SucessPage />} />
            </Routes>
        </BrowserRouter>
    )
}

