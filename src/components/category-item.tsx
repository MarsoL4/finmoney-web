import { Book } from "lucide-react";
import CrudDropdown from "./crud-dropdown";

export default function CategoryItem(){
    return(
        <div className="flex justify-between my-4">
            <div className="flex gap-2">
                <Book />
                <span>nome</span>
            </div>

            <div>
                <CrudDropdown/>
            </div>
        </div>
    )
}