// import logo from './logo.svg';
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
// import About from "./components/About";

// let name ="MS Vijay";
function App() {
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
		<Navbar />For When we Want Default Props To take place */}
			<Navbar title="TextUtils" aboutText="About us" />
			<div className="container my-3">
				<TextForm heading="Enter the Text To Analyse Below" />
				{/*<About />*/}
			</div>
		</div>
	);
}

export default App;
