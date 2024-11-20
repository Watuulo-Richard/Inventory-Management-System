/* eslint-disable react/prop-types */
import HashLoader from 'react-spinners/HashLoader'

const override = {
    display: 'block',
    margin: '100px auto'
}
const Spinners = ({ loading }) => {
  return (
    <HashLoader 
        color='#1850de'
        loading={ loading }
        cssOverride={override}
        size={100}
    />
  )
}

export default Spinners