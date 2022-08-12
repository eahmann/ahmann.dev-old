import CustomLink from '../CustomLink'
import clsx from 'clsx'
import { ILink } from '@/types/ILink'

interface Props {
  link: ILink

  children: React.ReactNode
  className?: string
}

const ButtonLink: React.FC<Props> = ({ link, children, className }) => {
  return (
    <CustomLink
      link={link}
      className={clsx(
        'text-center text-gray-50 rounded-sm p-4 border-[1px] border-brand hover:bg-pizazz-500/10',
        className
      )}
    >
      {children}
    </CustomLink>
  )
}

export default ButtonLink
