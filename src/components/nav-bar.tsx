import Link from "next/link";

export default function NavBar(){
    return(
        <nav className="flex px-6 pt-6 justify-between bg-slate-900">
                <h1 className="text-4xl font-bold">
                    FinMoney
                </h1>
                <ul className="flex gap-6 text-xl">
                    <li><Link href="/dashboard">dashboard</Link></li>
                    <li><Link href="/transactions">movimentações</Link></li>
                    <li className="border-b-2 border-green-600 pb-3"><Link href="/categories">categorias</Link></li>
                </ul>
                <img className="size-12 rounded-full" src="http://github.com/MarsoL4.png" alt="" />
        </nav>
    )
}