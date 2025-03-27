"use server"

const API_URL = "http://localhost:8080/categories"

//Busca todas as Categorias Cadastradas
export async function getCategories(){
    const response = await fetch(API_URL)
    return await response.json()
}

//Cadastra uma nova Categoria
export async function createCategory(initialState: any, formData: FormData){
    const data = {
        name: formData.get("name"),
        icon: formData.get("icon")
    }
    
    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    }

    const response = await fetch(API_URL, options)
}

