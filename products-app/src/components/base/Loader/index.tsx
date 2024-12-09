import React from 'react';
import { ScaleLoader, BarLoader, CircleLoader, PropagateLoader } from 'react-spinners';
import styled from 'styled-components';

interface LoaderProps {
  type?: 'scale' | 'bar' | 'circle' | 'propogate';
  [key: string]: any;
}

const StyledLoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
`;

const Loader: React.FC<LoaderProps> = ({ type = 'scale', ...rest }) => {
  let LoaderComponent: React.ComponentType<any>;

  switch (type) {
    case 'bar':
      LoaderComponent = BarLoader;
      break;
    case 'circle':
      LoaderComponent = CircleLoader;
      break;
    case 'propogate':
      LoaderComponent = PropagateLoader;
      break;
    default:
      LoaderComponent = ScaleLoader;
      break;
  }

  return (
    <StyledLoaderContainer>
      <LoaderComponent {...rest} />
    </StyledLoaderContainer>
  );
};

export default Loader;
