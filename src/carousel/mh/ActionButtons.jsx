import React from 'react';
import ActionButton from './ActionButton';

const ActionButtons = () => {
  const handleBookTestRide = () => {
    window.open(
      'https://www.royalenfield.com/in/en/forms/book-a-test-ride',
      '_blank'
    ); 
  };

  const handleConfigureNow = () => { 
    window.location.href = 'https://makeityours.royalenfield.com/configurator?_gl=1*57q5if*_gcl_au*OTkzNzI0NjAuMTcyNzc3Mjg5Mw..*_ga*MTg2ODAzMTUzOS4xNzI3NzcyODk0*_ga_7746PERT32*MTcyOTE0NTQ0Ny4xMy4wLjE3MjkxNDU0NDcuNjAuMC4w';
  };

  return (
    <div className="flex flex-row justify-center gap-4 w-full max-w-md mx-auto px-4">
      <ActionButton variant="dark" onClick={handleConfigureNow}>CONFIGURE NOW</ActionButton>
      <ActionButton variant="yellow" onClick={handleBookTestRide}>
        BOOK A TEST RIDE
      </ActionButton>
    </div>
  );
};

export default ActionButtons;
