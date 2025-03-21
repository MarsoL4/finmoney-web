import * as LucideIcons from 'lucide-react'

interface IconProps{
    name: string
}


export default function Icon({name} : IconProps){
    const LucideIcon = (LucideIcons as any)[name]

    if(!LucideIcon) return (<LucideIcons.Ban color='red'/>) //Se não encontrar um LucideIcon com o nome passado, mostrará o ícone selecionado aqui
    
    return <LucideIcon />
}