import PlanetsSlider from './components/PlanetsSlider'
import Header from './components/Header'

import './App.css'

const planetsList = [
  {
    id: 'c22777fe-f72e-11eb-9a03-0242ac130003',
    name: 'Money Heist',
    imageUrl:
      'https://res.cloudinary.com/des7uyibo/image/upload/v1637860311/hiest_d0rqzz.jpg',
    description:
      'This original Netflix series, originally titled La Casa de Papel, follows the Professor (Álvaro Morte), a criminal mastermind who brings eight thieves together to take hostages and lock themselves in the Royal Mint of Spain as he manipulates the police to carry out his plan.',
  },
  {
    id: 'c2277a74-f72e-11eb-9a03-0242ac130003',
    name: 'Dark',
    imageUrl:
      'https://res.cloudinary.com/des7uyibo/image/upload/v1637860467/dark_lf0ngy.jpg',
    description:
      'It ran for three seasons from 2017 to 2020. In the aftermath of a childs disappearance, Dark follows characters from the fictional German town of Winden as they pursue the truth. They follow connections between four estranged families to unravel a sinister time travel conspiracy which spans several generations.',
  },
  {
    id: 'c2277b64-f72e-11eb-9a03-0242ac130003',
    name: 'VI Kings',
    imageUrl:
      'https://res.cloudinary.com/des7uyibo/image/upload/v1637860476/vikings_dgctb8.jpg',
    description:
      'The show portrays Ragnar as a farmer who rises to fame by successful raids into England, and eventually becomes a Scandinavian King, with the support of his family and fellow warriors. ... The series broadly follows the exploits of the legendary Viking chieftain Ragnar Lothbrok and his crew, and later those of his sons.',
  },
  {
    id: 'c2277c2c-f72e-11eb-9a03-0242ac130003',
    name: 'YOU',
    imageUrl:
      'https://res.cloudinary.com/des7uyibo/image/upload/v1637860310/you_xxc8xy.jpg',
    description:
      'Premise. The first season follows the story of Joe Goldberg, a bookstore manager in New York, who upon meeting Guinevere Beck, an aspiring writer, becomes infatuated with her. He feeds his toxic obsession using social media and other technology to track her presence and remove obstacles to their romance.',
  },
  {
    id: 'c2277cea-f72e-11eb-9a03-0242ac130003',
    name: 'Squid Game',
    imageUrl:
      'https://res.cloudinary.com/des7uyibo/image/upload/v1637860310/game_yzoatf.jpg',
    description:
      'A survival game that has a whopping 45.6 billion-won prize at stake.Hundreds of cash-strapped players accept a strange invitation to compete in childrens games. Inside, a tempting prize awaits with deadly high stakes. A survival game that has a whopping 45.6 billion-won prize at stake.',
  },
]

const App = () => (
  <div>
    <Header />
    <PlanetsSlider planetsList={planetsList} />
  </div>
)

export default App
