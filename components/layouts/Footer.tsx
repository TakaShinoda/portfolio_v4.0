import { FC } from 'react'
import { Separator } from '../ui/Separator'

export const Footer: FC = () => {
  return (
    <footer aria-labelledby="footer-heading">
      <div className="mx-auto max-w-7xl px-6 pb-8 lg:px-8">
        <Separator />
        <small className="text-xs leading-5 text-gray-800 dark:text-gray-300 mt-8">
          &copy; 2023 tttttt_621_s
        </small>
      </div>
    </footer>
  )
}
