const Education = () => {
  return (
    <section className="panel space-y-6">
      <h1 className="pl-[4rem]">Formation</h1>
      <div className="flex flex-row items-center p-[5rem] justify-between bg-secondary w-full overflow-auto">
        <div className="flex flex-col space-y-2">
          <h3>2022 à 2024</h3>
          <h2 className="text-[32px]">BAC +5</h2>
          <h2 className="text-[18px] whitespace-nowrap">
            Mastère Développement
          </h2>
          <h3>SUP DE VINCI</h3>
        </div>
        <div className="flex flex-col space-y-2">
          <h3>2021 à 2022</h3>
          <h2 className="text-[32px]">BAC +3 </h2>
          <h2 className="text-[18px] whitespace-nowrap">
            Bachelor Développement
          </h2>
          <h3>SUP DE VINCI</h3>
        </div>
        <div className="flex flex-col space-y-2">
          <h3>2019 à 2021</h3>
          <h2 className="text-[32px]">BAC +2</h2>
          <h2 className="text-[18px] whitespace-nowrap">BTS SIO SLAM</h2>
          <h3>CFA INSTA</h3>
        </div>
      </div>
    </section>
  )
}

export default Education
