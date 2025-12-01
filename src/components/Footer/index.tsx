import { useTranslation } from 'react-i18next';
import Menu from '../../components/Header/components/Menu'
import SocialList from '../Header/components/SocialList';

const Footer = () => {

  const { t } = useTranslation('footer');
  
  return (
    <footer className={'mt-20  w-full  p-4 '}>
      <hr className='mb-10' />
      <div className='md:space-y-25 flex '>
        <div className="w-full flex">
          <Menu variant={'footer'} />
        </div>
        
        <div className="flex flex-col justify-between items-center">
          <div className='flex flex-col items-center gap-5'>
            <span className='text-foreground'>{t("connect")}</span>
            <SocialList />
          </div>
        </div>
      </div>
      <div className='text-center w-full py-3'>
        <span className='text-foreground'>2025 © Filipe Vilas Bôas</span>
      </div>
    </footer>
  )
}

export default Footer;