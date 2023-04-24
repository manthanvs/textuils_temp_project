import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";


export default function Navbar(props) {
	const myToggleTheme = () => {
		var element = document.body;

		if(element.dataset.bsTheme === undefined){
			element.dataset.bsTheme = "light";
		}

		element.dataset.bsTheme =
			element.dataset.bsTheme === "light" ? "dark" : "light";
		if (element.dataset.bsTheme === "light") {
			setBtnText("Light Mode");
			props.function("Light Mode activated", "success");
		} else {
			setBtnText("Dark Mode");
			props.function("Dark Mode activated", "success");
		}
	};
	const [btnText, setBtnText] = useState("Light mode");

	return (
		<div>
			<noscript>
				Hello I'm MS and We are Just Single Page giving all your answer
			</noscript>
			<nav className="navbar bg-dark navbar-expand-lg bg-body-tertiary">
				<div className="container-fluid">
					<Link className="navbar-brand" to="/">
						{props.title}
					</Link>
					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarSupportedContent"
						aria-controls="navbarSupportedContent"
						aria-expanded="false"
						aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
					<div
						className="collapse navbar-collapse"
						id="navbarSupportedContent">
						<ul className="navbar-nav me-auto mb-2 mb-lg-0">
							<li className="nav-item">
								<Link
									className="nav-link active"
									aria-current="page"
									to="/">
									Home
								</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" to="/about">
									{props.aboutText}
								</Link>
							</li>
						</ul>

						<form className="d-flex" role="search">
							<input
								className="form-control me-2 "
								type="search"
								placeholder="Search"
								aria-label="Search"
							/>
							<button
								className="btn btn-outline-primary"
								type="submit">
								{/* Possible styling are btn-[primary,light,dark,warmning,success] or btn-outline-[primary,light,dark,warmning,success] */}
								Search
							</button>
						</form>
						{/*Button for toggling the dark and light Mode */}
						<form className="d-flex mx-2 my-2">
							<div className="form-check form-switch">
									<div className="form-check form-switch">
									<input
										className="form-check-input"
										type="checkbox"
										role="switch"
										id="flexSwitchCheckChecked"
										onClick={myToggleTheme}
									/>
									<label
										className="form-check-label"
										htmlFor="flexSwitchCheckChecked">
										{btnText}
									</label>
								</div>
							</div>
						</form>
					</div>
				</div>
			</nav>
		</div>
	);
}

// These Are Props From Parent send to child
Navbar.propTypes = {
	title: PropTypes.string.isRequired,
	// only PropTypes will fetch but if you want the props to be compulsory then put ".isRequired"
	aboutText: PropTypes.string.isRequired,
};

// These are Default Props when No Props Are Send by Parent to child i.e. child will assume these are their props from parent when parent wiil go to bring milk.
Navbar.defaultProps = {
	title: "Set title Here",
	aboutText: "Set Your About US information Here",
};
