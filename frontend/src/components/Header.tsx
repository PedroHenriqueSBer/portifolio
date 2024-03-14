import { FileText, Github } from "lucide-react"

export const Header = () => {
  return (
    <header className="w-full p-4 bg-slate-100 shadow flex items-center justify-between absolute">
      <div>
        <h1 className="font-semibold text-slate-900">Pedro Henrique de Sousa Bernardes</h1>
      </div>
      <div className="flex gap-2">
        <div className="hover:bg-slate-200 p-[0.5rem] rounded-full">
          <a target="_blank" href="https://github.com/PedroHenriqueSBer" className="w-full h-full">
            <Github />
          </a>
        </div>
        <a target="_blank" href="" className="flex gap-2 items-center bg-slate-800 text-slate-200 rounded px-2 hover:bg-slate-700">
          <FileText />
          Currículo
        </a>
      </div>
    </header>
  )
}