import { useState } from 'react';
import './App.css';
import AddField from './Components/AddField';
import ButtonAddTask from './Components/ButtonAddTask';
import Header from './Components/Header';
import ListTasks from './Components/ListTasks';
import Search from './Components/Search';
import Sort from './Components/Sort';

// this.state({
// 	onToggleButton : false
// })

// render -> seState -> render
// render 
function App() {
	const [tasks, setTasks] = useState([
		{ id: 1, name: 'HOc Tieng Anh', level: 0 },
		{ id: 2, name: 'Hoc React', level: 2 },
		{ id: 3, name: 'Hoc Toan cao cap', level: 3 },
	])

	const [visileButton, setVisibleButton] = useState(false);

	const onToggleButton = (visible) => {
		setVisibleButton(visible);
	}

	const addItem = (elemt) => {
		elemt.id = tasks[tasks.length - 1]['id'] + 1;
		// tasks.push(elemt);
		setTasks([...tasks,elemt]);
		// console.log(tasks);
	}


	return (
		<div className="container">
			<Header />
			<div className="row">
				<Search />
				<Sort />
				<ButtonAddTask onToggleButton={(visible) => onToggleButton(visible)} visileButton={visileButton} />
			</div>
			<div className="row">
				<AddField
					onToggleButton={(visible) => onToggleButton(visible)}
					visileButton={visileButton}
					addItem = { (elemt) => addItem(elemt) }
				/>
			</div>
			<div className="panel panel-success">
				<div className="panel-heading">List Task</div>
				<ListTasks tasks={tasks} />
			</div>
		</div>
	);
}

export default App;
