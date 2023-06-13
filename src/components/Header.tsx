import Form from "./Form"

const Header = () => {
  


  return (
    <header className="w-100 bg-slate-500 py-3 px-10 flex items-center justify-between">
      <p className="text-xl text-white font-bold">
        HeaderApp
      </p>
      <Form />
    </header>
  )
}

export default Header