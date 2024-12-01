import styled from 'styled-components'; // Importing styled-components library for creating styled elements
import _default from '../../themes/default'; // Importing the default theme (though it's not used here)

export const SocialMediaIcons = styled.div`
  display: flex; /* Aligns child elements (social media icons) in a row */
  margin-top: 1rem; /* Adds space above the icons */
`;

export const SocialMediaIcon = styled.a`
  display: inline-block; /* Makes each icon an inline block for horizontal layout */
  margin: 0 1rem; /* Adds horizontal spacing between icons */
  font-size: 1.5rem; /* Sets the icon size */
  color: ${({ theme }) => theme.text_primary}; /* Sets the icon color based on the theme's primary text color */
  transition: color 0.2s ease-in-out; /* Adds smooth transition effect for color change on hover */
  
  &:hover {
    color: ${({ theme }) => theme.primary}; /* Changes the color of the icon when hovered to the theme's primary color */
  }
`;
