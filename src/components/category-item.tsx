import { Book } from "lucide-react";
import CrudDropdown from "./crud-dropdown";

interface Category {
    id: number,
    icon: string,
    name: string
}

interface CategoryItemProps{
    category: Category;
}

export default function CategoryItem({category} : CategoryItemProps){
    return(
        <div className="flex justify-between my-4">
            <div className="flex gap-2">
                <Book />
                <span>{category.name}</span>
            </div>

            <div>
                <CrudDropdown/>
            </div>
        </div>
    )
}