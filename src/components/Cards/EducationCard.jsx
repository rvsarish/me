import React from 'react'; // Importing React for building the component
import styled from 'styled-components'; // Importing styled-components for custom styling

// Styled component for an image (document) with hover effects
const Document = styled.img`
    display: none; // Initially hides the document image
    height: 70px;
    width: fit-content;
    background-color: #000;
    border-radius: 10px;
    &:hover{
        cursor: pointer;
        opacity: 0.8; // Changes opacity on hover for a subtle effect
    }
`;

// Styled component for description text with responsive font-size adjustments
const Description = styled.div`
    width: 100%;
    font-size: 15px;
    font-weight: 400;
    color: ${({ theme }) => theme.text_primary + 99}; // Using theme color for text
    margin-bottom: 10px;
    @media only screen and (max-width: 768px){
        font-size: 12px; // Smaller font-size on smaller screens
    }
`;

// Styled component for a span that shows an ellipsis when text overflows
const Span = styled.span`
    overflow: hidden;
    display: -webkit-box;
    max-width: 100%;
    -webkit-line-clamp: 4; // Limits text to 4 lines
    -webkit-box-orient: vertical;
    text-overflow: ellipsis; // Adds ellipsis when text overflows
`;

// Styled component for the main card layout with hover effects
const Card = styled.div`
    width: 650px;
    border-radius: 10px;
    box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
    padding: 12px 16px;
    justify-content: space-between;
    position: relative;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    gap: 12px;
    transition: all 0.3s ease-in-out;
    &:hover{
        box-shadow: 0px 0px 20px rgba(0,0,0,0.2); // Darker shadow on hover
        transform: translateY(-5px); // Slight lift effect on hover
    }
    @media only screen and (max-width: 768px){
        padding: 10px;
        gap: 8px;
        width: 300px; // Responsive design for smaller screens
    }

    &:hover ${Document}{
        display: flex; // Shows the document image on hover
    }

    &:hover ${Span}{
        overflow: visible; // Expands the text when the card is hovered
        -webkit-line-clamp: unset;
    }
    border: 0.1px solid #854CE6; // Border color
`;

// Styled component for the top section of the card (image and info)
const Top = styled.div`
    width: 100%;
    display: flex;
    gap: 12px; // Horizontal gap between the image and body
`;

// Styled component for the image inside the card
const Image = styled.img`
    height: 50px;
    background-color: #000;
    border-radius: 10px;
    margin-top: 4px;
    @media only screen and (max-width: 768px){
        height: 40px; // Smaller image on smaller screens
    }
`;

// Styled component for the body of the card (name, degree, etc.)
const Body = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column; 
`;

// Styled component for the name text (school name)
const Name = styled.div`
    font-size: 18px;
    font-weight: 600;
    color: ${({ theme }) => theme.text_primary + 99};
    @media only screen and (max-width: 768px){
        font-size: 14px; // Smaller font-size on smaller screens
    }
`;

// Styled component for the degree text
const Degree = styled.div`
    font-size: 14px;
    font-weight: 500;
    color: ${({ theme }) => theme.text_secondary + 99};
    @media only screen and (max-width: 768px){
        font-size: 12px; // Smaller font-size on smaller screens
    }
`;

// Styled component for the date text
const Date = styled.div`
    font-size: 12px;
    font-weight: 400;
    color: ${({ theme }) => theme.text_secondary + 80};
    @media only screen and (max-width: 768px){
        font-size: 10px; // Smaller font-size on smaller screens
    }
`;

// Styled component for the grade text
const Grade = styled.div`
    font-size: 14px;
    font-weight: 500;
    color: ${({ theme }) => theme.text_secondary + 99};
    @media only screen and (max-width: 768px){
        font-size: 12px; // Smaller font-size on smaller screens
    }
`;

// Main EducationCard component
const EducationCard = ({ education }) => {
    return (
        <Card>
            <Top>
                <Image src={education.img} /> {/* Display the image for the education */}
                <Body>
                    <Name>{education.school}</Name> {/* Display the school name */}
                    <Degree>{education.degree}</Degree> {/* Display the degree */}
                    <Date>{education.date}</Date> {/* Display the date */}
                </Body>
            </Top>
            <Grade><b>Grade: </b>{education.grade}</Grade> {/* Display the grade */}
            <Description>
                <Span>{education.desc}</Span> {/* Display the description with truncation */}
            </Description>
        </Card>
    );
}

export default EducationCard; // Exporting the EducationCard component for use in other parts of the app
