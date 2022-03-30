import React, { useContext } from 'react'

const LayoutContext = React.createContext<any>(null)

export function useLayout() {
  return useContext(LayoutContext)
}
export function LayoutProvider({ children }: any) {
  return (
    <LayoutContext.Provider value={{}}>
      <div>{children}</div>
    </LayoutContext.Provider>
  )
}
