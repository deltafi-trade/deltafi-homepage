import { Container } from "@mui/material";
import styled from "styled-components";

const StyledContainer = styled(Container)`
    padding: 60px 60px;
    text-align: center;
`

const SectionContainer: React.FC = ({children}) => {
    return (
        <StyledContainer>
            {children}
        </StyledContainer>
    )
};

export default SectionContainer;