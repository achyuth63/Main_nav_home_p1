import Slider from 'react-slick'

import PlanetItem from '../PlanetItem'

import {PlanetsAppContainer} from './styledComponents'

const PlanetsSlider = props => {
  const {planetsList} = props

  return (
    <PlanetsAppContainer data-testid="planets">
      <Slider>
        {planetsList.map(eachPlanet => (
          <PlanetItem key={eachPlanet.id} planetDetails={eachPlanet} />
        ))}
      </Slider>
    </PlanetsAppContainer>
  )
}

export default PlanetsSlider
