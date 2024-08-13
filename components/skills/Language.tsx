import Image from "next/image"

const Language = () => {
  return (
    <div className="flex flex-col space-y-2 pl-4 w-[50%]">
      <h2>Langues étrangères</h2>
      <ul className="space-y-2 pl-4 grid">
        <li className="grid grid-cols-2 items-center">
          <div className="labelSkill">
            <Image
              src="/images/skills/english.png"
              alt="english"
              width={21}
              height={21}
            />
            <span>Anglais</span>
          </div>
          <div className="flex space-x-2">B2</div>
        </li>{" "}
        <li className="grid grid-cols-2 items-center">
          <div className="labelSkill">
            <Image
              src="/images/skills/spanish.png"
              alt="spanish"
              width={21}
              height={21}
            />
            <span>Espagnol</span>
          </div>
          <div className="flex space-x-2">Scolaire</div>
        </li>{" "}
      </ul>
    </div>
  )
}

export default Language
