import React from "react"; // Import React for building the component
import styled from "styled-components"; // Import styled-components for custom styling

// Styled component for the document image (hidden by default)
const Document = styled.img`
  display: none; // Hidden initially
  height: 70px;
  width: fit-content;
  background-color: #000;
  border-radius: 10px;
  &:hover {
    cursor: pointer;
    opacity: 0.8; // Slight opacity change on hover
  }
`;

// Styled component for the description text inside the card
const Description = styled.div`
  width: 100%;
  font-size: 15px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_primary + 99}; // Text color based on theme
  margin-bottom: 10px;
  @media only screen and (max-width: 768px) {
    font-size: 12px; // Adjusts font-size for smaller screens
  }
`;

// Styled component for the span that truncates text
const Span = styled.span`
  overflow: hidden;
  display: -webkit-box;
  max-width: 100%;
  -webkit-line-clamp: 4; // Limits to 4 lines of text
  -webkit-box-orient: vertical;
  text-overflow: ellipsis; // Adds ellipsis when text overflows
`;

// Styled component for the main card layout
const Card = styled.div`
  width: 650px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  padding: 12px 16px;
  justify-content: space-between;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 12px;
  transition: all 0.3s ease-in-out;
  &:hover {
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2); // Increases shadow on hover
    transform: translateY(-5px); // Lifts the card slightly
  }
  @media only screen and (max-width: 768px) {
    padding: 10px;
    gap: 8px;
    width: 300px; // Adjusts card size for smaller screens
  }

  &:hover ${Document} {
    display: flex; // Shows the document image on hover
  }

  &:hover ${Span} {
    overflow: visible; // Expands truncated text on hover
    -webkit-line-clamp: unset;
  }

  border: 0.1px solid #306ee8; // Border color
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px; // Light shadow for the card
`;

// Styled component for the top section of the card (image and text)
const Top = styled.div`
  width: 100%;
  display: flex;
  gap: 12px; // Adds space between image and body
`;

// Styled component for the image inside the card
const Image = styled.img`
  height: 50px;
  background-color: #000;
  border-radius: 10px;
  margin-top: 4px;
  @media only screen and (max-width: 768px) {
    height: 40px; // Adjusts image size for smaller screens
  }
`;

// Styled component for the body section (role, company, and date)
const Body = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

// Styled component for the role text
const Role = styled.div`
  font-size: 18px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary + 99};
  @media only screen and (max-width: 768px) {
    font-size: 14px; // Adjusts font-size for smaller screens
  }
`;

// Styled component for the company text
const Company = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_secondary + 99};
  @media only screen and (max-width: 768px) {
    font-size: 12px; // Adjusts font-size for smaller screens
  }
`;

// Styled component for the date text
const Date = styled.div`
  font-size: 12px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary + 80};
  @media only screen and (max-width: 768px) {
    font-size: 10px; // Adjusts font-size for smaller screens
  }
`;

// Styled component for the skills section inside the card
const Skills = styled.div`
  width: 100%;
  display: flex;
  gap: 12px;
  margin-top: -10px;
`;

// Styled component for wrapping the list of skills
const ItemWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px; // Adds gap between each skill item
`;

// Styled component for each individual skill text
const Skill = styled.div`
  font-size: 15px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_primary + 99};
  @media only screen and (max-width: 768px) {
    font-size: 12px; // Adjusts font-size for smaller screens
  }
`;

// Main ExperienceCard component
const ExperienceCard = ({ experience }) => {
  return (
    <Card>
      {/* Top section with image and details */}
      <Top>
        <Image src={experience.img} /> {/* Image of the company */}
        <Body>
          <Role>{experience.role}</Role> {/* Role/title in the company */}
          <Company>{experience.company}</Company> {/* Company name */}
          <Date>{experience.date}</Date> {/* Date of employment */}
        </Body>
      </Top>

      {/* Description section with skills */}
      <Description>
        {
          experience?.desc && <Span>{experience?.desc}</Span> // Description text (with truncation)
        }
        {experience?.skills && (
          <>
            <br />
            <Skills>
              <b>Skills:</b>
              <ItemWrapper>
                {experience?.skills?.map((skill, index) => (
                  <Skill key={index}>• {skill}</Skill> // Displays each skill
                ))}
              </ItemWrapper>
            </Skills>
          </>
        )}
      </Description>

      {/* Document section */}
      {experience.doc && (
        <a href={experience.doc} target="new">
          <Document src={experience.doc} /> {/* Document link */}
        </a>
      )}
    </Card>
  );
};

export default ExperienceCard; // Exporting the ExperienceCard component for use in other parts of the app
