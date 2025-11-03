import Menu from '../../components/Header/components/Menu'
import SocialList from '../Header/components/SocialList';

const Footer = () => {
  return (
    <footer className="mt-20  w-full bg-[#e9e9e9] p-4 space-y-25">
      <div className="w-full flex">
        <Menu variant={'footer'} />
      </div>
      <div className="flex text-black justify-between items-center">
        <div>
          <span>2025 © Filipe Vilas Bôas</span>
        </div>
        <div className='flex items-center gap-5'>
          <span>Vamos nos conectar!</span>
          <SocialList />
        </div>
      </div>
    </footer>
  )
}

export default Footer;