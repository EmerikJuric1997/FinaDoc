import { Card } from "flowbite-react";
import { TbWorldWww, TbPhoneCall } from "react-icons/tb";
import { NavLink } from "react-router-dom";

export default function CompanyInformation() {
  return (
    <div>
      <div className="gap-2 pt-5 flex">
        <div className="w-2/5">
          <Card className="h-28 border-none shadow-none bg-gray-100">
            <p className="text-xs text-gray-700 dark:text-gray-400">
              <span className="text-md font-bold tracking-tight text-gray-900 dark:text-white">PODRAVKA prehrambena industrija, d.d.</span><br></br>
              Adresa: Koprivnica, Ante Starčevića 32 <br></br>
              OIB: 42784930291<br></br>
              MB: 94837293<br></br>
              Godina osnivanja: 2009. Veličina: veliki poduzetnik Status: <span className="text-green-500">aktivan</span>
            </p>
          </Card>
        </div>
        <div className="w-1/5">
          <Card className="h-28 border-none shadow-none bg-gray-100 text-center">
            <p className="text-md font-bold">Bonitet:<br></br>
              <span className="text-5xl text-green-500">
                A
              </span></p>
          </Card>
        </div>
        <div className="w-1/5">
          <Card className="h-28 border-none shadow-none bg-gray-100">
            <div className="grid grid-rows-2 gap-5 text-xs mx-auto">
              <div className="flex">
                <TbPhoneCall className="h-5 w-5" />
                <a className="pt-1 pl-2" href="tel:+6199942413">
                  +385911234567
                </a>
              </div>
              <div className="flex">
                <TbWorldWww className="h-5 w-5" />
                <p className="pl-2 pt-1">
                  <NavLink to="http://www.podravka.hr" target="_blank">www.podravka.hr</NavLink>
                </p>
              </div>
            </div>
          </Card>
        </div>
        <div className="w-1/5 grid grid-rows-2 grid-flow-col gap-1">
          <Card className="h-16 text-xs text-left border-none shadow-none bg-gray-100">
            <p className="font-bold">Transakcijski račun:<br></br>
              HR294012044950<br></br>
              Zagrebačka banka d.d.
            </p>
          </Card>
          <Card className="h-11 border-none shadow-none bg-gray-100">
            <p className="text-xs">
              Nadležni sud:<br></br>
              Trgovački sud u Zagrebu
            </p>
          </Card>
        </div>
      </div>
      <div className="gap-2 pt-1 flex">
        <div className="w-1/2">
          <p className="text-dark font-bold pl-6">
            Vlasnici:
          </p>
          <p className="text-dark text-sm pl-6">
            Podravka, jedini osnivač d.o.o.
          </p>
        </div>
        <div className="w-1/2">
          <p className="text-dark font-bold pl-6">
            Primarna djelatnost:
          </p>
          <p className="text-dark text-sm pl-6">
            Ostale financijske uslužne djelatnosti, osim osiguranja i mirovinskih fondova
          </p>
        </div>
      </div>
      <hr className="h-1 mt-3 bg-gray-200 rounded"></hr>
      <h1 className="pt-7 pl-6 text-4xl font-bold">Uvid u poslovanje</h1>
    </div>
  )
}
