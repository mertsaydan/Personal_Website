import { createContext, useContext, useEffect, useState } from 'react'
import data from './data'

const DataContext = createContext(null)

const LOCALE_STORAGE_KEY = 'personal-website-locale'
const DARK_MODE_STORAGE_KEY = 'personal-website-dark-mode'
const isBrowser = typeof window !== 'undefined'

function getStoredValue(key, fallback) {
  if (!isBrowser) {
    return fallback
  }

  return window.localStorage.getItem(key) || fallback
}

function setStoredValue(key, value) {
  if (!isBrowser) {
    return
  }

  window.localStorage.setItem(key, value)
}

export function DataProvider({ children }) {
  const [locale, setLocale] = useState(() => getStoredValue(LOCALE_STORAGE_KEY, 'en'))
  const [darkMode, setDarkMode] = useState(() => getStoredValue(DARK_MODE_STORAGE_KEY, 'false') === 'true')

  useEffect(() => {
    setStoredValue(LOCALE_STORAGE_KEY, locale)
  }, [locale])

  useEffect(() => {
    setStoredValue(DARK_MODE_STORAGE_KEY, String(darkMode))
  }, [darkMode])

  const value = {
    locale,
    setLocale,
    darkMode,
    setDarkMode,
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
