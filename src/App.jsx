import { useState } from 'react'
import './App.css'
import ToDoListComponent from './ToDoList'

function App() {


	return (
		<div>
			<header id="header">
				<h1>To do list a day, keeps laziness away!</h1>
				<div id="blueDashContainer">
					<div id="blueDash"></div> <div id="blueDash"></div> <div id="blueDash"></div>
					<div id="blueDash"></div> <div id="blueDash"></div> <div id="blueDash"></div>
					<div id="blueDash"></div> <div id="blueDash"></div> <div id="blueDash"></div>
					
				</div>
			</header>
			<ToDoListComponent/>
		</div>
	)
}

export default App
