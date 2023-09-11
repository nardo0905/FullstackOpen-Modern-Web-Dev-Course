import axios from 'axios'

const base_url = "https://studies.cs.helsinki.fi/restcountries/api"

const getCountryDataByName = async (countryName) => {
    const request = axios.get(`${base_url}/name/${countryName}`)
    const response = await request
    return response.data
}

export default {getCountryDataByName}
