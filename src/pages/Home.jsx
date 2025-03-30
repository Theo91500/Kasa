import { Banner } from "../components/Banner/Banner"
import { Card } from "../components/Card/Card"
import homeImage  from "../../public/assets/img/HomeWallpaper.jpg"

function Home() {
  return <main>
      <Banner image={homeImage} altText="Bannière Home" content="Chez vous, partout et ailleurs"/>
      <Card/>
    </main>
}

export default Home
