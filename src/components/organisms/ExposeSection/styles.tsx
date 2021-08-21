import styled from "styled-components";

const Container = styled.section`
	header {
		display: flex;
		align-items: center;

		h6 {
			text-transform: uppercase;
			color: ${({ theme }) => theme.colors.gray[800]};
			margin-right: 1rem;
		}

		span {
			flex: 1;
			height: 2px;
			background-color: ${({ theme }) => theme.colors.gray[800]};
		}
	}
`;

export const ExposeSectionStyles = {
	Container
};