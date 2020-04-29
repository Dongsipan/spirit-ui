import { RefObject, useEffect } from "react";

function useWave(ref: RefObject<HTMLElement>) {
  useEffect(() => {
    const listener = (event: MouseEvent) => {
      console.log(event)
    }
    document.addEventListener('click', listener)
    return () => {
      document.removeEventListener('click', listener)
    }
  }, [ref])
}

export default useWave;