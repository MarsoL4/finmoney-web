import { Book } from "lucide-react";
import CrudDropdown from "./crud-dropdown";
import Icon from "./icon";

interface CategoryItemProps{
    category: Category;
}

export default function CategoryItem({category} : CategoryItemProps){
    return(
        <div className="flex justify-between my-4">
            <div className="flex gap-2">
                <Icon name={category.icon} /> {/*Muda o ícone de acordo com o que estiver em cada category.icon (Se estiver 'Bus' o ícone será o de ônibus da LucideIcons)*/}
                <span>{category.name}</span>
            </div>

            <div>
                <CrudDropdown/>
            </div>
        </div>
    )
}