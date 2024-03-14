import { Header } from "@/components/Header";
import { ProgressionBar } from "@/components/ProgressionBar";
import { Card } from "@/components/card";
import { HardSkills, SoftSkills, Experiences } from '@/data/knowledge.json'


export default function Home() {
  return (
    <div className="bg-gray-100">
      <Header />
      <div className="flex justify-center h-screen items-center rounded-full">
        <div className="flex flex-col w-[30rem] items-center justify-center">
          <h1 className="text-2xl text-slate-800">Olá, Bem Vindo(a)</h1>
          <div className="w-[14rem] h-2 rounded-full bg-slate-700 mb-4"/>

          <div className="text-center text-slate-800">
            Portifólio do Pedro Henrique de Sousa Bernardes, Um desenvolvedor Web fullsteack
          </div>
        </div>
        <img src="https://github.com/PedroHenriqueSBer/portifolio/blob/main/frontend/src/assets/Images/templateImage.png?raw=true" alt="" />
      </div>
      <div className="gap-4 flex justify-center p-8">
        <Card
          title="Hard Skills"
        > 
          <div className="w-[14rem] px-2">
            {HardSkills.map(Hs => 
              <div key={Hs.id} className="w-[16rem]">
                <h3 className="text-lg font-semibold">{Hs.name}</h3>
                <div className="px-2">
                  <ProgressionBar percentage={Hs.percentage}  />
                </div>
              </div>
            )}
            
          </div>
        </Card>
        <div className="flex flex-col gap-2">
          <Card
            title="Soft Skills"
          > 
            <div className="flex flex-col gap-1">
              {SoftSkills.map(Ss => 
                <h3 className="text-slate-700 font-semibold" key={Ss.id}>{"> "}{Ss.name}</h3>
              )}
            </div>
          </Card>
          <Card
            title="Experiências"
          > 
            <div className="flex flex-col gap-1">
              {Experiences.map(e => 
                <div key={e.id} className="px-2 py-1">
                  <div className="flex gap-2 items-center border-b-2 border-slate-900 w-fit px-2">
                    <h1 className="font-semibold text-slate-800">{e.name}</h1>
                    -
                    <p className="text-sm text-slate-800">{e.Duration}</p>
                  </div>
                  <p className="text-slate-800 px-3">{e.description}</p>
                </div>
              )}
            </div>
          </Card>
        </div>

      </div>
    </div>
  );
}
