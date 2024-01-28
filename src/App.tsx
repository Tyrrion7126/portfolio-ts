import Navbars from './components/Navbar'
import Greetings from "./components/Greetings"
import User from "./components/User"
import Heading from "./components/Heading"
import Repos from "./components/Repos"
import TechStack from "./components/Techstack"
import Footer from "./components/Footer"

export default function App() {
  return (
    <div>
      <Navbars />
      <Greetings name="Yon" city="Kuningan, West Java, Indonesia" />
      <User 
        name="Yon"
        avatarUrl="https://images-ext-2.discordapp.net/external/6FDB66fuwPex2we5pJZvWdnqo1uQXfevH-i9-UQ17PI/%3Fsize%3D1024/https/cdn.discordapp.com/avatars/521681056576045067/5fc0e42c8d8573a0dd2083d0e5572a21.png"
        bio='I am currently opening commissions to building custom Discord Bots for your servers!'
      />
      <Heading title="GitHub Repositories" className="my-14 md:my-16" color="bg-gradient-to-br from-sky-500 to-violet-500" />
      <Repos username="Tyrrion7126" />
      <Heading title="Tech Stack" className="my-14 md:my-16" color="bg-gradient-to-br from-sky-500 to-violet-500" />
      <TechStack />
      <Footer />
    </div>
  );
}

