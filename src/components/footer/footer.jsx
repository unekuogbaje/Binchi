import { Fragment } from 'react';

const Footer = () => {
    return (
      <Fragment>
        <div className='footer fixed bottom-0 left-0 right-0'>
          <div className='container flex justify-end py-5'>
            <h2 className='h-fit'>© 2023 Binchi</h2>
          </div>
        </div>
      </Fragment>
    );
  };

  export default Footer;