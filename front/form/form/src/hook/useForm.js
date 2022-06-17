import { useState } from "react"

export const useForm = (inicial) => {
    const [form, setForm] = useState(inicial)

    const onChange = (event) => {
        const { name, value } = event.target
        setForm({ ...form, [name]: value })
    }

    const clear = () => {
        setForm(inicial)
    }

    return [ form, onChange, clear ]
}

// const { form, onChange, clear } = useForm({ 
//    name: "", age: Number , applicationText: "", profession: "", country: "" })

export const useForm2 = (initialState)=>{
    const [form, setForm] = useState(initialState)
    
    const onChange2 = (event)=>{
    const{value,name}=event.target
    setForm({...form,[name]:value})
    } 
    const clear = ()=>{
        setForm(initialState)
    }
    return [form,onChange2,clear]
    }