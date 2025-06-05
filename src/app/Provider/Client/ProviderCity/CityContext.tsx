import { createContext } from 'react'

interface CityContextProps {
  cityEn: string
}

const CityContext = createContext<CityContextProps | null>(null)

export default CityContext