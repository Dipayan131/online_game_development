import Button from '@/components/base/Button';
import { themes, useThemeContext } from '@/contexts/ThemeContext';
import { Moon, Sparkles, Sun } from 'lucide-react';
import React from 'react';
import styled from 'styled-components';

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
`;

const ThemeToggler: React.FC = () => {
  const { theme, toggleTheme } = useThemeContext();

  const getToggleLabel = () => {
    switch (theme) {
      case themes.day:
        return <Sun />;
      case themes.night:
        return <Moon />;
      case themes.dream:
        return <Sparkles />;
      default:
        return <Sun />;
    }
  };

  return (
    <ButtonContainer>
      <Button label="" type="button" variant="primary" onClick={toggleTheme}>
        {getToggleLabel()}
      </Button>
    </ButtonContainer>
  );
};

export default ThemeToggler;
