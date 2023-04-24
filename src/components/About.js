import React from "react";

export default function About() {
	return (
		<div className="container">
			<div class="accordion" id="accordionExample">
				<div class="accordion-item">
					<h2 class="accordion-header">
						<button
							class="accordion-button"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#collapseOne"
							aria-expanded="true"
							aria-controls="collapseOne">
							More About - TextUtils
						</button>
					</h2>
					<div
						id="collapseOne"
						class="accordion-collapse collapse show"
						data-bs-parent="#accordionExample">
						<div class="accordion-body">
							<strong>
								This is the first project I made as a beginner.
							</strong>
							This project was inspired by{" "}
							<strong>Code With Harry.</strong>I learned many
							projects from his YouTube channel and modified many
							components on my own.e.g., I made Dark Mode using
							the simple basic steps of Bootstrap and modified the{" "}
							<code>document.body</code> dynamically so that we
							could take joy in both themes.
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
