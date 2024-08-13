import Circle from "./Circle"
import EmptyCircle from "./EmptyCircle"
import Image from "next/image"

const Database = () => {
  return (
    <div className="flex flex-col space-y-2 pl-4 w-[50%]">
      <h2>Base de données</h2>
      <ul className="space-y-2 pl-4 grid">
        <li className="grid grid-cols-2 items-center">
          <div className="labelSkill">
            <Image
              src="/images/skills/mySQL.png"
              alt="mySQL"
              width={26}
              height={26}
            />
            <span>mySQL</span>
          </div>
          <div className="flex space-x-2">
            <Circle />
            <Circle />
            <Circle />
            <Circle />
            <EmptyCircle />
          </div>
        </li>
        <li className="grid grid-cols-2 items-center">
          <div className="labelSkill">
            <Image
              src="/images/skills/postgressql.png"
              alt="postgressql"
              width={21}
              height={21}
            />
            <span>PostgresSQL</span>
          </div>
          <div className="flex space-x-2">
            <Circle />
            <Circle />
            <Circle />
            <Circle />
            <EmptyCircle />
          </div>
        </li>
        <li className="grid grid-cols-2 items-center">
          <div className="labelSkill">
            <Image
              src="/images/skills/mongodb.png"
              alt="mongodb"
              className="ml-[0.3vw]"
              width={10}
              height={10}
            />
            <span>MongoDB</span>
          </div>
          <div className="flex space-x-2">
            <Circle />
            <Circle />
            <EmptyCircle />
            <EmptyCircle />
            <EmptyCircle />
          </div>
        </li>
      </ul>
    </div>
  )
}

export default Database
