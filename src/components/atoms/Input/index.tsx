import styled from "styled-components";

interface InputProps {
	textAlign?: "center" | "left" | "right";
}

export const Input = styled.input<InputProps>`
	border: 0;
	outline: 0;
	min-height: 2.8rem;
	padding: 1rem 1.5rem;
	
	background-color: #fff;
	border-radius: 100px;

	text-align: ${({ textAlign }) => textAlign || "left"};

	&::placeholder {
		color: ${({ theme }) => theme.colors.gray[300]};
	}

`;