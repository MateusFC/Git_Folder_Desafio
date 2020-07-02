import React from 'react'
import { ListGroup } from 'react-bootstrap'
const ApiItem = props => {
	return (
		<ListGroup variant='flush'>
			<ListGroup.Item >
				<div className="list-group-item list-group-item-action list-group-item-secondary rounded">
					<h3>
						<a href={props.link} className='badge'>
							{props.titulo}
						</a>
					</h3>
					<div>
						<p>{props.descricao}</p>
						<span>{props.linguagem}</span>
						<hr color='#3c4146' />
					</div>
				</div>
			</ListGroup.Item>
		</ListGroup>
	)
}

export default ApiItem
