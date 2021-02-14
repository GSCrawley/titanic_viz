import data from './titanic-data.js'

const titanic = document.querySelector('#titanic')

titanic.style.display = 'grid'
titanic.style.justifyContent = 'center'
titanic.style.gridTemplateColumns = 'repeat(34, 15px)'
titanic.style.gridGap = '2.5px'
titanic.style.backgroundColor = 'white'

const passengers = data.map(p => {
  return document.createElement('div')
})

// Loop over each passenger and append them to the titanic
passengers.forEach(p => {
  titanic.appendChild(p)
})

function didSurvive() {
  data.sort((a,b) => {
    if (a.fields.survived < b.fields.survived) {
      return -1
    } else if (a.fields.survived > b.fields.survived) {
      return 1
    }
      return 0
  })
}

function embarkedWhere() {
  data.sort((a,b) => {
    if (a.fields.embarked < b.fields.embarked){
      return -1
    } else if (a.fields.embarked > b.fields.embarked) {
      return 1
    }
    return 0
  })
} 

function adultOrChild() {
  data.sort((a,b) => {
    return a.fields.age - b.fields.age
  })
}

function whatGender() {
  data.sort((a,b) => {
    if (a.fields.sex < b.fields.sex) {
      return -1
    } else if (a.fields.sex > b.fields.sex) {
      return 1
    }
    return 0
  })
}

function whatClass() {
  data.sort((a,b) => {
    if (a.fields.pclass < b.fields.pclass) {
      return -1
    } else if (a.fields.pclass > b.fields.pclass) {
      return 1
    }
    return 0
  })
}

function farePaid() {
  data.sort((a,b) => {
    if (a.fields.fare < b.fields.fare) {
      return -1
    } else if (a.fields.fare > b.fields.fare) {
      return 1
    }
    return 0
  })
}

const portColor = { 
  S: 'tomato', 
  C: 'blue', 
  Q: 'purple', 
  undefined: 'black',
  total: 'orange'
}

const titanicEmbarked = document.querySelector('#titanic-embarked')


const embarkedCounts = data.reduce((acc, p) => {
  if (acc[p.fields.embarked] === undefined) {
    acc[p.fields.embarked] = 1
  } else {
    acc[p.fields.embarked] += 1
  }
  return acc
}, {})

embarkedCounts.total = data.length

const embarkedKeys = Object.keys(embarkedCounts)

embarkedKeys.forEach((e) => {
  const el = document.createElement('div')
  titanicEmbarked.appendChild(el)
  el.style.width = '30px'
  const count = embarkedCounts[e]
  const percent = count / data.length * 100
  el.style.height = `${percent}%`
  el.style.backgroundColor = portColor[e] 
  el.style.margin = '2px'
})

titanicEmbarked.style.display = 'flex'
titanicEmbarked.style.alignItems = 'flex-end'
titanicEmbarked.style.border = '1px solid'
titanicEmbarked.style.width = '200px'
titanicEmbarked.style.height= '300px'

data.sort((a, b) => {
  if (a.fields.sex === 'female') {
    return -1
  }
  return -1
})

data.sort((a,b)=> {
  if (a.fields.survived === 'Yes') {
    return -1
  }
  return 1
 
})
   
data.sort((a,b) => {
  if (a.fields.embarked < b.fields.embarked) {
    return -1
  } else if (a.fields.embarked > b.fields.embarked) {
    return 1
  }
  return 0
})
                                                       

// Let's loop over each passenger and set some styles 
passengers.forEach((p, i) => {
  p.style.width = '20px'
  p.style.height = '20px'
  p.style.borderRadius = data[i].fields.sex === 'female' ? '50%' : '0'
  p.style.opacity = data[i].fields.survived === 'No' ? '0.5' : '1'
  p.style.backgroundColor = portColor[data[i].fields.embarked]
})

// // Variables ---------------------------------------
let state = false;
let showGender = false;
let showCasualties = false;
let showChildren = false;
let showClass = false;
let showFare = false;
const elements = [];
const passengerData = [];


// 	// Total Passengers
	const totalPassengers = fields.length;
	document.getElementById('total-passengers').innerHTML = totalPassengers;
	console.log('Total Passengers:' + totalPassengers);

// 	// Survivors
	const Survivors = fields.filter((passenger) => {
		return passenger.survived === 'Yes';
	});
	document.getElementById('survivors').innerHTML = Survivors.length;
	console.log('Number of Survivors:' + Survivors.length);

// 	// Deaths
	const Casualties = fields.filter((passenger) => {
		return passenger.survived === 'No';
	});
	document.getElementById('deaths').innerHTML = Casualties.length;
	console.log('Number of Casualties:' + Casualties.length);

// 	// Child Passengers 
	const childPassengers = fields.filter((passenger) => {
		return passenger.age < 13;
	});
	document.getElementById('childPassengers').innerHTML = childPassengers.length;
	console.log('Total Number of Child Passengers: ' + childPassengers.length);

// 	// Female Passengers 
	const femalePassengers = fields.filter((passenger) => {
		return passenger.sex === 'female';
	});
	document.getElementById('femalePassengers').innerHTML = femalePassengers.length;
	console.log('Female Deaths: ' + femaleDeaths.length);

	// Male Passengers
	const malePassengers = fields.filter((passenger) => {
		return passenger.sex === 'male';
	});
	document.getElementById('malePassengers').innerHTML = malePassengers.length;
	console.log('Male Deaths: ' + maleDeaths.length);

// 	// Male Deaths
// 	const deadMen = malePassengers.reduce((acc, pass) => {
// 		if (pass.survived === 'No') {
// 			acc += 1;
// 		}
// 		return acc;
// 	}, 0);
// 	document.getElementById('maleDeaths').innerHTML = deadMen;
// 	console.log('Male Deaths: ' + deadMen);

// 	// Female Deaths
// 	const deadWomen = femalePassengers.reduce((acc, pass) => {
// 		if (pass.survived === 'No') {
// 			acc += 1;
// 		}
// 		return acc;
// 	}, 0);
// 	document.getElementById('femaleDeaths').innerHTML = deadWomen;
// 	console.log('Female Deaths: ' + deadWomen);

// 	// Child Deaths (Under 13)
// 	const deadChildren = childPassengers.reduce((acc, child) => {
// 		if (child.survived === 'No') {
// 			acc += 1;
// 		}
// 		return acc;
// 	}, 0);
// 	document.getElementById('childDeaths').innerHTML = deadChildren;
// 	console.log('Child Deaths: ' + deadChildren);

// 	// Challenge 5: Passenger Classes
// 	// const pClasses = new Set()
// 	// const numOfPClasses
// 	// const pc = {}
// 	// fields.forEach((passenger) => {
// 	//   pClasses.add(passenger.pclass)
// 	//   pc[passenger.pclass]
// 	// })

// 	// Access Name, Fare, PClass, Survived Age ------
// 	const allFares = fields.filter((passenger) => passenger.fare !== undefined).map(({ fare }) => fare);
// 	console.log('All Fares:' + allFares);

// 	// Ages ----------------------------------------
// 	const allAges = fields
// 		.filter((passenger) => {
// 			return passenger.age !== undefined;
// 		})
// 		.map((passenger) => {
// 			return passenger.age;
// 		});

// 	const minAge = Math.min(...allAges);
// 	const maxAge = Math.max(...allAges);
// 	const ageRange = maxAge - minAge;

// 	document.getElementById('youngest-passenger').innerHTML = minAge;

// 	document.getElementById('oldest-passenger').innerHTML = maxAge;

// 	console.log('All Ages:' + allAges);
// 	console.log('Min Age:' + minAge);
// 	console.log('Max Age:' + maxAge);
// 	console.log('Age Range:' + ageRange);

// 	renderPassengers(fields, 'render-all-passengers');
// 	renderPassengers(fields, 'render-male-passengers');

// 	// Render Passenger Squares -------------------------
// 	renderPassengers(fields, 'render-all-passengers');

// 	function renderPassengers(data, id) {
// 		const root = document.getElementById(id);

// 		root.style.display = 'flex';
// 		root.style.flexWrap = 'wrap';

// 		data.forEach((passenger, i) => {
// 			const el = document.createElement('div'); // Make element and attach to DOM
// 			root.appendChild(el);
// 			elements.push(el); //store element
// 			passengerData.push(passenger); //store passenger

// 			el.classList.add('square-styles');
// 			el.dataset.index = i; // <div data-index="i">
// 		});
// 	}
// }

// //  Passenger Event Listener -------------------------------
// const body = document.querySelector('body'); // qs will select 1st instance
// body.addEventListener('click', (e) => {
// 	//always takes event object as parameter
// 	const index = e.target.dataset.index;
// 	console.log(index);

// 	if (index !== undefined) showOverlay(index);
// 	console.log(passengerData[index]);
// });

// function showOverlay(index) {
// 	const el = document.getElementById('showOverlay');
// 	const { name, sex, age, survived, fare, pclass } = passengerData[index];
// 	el.style.display = 'block';
// 	el.innerHTML = `
//   <div><span><strong>Name: </strong></span>${name}</div>
//   <div><span><strong>Gender: </strong></span>${sex}</div>
//   <div><span><strong>Age: </strong></span>${age}</div>
//   <div><span><strong>Survived: </strong></span>${survived}</div>
//   <div><span><strong>Passenger Class: </strong></span>${pclass}</div>
//   <div><span><strong>Fare: </strong></span>${fare}</div>
//    `;
// 	el.style.height = '140px';
// 	el.style.width = '220px';
// 	el.style.margin = '3px';
// 	el.style.border = '2px solid black';
// }

// // Toggle Gender Button On/Off -----------------------------
const showGenderButton = document.getElementById('showGenderButton');
showGenderButton.addEventListener('click', (e) => {
	showGender = !showGender;

	if (showGender) {
		e.target.style.backgroundColor = '#3355a3';
		e.target.style.color = 'white';
		e.target.classList.add('buttonActive');
		e.target.innerHTML = 'Reset';
		// show gender in el
		displayGender();
	} else {
		e.target.style.backgroundColor = 'white';
		e.target.style.color = 'black';
		e.target.classList.remove('buttonActive');
		e.target.innerHTML = 'Gender';

		displayGender();
	}
});

// //  Display Gender -------------------------------
function displayGender() {
	console.log(showGender);
	passengerData.forEach((obj, i) => {
		// console.log(obj)
		const el = elements[i];
		let color = obj.sex === 'male' ? '#3355a3' : '#ab3e32';
		if (!showGender) {
			color = '#2b2b2b';
		}
		el.style.backgroundColor = color;
	});
}

// // Toggle Casualties Button On/ Off -----------------
// const showCastualtiesButton = document.getElementById('showCasualtiesButton');
// showCasualtiesButton.addEventListener('click', (e) => {
// 	showCasualties = !showCasualties;

// 	if (showCasualties) {
// 		e.target.style.backgroundColor = '#fdffba';
// 		e.target.classList.add('buttonActive');
// 		displayCasualties();
// 		e.target.innerHTML = 'Reset';
// 	} else {
// 		e.target.style.backgroundColor = 'white';
// 		e.target.classList.remove('buttonActive');
// 		displayCasualties();
// 		e.target.innerHTML = 'Casualties';
// 	}
// });

// // Display Casualties---------------------------
// function displayCasualties() {
// 	console.log(showCasualties);
// 	passengerData.forEach((obj, i) => {
// 		const el = elements[i];
// 		el.innerHTML = obj.survived === 'No' ? '☠︎' : '';
// 		if (!showCasualties) {
// 			el.innerHTML = '';
// 		}
// 	});
// }

// // Toggle Childen Button On/Off -----------------------------
// const showChildrenButton = document.getElementById('showChildrenButton');
// showChildrenButton.addEventListener('click', (e) => {
// 	showChildren = !showChildren;
// 	if (showChildren) {
// 		e.target.classList.add('buttonActive');
// 		e.target.innerHTML = 'Reset';
// 		displayChildren();
// 	} else {
// 		e.target.classList.remove('buttonActive');
// 		e.target.innerHTML = 'Gender';
// 	}
// });

// //  Display Children -------------------------------
// function displayChildren() {
// 	// const childPassengers = fields.filter((passenger) => {
// 	// 	return passenger.age < 13;
// 	// });

// 	console.log('showChildren');
// 	passengerData.forEach((obj, i) => {
// 		const el = elements[i];
// 		let radius = obj.age < 13 ? '50%' : '0%';
// 		// console.log(color);
// 		el.style.borderRadius = radius;
// 		// el.innerHTML = obj.childPassengers === 'True' ? #;
// 		if (!showChildren) {
// 			el.style.borderRadius = '0%';
// 		}
// 	})
// }
