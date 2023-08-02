import { createContext, useContext, useState } from 'react'

const ZIndexContext = createContext();

export function ZIndexFinder( { children,zIndex }) {
    const [maxZIndex, setMaxZIndex] = useState(zIndex || 0);

    const updateMaxZIndex = (zIndex) => {
        setMaxZIndex(Math.max(zIndex,maxZIndex));
    }

  return (
    <ZIndexContext.Provider value={{ maxZIndex, updateMaxZIndex }}>
        {children}
    </ZIndexContext.Provider>
  )
}

export function useZIndex() {
    return useContext(ZIndexContext);
}