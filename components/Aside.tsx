import Image from "next/image";

export default function Aside() {
  return (
    <aside className="ui-aside-dash pt-6 bg-white  w-40 flex-shrink-0 border-r border-gray-200 flex-col hidden sm:flex">
      <div className="text-isa-color font-medium flex flex-col items-center justify-center gap-4">
        <Image
          src="https://isalab.com.br/assets/isaLogoWritten.svg"
          width={50}
          height={90}
          alt="ISA"
        />
        <p>@Empresa</p>
      </div>
      <div className="flex mx-auto flex-grow mt-4 flex-col text-gray-400 space-y-4">
        <button className="h-10 w-12 rounded-[12px] Button secondary w-full ">
          Pacientes
        </button>

        <button className="h-10 w-12 rounded-[12px] Button secondary disabled w-full opacity-50 cursor-not-allowed">
          Produtos
        </button>

        <button className="h-10 w-12 rounded-[12px] Button secondary disabled w-full opacity-50 cursor-not-allowed">
          Transportes
        </button>

        <button className="h-10 w-12 rounded-[12px] Button secondary disabled w-full opacity-50 cursor-not-allowed">
          Enfermeiros
        </button>
      </div>
    </aside>
  );
}
