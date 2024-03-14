import { Github } from "lucide-react"

export const Header = () => {
  return (
    <header className="w-full p-4 bg-slate-100 shadow flex items-center justify-between absolute">
      <div>
        <h1 className="font-semibold text-slate-900">Pedro Henrique de Sousa Bernardes</h1>
      </div>
      <div>
        <div className="hover:bg-slate-200 p-[0.5rem] rounded-full">
          <a target="_blank" href="https://github.com/PedroHenriqueSBer" className="w-full h-full">
            <Github />
          </a>
        </div>

      </div>
    </header>
  )
}