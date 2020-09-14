// This will print in the wrong order
// we added it for you to test to make sure data is loaded
// 🚨🚨🚨 comment out the next 3 lines when you start working on the code
for (let i = 0; i < mashPotatoes.length; i++) {
	// addFood(steak[i], '#steak');
	console.log(mashPotatoes[i]);
}

const table = document.querySelector("#table");
const body = document.querySelector("body");

// Iteration 1 using callbacks

const addSteak = addFood(steak[0], "#steak", () => {
	addFood(steak[1], "#steak", () => {
		addFood(steak[2], "#steak", () => {
			addFood(steak[3], "#steak", () => {
				addFood(steak[4], "#steak", () => {
					addFood(steak[5], "#steak", () => {
						addFood(steak[6], "#steak", () => {
							addFood(steak[7], "#steak", () => {
								table.innerHTML += `<img src="./public/images/steak.jpg" alt="steak">`;
							});
						});
					});
				});
			});
		});
	});
});

// Iteration 2 using `.then()`

const addMashPotatoes = addFood(mashPotatoes[0], "#mashPotatoes").then(() => {
	addFood(mashPotatoes[1], "#mashPotatoes").then(() => {
		addFood(mashPotatoes[2], "#mashPotatoes").then(() => {
			addFood(mashPotatoes[3], "#mashPotatoes").then(() => {
				addFood(mashPotatoes[4], "#mashPotatoes").then(() => {
					table.innerHTML += `<img src="./public/images/mashPotatoes.jpg" alt="steak">`;
				});
			});
		});
	});
});

// Iteration 3 using async and await

async function makeFood(step) {
	for (let i = 0; i < step.length; i++) {
		await addFood(step[i], `#brusselSprouts`);
	}
	table.innerHTML += `<img src="./public/images/brusselSprouts.jpg" alt="steak">`;
}

const addBrusselSprouts = makeFood(brusselSprouts);

function addButton() {
  body.innerHTML += `<button>Dinner is served.</button>`;
  const audio = new Audio(`./public/media/dinnerIsServed.mp3`);
  audio.play()
}

Promise.all([addSteak, addMashPotatoes, addBrusselSprouts]).then(addButton);



