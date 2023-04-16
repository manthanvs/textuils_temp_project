import React, { useState } from "react";
import PropTypes from "prop-types";

export default function TextForm(props) {
	const HandleUpperClick = () => {
		// console.log(text)
		// console.log(text.toUpperCase());
		// console.log("You have Clicked on HandleUpperClick")

		// also can be written as
		// let Uppercase = text.toUpperCase();
		// setText(Uppercase)

		setText(text.toUpperCase());
		props.function("Input string of Word Converted to Upper-Case","success");
	};

	const HandleLowerClick = () => {
		setText(text.toLowerCase());
		props.function("Input string of Word Converted to Lower-Case","success");
	};

	const HandleTitleClick = () => {
		let newtext = text;
		// console.log(typeof(newtext))
		function toTitleCase(str) {
			return str
				.toLowerCase()
				.split(" ")
				.map(function (word) {
					return word.charAt(0).toUpperCase() + word.slice(1);
				})
				.join(" ");
		}
		//   console.log(toTitleCase(newtext));
		let finalCase = toTitleCase(newtext);
		//   console.log(finalCase)
		setText(finalCase);
		props.function("Input string of Word Converted to Title-Case","success");
	};

	const HandleSentenceClick = () => {
		let newtext = text;
		// console.log(typeof newtext);
		function toSentenceCase(str) {
			return str
				.toLowerCase()
				.replace(/(^\s*\w|[.!?]\s*\w)/g, function (c) {
					return c.toUpperCase();
				});
		}
		// console.log(toSentenceCase(newtext));
		let finalCase = toSentenceCase(newtext);
		// console.log(finalCase);

		setText(finalCase);
		props.function("Input string of Word Converted to Sentence-Case","success");
	};

	const HandleClearClick = () => {
		let newtext = "";
		setText(newtext);
		props.function("Input string is cleared from memory","success");
	};

	const HandleonChange = (event) => {
		// console.log("HandleonChange was clicked!!")
		// console.log(event.target)
		setText(event.target.value);
	};

	const HandleCopyText = ()=>{
		// let temp= document.getElementById("myBox")
		// temp.select();									//I used the Simplest version of this function that is without fetching through getElementById I used directly the State Value which Carries the current Typed Text in the TextAreaBox
		navigator.clipboard.writeText(text)
		props.function("Input string is being copied to clipboard","success");
	}


	const HandleExtraSpaces =()=>{
		let newText = text.split(/[ ]+/);
		setText(newText.join(" "))
		props.function("Removed extra spaces from your input string ","success");
	}

	const [text, setText] = useState("");
	// text="Hello There!!!";          //Wrong Way To modify the Text
	// setText("Hello There!!!");      //Correct Way to Modify the Text
	return (
		<div>
			<div className="container my-3">
				<div className="mb-3">
					<h2>{props.heading}</h2>
					<textarea
						className="form-control"
						onChange={HandleonChange}
						value={text}
						id="myBox"
						rows="10"
						placeholder="Enter the text Here"
					></textarea>
				</div>
				<div>
					<button
						className="btn btn-primary mx-1 my-1"
						onClick={HandleUpperClick}
					>
						Convert To UPPERCASE
					</button>

					<button
						className="btn btn-primary mx-1 my-1"
						onClick={HandleLowerClick}
					>
						Convert To lowercase
					</button>

					<button
						className="btn btn-primary mx-1 my-1"
						onClick={HandleSentenceClick}
					>
						Convert To Sentence case
					</button>

					<button
						className="btn btn-primary mx-1 my-1"
						onClick={HandleTitleClick}
					>
						Convert To Title Case
					</button>

					<button
						className="btn btn-primary mx-1 my-1"
						onClick={HandleCopyText}
					>
						Copy Text into Your Clipboard
					</button>

					<button
						className="btn btn-primary mx-1 my-1"
						onClick={HandleExtraSpaces}
					>
						Remove Extra Spaces
					</button>

					<button
						className="btn btn-primary mx-1 my-1"
						onClick={HandleClearClick}
					>
						Clear
					</button>
				</div>
			</div>

			<div className="container my-3">
				<h3>Your Text Summary</h3>
				{/*<p>3432 words and 23412 characters</p>*/}

				<p>
					{ text === null ? text.split(/[.!\s_]+/).length : text.split(/[.!\s_]+/).length - 1} words and {text.length} characters
				</p>
				{/*I used reg ex for split method reg ex: starts with '/  /' then '[   ]' and contains . ! \s _ and + means 1 or more occurences.*/}
				{/*I used ternary Operator because at First it used to assume the empty string as one word which is false so I used Ternary like
					text === null if empty string meaning no word is still split in the text variable then count 
				*/}

				<p> </p>

				<p>
					It'll Take {0.008 * text.split(/[.!\s_]+/).length} Minutes
					to Read the Following{" "}
				</p>

				<h3>Preview</h3>
				<p>{text.length === 0 ? "Enter your text in the text box to preview here " : text } </p>
			</div>
		</div>
	);
}

TextForm.propTypes = { heading: PropTypes.string.isRequired };

TextForm.defaultProps = { heading: "Enter the Text" };
