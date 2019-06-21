import styled from 'styled-components'

export const Form = styled.form`
	width: 300px;

	h2 {
		margin-top: 0;
		margin-bottom: 15px;
		font-size: 18px;
		text-align: center;
	}

	input {
		border: 1px solid #ccc;
		border-radius: 3px;
		height: 40px;
		padding-left: 20px;
		margin-bottom: 15px;
		width: 100%;
	}

	div {
		display: flex;
		justify-content: space-between;
	}
`

export const Button = styled.button`
	background-color: ${props => (props.submit ? '#85C47C' : ' #ccc')};
	border: 0;
	border-radius: 3px;
	color: #fff;
	cursor: pointer;
	font-size: 14px;
	font-weight: bold;
	height: 40px;
	width: 46%;
`
