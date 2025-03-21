import { DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator } from "./ui/dropdown-menu";
import { ChevronDown, Pencil, Trash } from "lucide-react";

export default function CrudDropdown(){
    return(
        <DropdownMenu>
            <DropdownMenuTrigger>
                <ChevronDown />
            </DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuItem>
                        <Pencil/>
                        Editar
                    </DropdownMenuItem>

                    <DropdownMenuItem>
                        <Trash/>
                        Apagar
                    </DropdownMenuItem>
                </DropdownMenuContent>
        </DropdownMenu>

    )
}