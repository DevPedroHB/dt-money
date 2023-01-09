import { motion } from "framer-motion";
import styled, { css } from "styled-components";

interface SummaryCardProps {
  variant?: "green";
}

export const SummaryContainer = styled(motion.section)`
  width: 100%;
  max-width: 70rem;
  margin: 0 auto;
  padding: 0 1.5rem;
  margin-top: -5rem;
  overflow: hidden;
  cursor: grab;
`;

export const SummaryContent = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
`;

export const SummaryCard = styled.div<SummaryCardProps>`
  width: 100%;
  background: ${(props) => props.theme["gray-600"]};
  border-radius: 6px;
  padding: 2rem;
  min-width: 17.5rem;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: ${(props) => props.theme["gray-300"]};
  }

  strong {
    display: block;
    margin-top: 1rem;
    font-size: 2rem;
  }

  ${(props) =>
    props.variant === "green" &&
    css`
      background: ${props.theme["green-700"]};
    `}
`;
