import React from 'react'
import { useSelector } from 'react-redux'

import { Wrapper, UserItem } from './styles'

const UserList = () => {
	const users = useSelector(state => state.users.data)
	return (
		<Wrapper>
			<ul>
				{users.map(user => (
					<UserItem key={user.id}>
						<img src={user.avatar} alt="avatar" />
						<div>
							<span className="name">{user.name}</span>
							<span className="login">{user.login}</span>
						</div>
					</UserItem>
				))}
			</ul>
		</Wrapper>
	)
}
export default UserList
