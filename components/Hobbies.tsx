import Image from "next/image"

const Hobbies = () => {
  return (
    <section className="panel space-y-6 p-[4rem]">
      <h1>Centres d&apos;intérêts</h1>
      <ul className="flex flex-row space-x-24 pl-4">
        <div className="hover:scale-[125%] transition-all duration-300">
          <Image
            title="Jeux-vidéo"
            src="/images/gaming.png"
            alt="gaming"
            width={70}
            height={70}
          />
          <h2>Jeux-vidéo</h2>
        </div>
        <div className="hover:scale-[125%] transition-all duration-300">
          <Image
            title="Cinéma"
            src="/images/cinema.png"
            alt="cinema"
            width={70}
            height={70}
          />
          <h2>Cinéma</h2>
        </div>
        <div className="hover:scale-[125%] transition-all duration-300">
          <Image
            title="Voyager"
            src="/images/travel.png"
            alt="travel"
            width={70}
            height={70}
          />
          <h2>Voyages</h2>
        </div>
        <div className="hover:scale-[125%] transition-all duration-300">
          <Image
            title="Musique"
            src="/images/music.png"
            alt="music"
            width={70}
            height={70}
          />
          <h2>Musique</h2>
        </div>

        <div className="hover:scale-[125%] transition-all duration-300">
          <Image
            title="Jeux de société"
            src="/images/boardgame.png"
            alt="boardgame"
            width={70}
            height={70}
          />
          <h2>Jeux de société</h2>
        </div>
        <div className="hover:scale-[125%] transition-all duration-300">
          <Image
            title="Basket"
            src="/images/basket.png"
            alt="basket"
            width={70}
            height={70}
          />
          <h2>Basket</h2>
        </div>
      </ul>
    </section>
  )
}

export default Hobbies
