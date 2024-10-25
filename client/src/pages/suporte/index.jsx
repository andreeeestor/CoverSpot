import Header from "../../components/Header";
import Footer from "../../components/Footer"

export default function SuportePage() {
  return (
    <>
      <Header />
      <main className="flex justify-center items-center grow p-5">
        <div className="w-[400px] bg-white border border-solid border-[#ddd] shadow-xl flex flex-col">
          <div className="bg-[#007bff] p-4 text-center text-white">
            <h2>Chat com estabelecimento</h2>
          </div>

          <div className="grow bg-[#ddd] m-64" />

          <div className="flex items-center bg-[#007bff] p-2">
            <button className="bg-white border-none p-2 rounded cursor-pointer">+</button>
            <input type="text" className="grow p-3 border-none rounded ml-3 mr-3" />
            
            <button className="bg-white border-none p-2 rounded cursor-pointer">
              <img src="" alt="" />
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
