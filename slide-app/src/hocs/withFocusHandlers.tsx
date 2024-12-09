import React, { CSSProperties, useEffect, useState } from "react";

const withFocusHandlers = (WrappedComponent) => {
  const NewComponent = ({ id, styles, ...props }) => {
    const [isFocused, setIsFocused] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
      const element = document.getElementById(id);

      if (!element) return;

      const handleFocus = () => {
        setIsFocused(true);
      };

      const handleBlur = () => {
        setIsFocused(false);
      };

      const handleMouseEnter = () => {
        setIsHovered(true);
      };

      const handleMouseLeave = () => {
        setIsHovered(false);
      };

      // element.addEventListener('mousedown', handleMouseDown);
      // element.addEventListener('mouseup', handleMouseUp);

      element.addEventListener("focus", handleFocus);
      element.addEventListener("blur", handleBlur);
      element.addEventListener("mouseenter", handleMouseEnter);
      element.addEventListener("mouseleave", handleMouseLeave);
      return () => {
        element.removeEventListener("focus", handleFocus);
        element.removeEventListener("blur", handleBlur);
        element.removeEventListener("mouseenter", handleMouseEnter);
        element.removeEventListener("mouseleave", handleMouseLeave);
      };
    }, [id]);

    const getStyles = (): CSSProperties => {
      const focusStyles: CSSProperties = {
        ...(isFocused && styles.focus),
      };

      // const activeStyles: CSSProperties = {
      //   ...(isActive && styles.active),
      // };

      const hoveredStyles: CSSProperties = {
        ...(isHovered && styles.hover),
      };

      return {
        ...styles,
        ...hoveredStyles,
        ...focusStyles,
      };
    };
    return <WrappedComponent id={id} styles={getStyles()} {...props} />;
  };

  return NewComponent;
};

export default withFocusHandlers;
