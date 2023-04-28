import { Fragment } from 'react';
import { ReactComponent as Logo } from '../../assets/logo.svg';

const NavBar = () => {
    return (
      <Fragment>
        <div className='navbar fixed top-0 left-0 right-0'>
          <div className='container py-7 sm:py-10 md:py-16 lg:py-20'>
            <Logo className='h-10 sm:h-12 md:h-16 lg:h-20 fill-white'/>
          </div>
          
        </div>
      </Fragment>
    );
  };

  export default NavBar;