import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { Creators as userActions } from '../../store/ducks/users'

import { Wrapper, UserItem } from './styles'

const UserList = () => {
	const users = useSelector(state => state.users.data)
	const dispatch = useDispatch()
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
						<button
							type="button"
							onClick={() => dispatch(userActions.removeUser(user.id))}
						>
							x
						</button>
					</UserItem>
				))}
			</ul>
		</Wrapper>
	)
}
export default UserList
