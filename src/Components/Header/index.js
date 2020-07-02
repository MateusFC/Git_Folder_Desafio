/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { Navbar } from 'react-bootstrap'
const Header = props => {
	return (
		<Navbar bg='dark'>
			<Navbar.Brand className='text-light' href='#home'>
				{'< '}Git-Folder{' >'}
			</Navbar.Brand>
			<Navbar.Toggle />
			<Navbar.Collapse className='justify-content-end'>
				<Navbar.Text className='text-muted'>
					Usuário:{' '}
					<a className='text-light'>
						{''}
						{props.use}
					</a>
				</Navbar.Text>
			</Navbar.Collapse>
		</Navbar>
	)
}
export default Header
