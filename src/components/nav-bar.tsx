import Link from "next/link";

interface NavBarProps{
    active: "dashboard" | "movimentações" | "categorias";
}

export default function NavBar(props: NavBarProps){
    const {active} = props
    const activeClass = "border-b-2 border-green-600 pb-4"

    const links = [
        { link: "/dashboard", label: "dashboard" },
        { link: "/transactions", label: "movimentações" },
        { link: "/categories", label: "categorias" }
    ]

    return(
        <nav className="flex px-6 pt-6 justify-between bg-slate-900">
                <h1 className="text-4xl font-bold">
                    FinMoney
                </h1>
                <ul className="flex gap-6 text-xl">
                    {links.map(link => 
                        <li key={link.label} className={link.label === active? activeClass : ""}>
                            <Link href={link.link}>{link.label}</Link>
                        </li>
                    )}

                </ul>
                <img className="size-12 rounded-full" src="http://github.com/MarsoL4.png" alt="" />
        </nav>
    )
}