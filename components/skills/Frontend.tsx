import Circle from "./Circle"
import EmptyCircle from "./EmptyCircle"
import Image from "next/image"

const Frontend = () => {
  return (
    <div className="flex flex-col space-y-2 pl-4 w-[50%]">
      <h2>Frontend</h2>
      <ul className="space-y-2 pl-4 grid">
        <li className="grid grid-cols-2 items-center">
          <div className="labelSkill">
            <Image
              src="/images/skills/nextjs.png"
              alt="nextjs"
              width={21}
              height={21}
            />
            <span>NextJs</span>
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
              src="/images/skills/typescript.png"
              alt="typescript"
              width={21}
              height={21}
            />
            <span>TypeScript</span>
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
              src="/images/skills/javascript.png"
              alt="javascript"
              width={21}
              height={21}
            />
            <span>JavaScript</span>
          </div>
          <div className="flex space-x-2">
            <Circle />
            <Circle />
            <Circle />
            <Circle />
            <EmptyCircle />
          </div>
        </li>
        <li className="w-[60%] pt-[1rem]">
          <p className="font-bold text-secondary text-[11px]">Autre</p>
          <div className="text-xs">
            VueJs, TailwindCss, Shadcn, NextUi, Formik, React Hook Form, Yup,
            Zod, Tanstack Query, FakerJs
            <span className="text-secondary">, Next Auth</span>
          </div>
        </li>
      </ul>
    </div>
  )
}

export default Frontend
