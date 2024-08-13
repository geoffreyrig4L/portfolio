const AcademicExperience = () => {
  return (
    <section className="panel space-y-6 p-[4rem]">
      <h1>Expériences personnelles et académiques</h1>
      <ul className="flex flex-col space-y-2 list-disc pl-4">
        <li>
          Le back-end d&apos;un site web exigent. Le site web propose la vente
          de mobilier. Programmé en Java accompagné de Spring. ***
        </li>
        <li>
          Un forum de discussion. Programmé en JS. Je me suis occupé du back
          avec ObjectionJs, NodeJs et Express. Mais aussi du front avec React.
          ***
        </li>
        <li>
          Un tableau de bord qui répertorie nos entrées et sortis d&apos;argent.
          Il ne comporte qu&apos;un front et est programmé en JS avec React.
        </li>
        <li>
          Rédiger un mémoire de 80 pages qui traite de mon entreprise et de mon
          expérience au sein de celle-ci.
        </li>
        <p className="text-tertiary">
          <b>***</b> comprend un système d&apos;authentication des utilisateurs
          utilisant des tokens auto-générés. Les mots de passes sont hashés.
        </p>
      </ul>
    </section>
  )
}

export default AcademicExperience
