import React, {useContext} from 'react'

const ContextAuth = React.createContext()

export function AuthProvider({children, value}) {
  return (
    <ContextAuth.Provider value={value}>
      {children}
    </ContextAuth.Provider>
  )
}

export function useAuthValue(){
  return useContext(ContextAuth)
}
