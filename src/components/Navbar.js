import React, { useState } from "react";
import PropTypes from "prop-types";

export default function Navbar(props) {
	const myToggleTheme = () => {
		var element = document.body;
		element.dataset.bsTheme =
			element.dataset.bsTheme === "light" ? "dark" : "light";
		if (element.dataset.bsTheme === "light") {
			setBtnText("Dark Mode");
		} else {
			setBtnText("Light Mode");
		}
	};
	const [btnText, setBtnText] = useState("Dark mode");

	return (
		<div>
			<noscript>
				Hello I'm MS and We are Just Single Page giving all your answer
			</noscript>
			<nav className="navbar bg-dark navbar-expand-lg bg-body-tertiary">
				<div className="container-fluid">
					<a className="navbar-brand" href="/">
						{props.title}
					</a>
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
								<a
									className="nav-link active"
									aria-current="page"
									href="/">
									Home
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="/">
									{props.aboutText}
								</a>
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
								<input
									className="form-check-input"
									type="checkbox"
									role="switch"
									id="flexSwitchCheckDefault"
									onClick={myToggleTheme}
								/>
								<label
									className="form-check-label"
									htmlFor="flexSwitchCheckDefault">
									{btnText}
								</label>
							</div>
						</form>
					</div>
				</div>
			</nav>
		</div>
	);
}

Navbar.propTypes = {
	title: PropTypes.string.isRequired,
	aboutText: PropTypes.string.isRequired,
};

Navbar.defaultProps = {
	title: "Set title Here",
	aboutText: "Set Your About US information Here",
};
