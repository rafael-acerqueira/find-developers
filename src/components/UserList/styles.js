import styled from 'styled-components'

export const Wrapper = styled.aside`
	background-color: #fff;
	padding: 20px;
	position: absolute;
	left: 23px;
	top: 23px;
	height: 95vh;
	width: 400px;
	z-index: 9;
`

export const UserItem = styled.li`
	border-bottom: 1px solid #eee;
	display: flex;
	list-style: none;
	padding-bottom: 20px;
	margin-bottom: 25px;

	img {
		width: 50px;
		height: 50px;
		border-radius: 100px;
	}

	div {
		display: flex;
		flex-direction: column;
		margin-left: 10px;
		justify-content: space-evenly;
	}

	span {
		font-weight: bold;
		&.name {
			color: #000;
		}

		&.login {
			color: #aaa;
			font-size: 14px;
		}
	}
`
