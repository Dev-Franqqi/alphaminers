
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { signOut } from "firebase/auth";
import { auth } from '../components/firebase';
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie"


export default function MenuPopupState() {

    const navigate = useNavigate()
    const {t} = useTranslation();

    

    const logoutHandler = ()=>{

        signOut(auth)
        .then(()=>{
          Cookies.remove("User");
          navigate('/login')
        })
        .catch(err=>{
          console.log(err)
          // setError(true)
          // setErrmessage(err.message)
        })
      
      }
      
  
  return (
    <PopupState variant="popover" popupId="demo-popup-menu">
      {(popupState) => (
        <>

           <svg {...bindTrigger(popupState)} xmlns="http://www.w3.org/2000/svg" fill="none"  viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="font-bold text-white w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
</svg> 

       
          <Menu {...bindMenu(popupState)}>
            <MenuItem onClick={popupState.close}>
        <Link to='/'>{t('dashboard.homepage')}</Link>


            </MenuItem>
            <MenuItem onClick={popupState.close}>
        <Link to='https://wa.me/+12366023869' target='_blank'>{t('dashboard.deposit')}</Link> </MenuItem>


            <MenuItem>
        <Link to='https://wa.me/+12366023869' target='_blank'>{t('dashboard.withdrawal')}</Link>

            
            </MenuItem>
            <MenuItem>

        <Link to='https://wa.me/+12366023869' >{t('dashboard.customerSup')}</Link>
            </MenuItem>
            <MenuItem onClick={logoutHandler}>{t('dashboard.logOut')}</MenuItem>

          </Menu>
        </>
      )}
    </PopupState>
  );
} 