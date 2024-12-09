import React, { useState, useEffect, ComponentType } from 'react';

interface WithDeviceDetectionProps {}

const withDeviceDetection = <P extends object>(WrappedComponent: ComponentType<P>) => {
  const WithDeviceDetection: React.FC<P & WithDeviceDetectionProps> = (props) => {
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
      const handleResize = () => setWidth(window.innerWidth);
      window.addEventListener('resize', handleResize);
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);

    const isMobile = width <= 768; // Adjust the value as needed for your breakpoint

    return <WrappedComponent isMobile={isMobile} {...(props as P)} />;
  };

  return WithDeviceDetection;
};

export default withDeviceDetection;
