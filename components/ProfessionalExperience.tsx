const ProfessionalExperience = () => {
  return (
    <section className="panel space-y-6 p-[4rem]">
      <h1>Expériences professionnelles</h1>
      <h2>SNCF Connect & Tech - Sep 2021 / Sep 2024</h2>
      <ul className="flex flex-col space-y-2 list-disc pl-4">
        <li>
          Programmer une application web en TypeScript qui permet à
          l&apos;utilisateur de récupérer les itinéraires qui relient un point A
          à un point B. La sortie est visible de différentes façons: XML, sur
          une carte, dans un tableau, affichage &quot;maison&quot;
        </li>
        <li>
          Programmer en Java un lanceur d&apos;alerte qui déclenche une alerte
          en fonction du nombre de trains de la SNCF perturbés.
        </li>
        <li>
          Corriger et refactoriser le code de notre application via Sonar Lint
        </li>
      </ul>
    </section>
  )
}

export default ProfessionalExperience
