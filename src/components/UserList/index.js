import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'
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
						<div className="info-box">
							<img src={user.avatar} alt="avatar" />
							<div className="info">
								<span className="name">{user.name}</span>
								<span className="login">{user.login}</span>
							</div>
						</div>
						<button
							type="button"
							onClick={() => dispatch(userActions.removeUser(user.id))}
						>
							<FontAwesomeIcon icon={faTimesCircle} />
						</button>
					</UserItem>
				))}
			</ul>
		</Wrapper>
	)
}
export default UserList
