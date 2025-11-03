import Menu from '../../components/Header/components/Menu'
import SocialList from '../Header/components/SocialList';

const Footer = () => {


  
  return (
    <footer className={'mt-20  w-full  p-4 '}>
      <hr className='mb-10' />
      <div className='space-y-25'>
        <div className="w-full flex">
          <Menu variant={'footer'} />
        </div>
        <div className="flex justify-between items-center">
          <div>
            <span>2025 © Filipe Vilas Bôas</span>
          </div>
          <div className='flex items-center gap-5'>
            <span>Vamos nos conectar!</span>
            <SocialList />
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;