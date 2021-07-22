import './App.css';
import AddField from './Components/AddField';
import ButtonAddTask from './Components/ButtonAddTask';
import Header from './Components/Header';
import ListTasks from './Components/ListTasks';
import Search from './Components/Search';
import Sort from './Components/Sort';

function App() {
	let tasks = [
		{id : 1, name: 'HOc Tieng Anh', level: 0},
		{id : 2, name: 'Hoc React', level: 2},
		{id : 3, name: 'Hoc Toan cao cap', level: 3},
		{id : 4, name: 'Hoc Toan cao cap', level: 3},
	];
	return (
		<div className="container">
			<Header />
			<div className="row">
				<Search/>
				<Sort/>
				<ButtonAddTask />
			</div>
			<div className="row">
			<AddField/>
			</div>
			<div className="panel panel-success">
				<div className="panel-heading">List Task</div>
				<ListTasks tasks = {tasks}/>
			</div>
		</div>
	);
}

export default App;
