import Circle from "./Circle"
import EmptyCircle from "./EmptyCircle"
import Image from "next/image"

const Backend = () => {
  return (
    <div className="flex flex-col space-y-2 pl-4 w-[50%]">
      <h2>Backend</h2>
      <ul className="space-y-2 pl-4 grid">
        <li className="grid grid-cols-2 items-center">
          <div className="labelSkill">
            <Image
              src="/images/skills/prisma.png"
              alt="prisma"
              width={21}
              height={21}
            />
            <span>Prisma</span>
          </div>
          <div className="flex space-x-2">
            <Circle />
            <Circle />
            <Circle />
            <EmptyCircle />
            <EmptyCircle />
          </div>
        </li>{" "}
        <li className="grid grid-cols-2 items-center">
          <div className="labelSkill">
            <Image
              src="/images/skills/java.png"
              alt="java"
              width={21}
              height={21}
            />
            <span>Java</span>
          </div>
          <div className="flex space-x-2">
            <Circle />
            <Circle />
            <Circle />
            <EmptyCircle />
            <EmptyCircle />
          </div>
        </li>{" "}
        <li className="grid grid-cols-2 items-center">
          <div className="labelSkill">
            <Image
              src="/images/skills/spring.png"
              alt="spring"
              width={21}
              height={21}
            />
            <span>Spring Boot</span>
          </div>
          <div className="flex space-x-2">
            <Circle />
            <Circle />
            <Circle />
            <EmptyCircle />
            <EmptyCircle />
          </div>
        </li>{" "}
        <li className="grid grid-cols-2 items-center">
          <div className="labelSkill">
            <Image
              src="/images/skills/node.png"
              alt="node"
              width={21}
              height={21}
            />
            <span>NodeJs</span>
          </div>
          <div className="flex space-x-2">
            <Circle />
            <Circle />
            <Circle />
            <EmptyCircle />
            <EmptyCircle />
          </div>
        </li>{" "}
        <li className="grid grid-cols-2 items-center">
          <div className="labelSkill">
            <Image
              src="/images/skills/junit.png"
              alt="junit"
              width={21}
              height={21}
            />
            <span>JUnit</span>
          </div>
          <div className="flex space-x-2">
            <Circle />
            <Circle />
            <Circle />
            <EmptyCircle />
            <EmptyCircle />
          </div>
        </li>{" "}
      </ul>
    </div>
  )
}

export default Backend
