import CategoryItem from "@/components/category-item";
import NavBar from "@/components/nav-bar";

//Simulação do que o back-end devolverá
const data = [
    {
        id: 1,
        icon: "Book",
        name: "Educação",
    },
    {
        id: 2,
        icon: "Bus",
        name: "Transporte",
    }
]

export default function CategoriesPage(){
    return(
        <>
            <NavBar active="categorias"/>

            <main className="flex items-center justify-center">
                <div className="bg-slate-900 rounded min-w-2/3 p-6 m-6">
                    <h2 className="text-lg font-bold ">Categorias</h2>

                    {data.map(category => <CategoryItem category={category} />)}


                </div>
            </main>

            
        </>
    )
}