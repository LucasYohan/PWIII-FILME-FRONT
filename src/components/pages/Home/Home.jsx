import style from "./Home.module.css"
import NavBar from "../../layout/Navbar/Navbar"

function Home() {
  return (
    <div className={style.Home}>
      <p className={style.Texto}>Seja-Bem Vindo ao ResenhaPOP!!</p>
    </div>
  )
}

export default Home