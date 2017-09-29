import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

function toDoList(todo1, todo2, todo3) {
	return(
		<ul>
			<li>{todo1}</li>
			<li>{todo2}</li>
			<li>{todo3}</li>
		</ul>
	)
}

ReactDOM.render(
	toDoList('eat', 'sleep', 'code'),
	document.getElementById('root')
)