import Form from "./Form"

const Header = () => {
  


  return (
    <header className="w-full bg-slate-500 py-3 px-10 flex items-center justify-between fixed top-0 sm:flex-row md: flex-col">
      <p className="text-xl text-white font-bold mb-1 inline-block">
        HeaderApp
      </p>
      <Form />
    </header>
  )
}

export default Header