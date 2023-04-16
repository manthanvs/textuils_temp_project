// import logo from './logo.svg';
import "./App.css";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from 'react';

// import About from "./components/About";


// let name ="MS Vijay";
function App() {

	//using state to set Alert on some message showing.
	const [alert, setAlert] = useState(null);

	const showAlert = (message,type) => {
		setAlert({
			message : message,
			type : type
		})
		setTimeout(() => {
			setAlert(null)
		}, 1000);
	}

	return (
		<div>
			{/* // <div className="blank">Lovely</div>
		//   <>
		//   <nav>
		//     <li>Home</li>
		//     <li>About</li>
		//     <li>Contact</li>
		//   </nav>

		// <img src="" alt="" />

		//   <div className="container">
		//     <p>  Hello <b>{name}</b></p>
		//     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga consectetur suscipit eligendi tenetur illo minus vero at dolorum sint alias. Esse recusandae ex dolores consequuntur magni error nihil perferendis. Libero earum accusantium doloribus distinctio!</p>
		//   </div>
		//   </>
		<Navbar />For When we Want Default Props To take place 
*/}


		<Navbar title="TextUtils" aboutText="About us" function={showAlert}/>
			<Alert alert={alert} />
			<div className="container my-3">
				<TextForm heading="Enter the Text To Analyse Below" function={showAlert}/>
				{/*<About />*/}
			</div>
		</div>
	);
}

export default App;
