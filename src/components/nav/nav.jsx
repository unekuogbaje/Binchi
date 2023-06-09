import { Fragment } from 'react';
import { ReactComponent as Logo } from '../../assets/logo.svg';

const Nav = () => {
    return (
      <Fragment>
        <div className='navbar fixed top-0 left-0 right-0'>
          <div className='container py-4 sm:py-2 md:py-12 lg:py-16'>
            <Logo className='h-10 sm:h-12 md:h-16 lg:h-28'/>
          </div>
        </div>
      </Fragment>
    );
  };

  export default Nav;