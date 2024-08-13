import Backend from "./Backend"
import Database from "./Database"
import Frontend from "./Frontend"
import Language from "./Language"

const Skills = () => {
  return (
    <section className="panel p-[4rem]">
      <h1>Compétences</h1>
      <div className="flex flex-col justify-around flex-wrap overflow-auto p-[5rem]">
        <Database />
        <Frontend />
        <Backend />
        <Language />
      </div>
    </section>
  )
}

export default Skills
