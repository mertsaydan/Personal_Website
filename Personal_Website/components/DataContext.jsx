import { createContext, useContext, useState } from 'react'
import data from './data'

const DataContext = createContext(null)

export function DataProvider({ children }) {
  const [locale, setLocale] = useState('en')

  const value = {
    locale,
    setLocale,
    data: data[locale],
    allData: data,
  }

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>
}

export function useData() {
  const context = useContext(DataContext)
  if (!context) {
    throw new Error('useData must be used within DataProvider')
  }
  return context
}
