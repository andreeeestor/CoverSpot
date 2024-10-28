import { PaperPlaneTilt } from "@phosphor-icons/react"

export default function ChatEstabelecimento() {
  return (
    <main className="flex justify-center items-center grow p-5">
      <div className="w-full bg-white border border-solid border-[#ddd] shadow-xl flex flex-col rounded-xl">
        <div className="bg-[#007bff] p-4 text-center text-white rounded-t-xl">
          <h2>Chat com estabelecimento</h2>
        </div>

        <div className="grow bg-[#ddd] m-64" />

        <div className="flex items-center bg-[#007bff] p-2 rounded-b-xl">
          <button className="bg-white border-none p-2 rounded cursor-pointer">
            +
          </button>
          <input
            type="text"
            className="grow p-3 border-none rounded ml-3 mr-3"
          />

          <button className="bg-white border-none p-3 rounded cursor-pointer">
            <PaperPlaneTilt size={24} />
          </button>
        </div>
      </div>
    </main>
  );
}
