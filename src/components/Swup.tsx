import Swup from 'swup'
import type { Options as SwupOptions } from 'swup'

interface SwupComponentProps {
  options?: Partial<SwupOptions>
}

const SwupComponent = ({ options }: SwupComponentProps) => {
  const swup = new Swup(options)

  return <></>
}

export default SwupComponent
