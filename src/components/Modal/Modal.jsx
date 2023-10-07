import { useEffect } from 'react';
import { RxCross1 } from 'react-icons/rx';

export const Modal = ({ car, onClose }) => {
  let rentalConditions = car.rentalConditions.split('\n');
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  const handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  return (
    <div
      style={{
        position: 'fixed',
        top: '0',
        left: '0',
        width: '100vw',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        zIndex: '1200',
      }}
      onClick={handleBackdropClick}
    >
      <div
        style={{
          position: 'relative',
          backgroundColor: 'white',
          width: 541,
          height: 752,
          borderRadius: 24,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: 40,
        }}
      >
        <button
          onClick={() => onClose()}
          style={{
            backgroundColor: 'transparent',
            border: 'none',
            position: 'absolute',
            right: 8,
            top: 8,
          }}
        >
          <RxCross1 width={24} height={24}></RxCross1>
        </button>
        <div
          style={{
            backgroundImage: `url(${car.img})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            width: '100%',
            minHeight: 248,
            borderRadius: 14,
          }}
        ></div>
        <div style={{ marginTop: 14 }}>
          <h1 style={{ margin: 0, fontSize: 18 }}>
            {car.make} <span style={{ color: '#3470ff' }}>{car.model}</span>,{' '}
            {car.year}
          </h1>
          <div style={{ marginTop: 8, fontSize: 12, color: '#8a8a89' }}>
            <p style={{ margin: 0 }}>
              {car.address.split(',').slice(1, 2)} |{' '}
              {car.address.split(',').slice(2, 3)} | Id: {car.id} | Type:
              {car.type}
            </p>
            <p style={{ marginTop: 7 }}>
              Fuel consumption: {car.fuelConsumption} | Engine size:{' '}
              {car.engineSize}
            </p>
          </div>
          <p style={{ fontSize: 14, marginTop: 8, marginBottom: 8 }}>
            {car.description}
          </p>
          <div style={{ marginTop: 24 }}>
            <h2 style={{ fontSize: 14, marginTop: 8, marginBottom: 8 }}>
              Accessories and functionalities:
            </h2>
            <p style={{ margin: 0, fontSize: 12, color: '#8a8a89' }}>
              {car.accessories.slice(0, 1)} | {car.accessories.slice(1, 2)} |{' '}
              {car.accessories.slice(2, 3)}
            </p>
            <p
              style={{
                margin: 0,
                fontSize: 12,
                color: '#8a8a89',
                marginTop: 4,
              }}
            >
              {car.functionalities.slice(0, 1)} |{' '}
              {car.functionalities.slice(1, 2)} |{' '}
              {car.functionalities.slice(2, 3)}
            </p>
          </div>
          <div style={{ marginTop: 24 }}>
            <h2 style={{ fontSize: 14, marginTop: 8, marginBottom: 8 }}>
              Rental Conditions:
            </h2>
            <ul
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                listStyle: 'none',
                padding: 0,
                gap: 8,
              }}
            >
              {rentalConditions.map(item => (
                <li
                  key={item}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '7px 14px',
                    borderRadius: 35,
                    height: 32,
                    backgroundColor: '#f9f9f9',
                    fontSize: 12,
                  }}
                >
                  {item}
                </li>
              ))}
              <li
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '7px 14px',
                  borderRadius: 35,
                  height: 32,
                  backgroundColor: '#f9f9f9',
                  fontSize: 12,
                }}
              >
                Mileage:{' '}
                <span style={{ color: '#3470FF' }}> {car.mileage}</span>
              </li>
              <li
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '7px 14px',
                  borderRadius: 35,
                  height: 32,
                  backgroundColor: '#f9f9f9',
                  fontSize: 12,
                }}
              >
                Price:{' '}
                <span style={{ color: '#3470FF' }}>{car.rentalPrice}</span>
              </li>
            </ul>
          </div>
        </div>
        <button
          style={{
            width: 168,
            height: 44,
            backgroundColor: '#3470ff',
            border: '1px solid #3470ff',
            borderRadius: 12,
            color: 'white',
          }}
        >
          Rental car
        </button>
      </div>
    </div>
  );
};
