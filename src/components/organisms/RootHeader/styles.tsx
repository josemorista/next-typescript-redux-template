import styled from "styled-components";

const Container = styled.header`
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	min-height: 6rem;

	background-color: ${({ theme }) => theme.colors.green[300]};

	> img, button {
		margin: 1rem;
	}

	> input {
		flex: 1;
	}
`;

export const RootHeaderStyles = {
	Container
};