import { useParams } from 'react-router-dom'

const RestaurentMenu = () => {
  const { id } = useParams();

  return (
    <>
      <h1>RestrauntMenu id : {id}</h1>
      <h1>Babun Restraunt</h1>
    </>
  )
}

export default RestaurentMenu;