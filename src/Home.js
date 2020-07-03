/* eslint-disable react/style-prop-object */
import React, { Component } from 'react'
import axios from 'axios'
import Header from './Components/Header'
import { DebounceInput } from 'react-debounce-input'
import { BsFillFolderSymlinkFill } from 'react-icons/bs'
const api = {
	baseUrl: 'https://api.github.com',
	user: 'camunda',
}
class Home extends Component {
	constructor(props) {
		super(props)
		this.state = {
			gitData: [],
			userArr: [],
			pesquisa: '',
		}
		this.Pesquisar = this.Pesquisar.bind(this)
	}
	Pesquisar(e) {
		this.setState({
			pesquisa: e.target.value,
		})
	}
	componentDidMount() {
			const user = this.props.match.params.user
			if (user !== undefined) {
				axios.get(api.baseUrl + '/users/' + user + '/repos').then(res => {
					console.log(res)
					this.setState({ gitData: res.data, status: true })
				})
				axios.get(api.baseUrl + '/users/' + user).then(res => {
					this.setState({ userArr: res.data })
				})
			} else {
				axios.get(api.baseUrl + '/users/' + api.user + '/repos').then(res => {
					this.setState({ gitData: res.data })
				})
				axios.get(api.baseUrl + '/users/' + api.user).then(res => {
					this.setState({ userArr: res.data })
				})
			}
		}

	renderCountry = country => {
		return (
			<li
				key={country.id}
				className='list-group-item bg-secondary col-12 d-row p-3 my-2 width-full py-4 rounded border-bottom'>
				<div className='col-10 col-lg-9 d-inline-block'>
					<h3 className='wb-break-a11'>
						<a href={'#' + country.html_url} className='font-weight-bold d-block text-light'>
							<BsFillFolderSymlinkFill />
							{'  '}
							{country.name}
						</a>
					</h3>
					<hr className='bg-light' width='125%' />
				</div>
				<div>
					<p className=' font-italic col-9 d-inline-block text-gray mb-2 pr-4'>{country.description}</p>
					<ul />
					<span className='font-italic col-9 d-inline-block text-gray mb-2 pr-4'>Linguagem: {country.language}</span>
				</div>{' '}
			</li>
		)
	}

	render() {
		const { gitData, userArr, pesquisa } = this.state
		const filterCountry = gitData.filter(country => {
			return country.name.toLowerCase().indexOf(pesquisa.toLowerCase()) !== -1
		})
		return (
			<div className='bg-light'>
				<Header use={userArr.login} />
				<div className='container' role='main'>
					<div className=' bg-dark  d-flex align-items-center p-3 my-3 text-white-50 rounded shadow-sm'>
						<img className='rounded-circle m-3' alt='' src={userArr.avatar_url} height='100' width='100' />
						<div className='lh-100'>
							<h6 className=' font-weight-bold mb-0 text-white 1h-100'>{userArr.login}</h6>
							<small className='font-italic'>{userArr.bio}</small>
							<br />
							<small className='font-italic'>{userArr.public_repos} Publicações</small>
							<br />
							<small className='font-italic'>{userArr.email}</small>
						</div>
					</div>
					<div className='mv-3 p-3 bg-white roundend shadow-sm '>
						<nav className='navbar bg-dark rounded'>
							<h6 className='font-weight-bold text-light pb-2 mb-0'>Respositórios</h6>
							<form className='form-inline my-2 my-lg-0'>
								<DebounceInput
									className='font-weight-bold form-control mr-sm-2'
									type='text'
									value={this.state.pesquisa}
									placeholder='Pesquise Respositorio'
									aria-label='Search'
									onChange={this.Pesquisar}
								/>
							</form>
						</nav>
						<ul className='list-group'>
							{filterCountry.map(country => {
								return this.renderCountry(country)
							})}
						</ul>
					</div>
				</div>
			</div>
		)
	}
}

export default Home
