import React, { Component } from 'react'
import axios from 'axios'
import ApiItem from './Components/ApiItem'
import Header from './Components/Header'
import './global.css'

const api = {
	baseUrl: 'https://api.github.com',
	user:'camunda',
}
class Home extends Component {
	constructor(props) {
		super(props)
		this.state = {
			gitData: [],
			status: false,
		}
	}
	componentDidMount() {
		const user = this.props.match.params.user
		console.log(user)
		if (user !== undefined) {
			axios.get(api.baseUrl + '/users/' + user + '/repos').then(res => {
				console.log('Infos da API ', res)
				this.setState({ gitData: res.data, status: true })
			})
		} else {
			axios.get(api.baseUrl + '/users/' + api.user + '/repos').then(res => {
				console.log('Infos da API ', res)
				this.setState({ gitData: res.data })
			})
		}
	}
	render() {
		const { gitData } = this.state
		return (
			<div>
				<Header use={this.state.status ? this.props.match.params.user : api.user} />
				<div className='container'>
					<br />
					<nav aria-label='breadcrumb'>
						<ol className='breadcrumb'>
							<li className='breadcrumb-item active' aria-current='page'>
								Repositores
							</li>
						</ol>
					</nav>
					<div className='border border-dark rounded'>
						{gitData.map(item => {
							return (
								<div key={item.id}>
									<ApiItem
										link={item.html_url}
										titulo={item.name}
										descricao={item.description}
										linguagem={item.language}
									/>
								</div>
							)
						})}
					</div>
				</div>
			</div>
		)
	}
}

export default Home
