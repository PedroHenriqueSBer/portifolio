/* eslint-disable @next/next/no-img-element */
import { Header } from "@/components/Header";
import { ProgressionBar } from "@/components/ProgressionBar";
import { Card } from "@/components/card";
import { HardSkills, SoftSkills, Experiences } from '@/data/knowledge.json'
import { HomeIcon, Mail, Phone } from "lucide-react";


export default function Home() {
  return (
    <div className="bg-gray-100">
      <Header />
      <div className="flex gap-[8rem] h-screen items-center justify-center">
        <div className="flex flex-col w-[30rem] items-center justify-center">
          <h1 className="text-3xl text-slate-800 font-bold">Olá, Bem Vindo(a)</h1>
          <div className="w-[23rem] h-2 rounded-full bg-slate-700 mb-2"/>
          <div className="text-slate-800 flex gap-4 mb-4">
            <p className="flex items-center gap-2 text-sm font-light">
              <Phone className="w-4 h-4"/>
              (35) 99912-6968
            </p>
            <p className="flex items-center gap-2 text-sm font-light">
              <Mail className="w-4 h-4" />
              PedroHsB55@outlook.com
            </p>
          </div>
          
          <p className="text-center text-slate-800">
          Portfólio de Pedro Henrique de Sousa Bernardes Desenvolvedor Web Full Stack
          </p>

          
        </div>
        <img className="rounded shadow-lg" src="https://github.com/PedroHenriqueSBer/portifolio/blob/main/frontend/src/assets/Images/templateImage.png?raw=true" alt="" />
      </div>
      <div className="gap-4 flex justify-center p-8">
        <Card
          title="Hard Skills"
        > 
          <div className="w-[14rem] px-2">
            {HardSkills.map(Hs => 
              <div key={Hs.id} className="w-[16rem]">
                <h3 className="text-lg font-semibold text-slate-700">{Hs.name}</h3>
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
