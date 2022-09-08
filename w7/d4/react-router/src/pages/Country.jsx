import axios from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const Country = () => {
  const { cca2 } = useParams()
  const navigate = useNavigate()

  const [countryInfo, setCountryInfo] = useState(null)

  useEffect(() => {
    const url = `https://restcountries.com/v3.1/alpha/${cca2}`

    // let's use an API to get info about this country
    axios
      .get(url)
      .then((response) => {
        const capital = response.data[0].capital[0]
        const commonName = response.data[0].name.common
        console.log(capital, commonName)
        setCountryInfo({ capital, commonName })
      })
      .catch(() => {
        // redirect the user to a page with a useful list
        navigate('/countries')
      })
  }, [cca2, navigate])

  if (!countryInfo) {
    return <p>I AM STILL LOADING</p>
  }

  return (
    <p>
      {countryInfo.commonName}! Its capital is {countryInfo.capital}!
    </p>
  )
}

export default Country
