import data from './titanic-data.js'

const titanic = document.querySelector('#titanic')

titanic.style.display = 'grid'
titanic.style.gridTemplateColumns = 'repeat(20, 10px)'
titanic.style.gridGap = '1px'

const passengers = data.map(p => {
  return document.createElement('div')
})

passengers.forEach(p => {
  titanic.appendChild(p)
})

passengers.forEach((p, i) => {
  const el = document.createElement('div')
  titanic.appendChild(el)
  el.style.width = '20px'
  el.style.height = '20px'
  el.style.border = '1px solid'
  el.style.margin = '1px'
  el.style.backgroundColor = p.fields.survived === 'Yes' ? 'tomato' : 'grey'
  el.style.borderRadius = p.fields.sex === 'female' ? '50%' : '0'
})

// Get a reference to the #titanic


// Set some styles on the titanic
// display flex, justifyContent center, alignItems flex-end
titanic.style.display = 'grid'
titanic.style.gridTemplateColumns = 'repeat(20, 10px)'
titanic.style.gridGap = '1px'

// Map over the data and make a new element for each passenger
const passengers = data.map(p => {
  return document.createElement('div')
})

// Loop over each passenger and append them to the titanic
  
// Let's loop over each passenger and set some styles 
passengers.forEach((p, i) => {
  p.classList.add('passenger')
p.style.width = '15px'
p.style.height = '15px'
p.style.borderRadius = data[i].fields.sex === 'female'
p.style.opacity  = data[i].fields.survived === 'Yes'
p.style.backgroundColor = portColor[data[i].fields]
})

})
  // Challenges - 

// Make the squares a little bigger 15px by 15px. 
// You'll need to change both the gridTemplateColumn on the
// titanic and the width and height of each passenger. 



// Change the number of columns on the titanic to 34


// Display each passenger as a circle if they are female. 
// Do this by setting the borderRadius of each passenger. 
// Match the passenger in passengers to the object data 
// in the data array by the index. 



// Display each passengers who did not survive as 
// opacity 0.5. 



// Set the backgroundColor of each passenger by their 
// embarked value. There are three possible values: 
// 'S', 'C', and 'Q'

const passengerDetails = document.querySelector('#passengerDetails')

document.body.addEventListener('mouseover', (e) => {
  if (e.target.matches('.passenger')) {
console.log('mouse enter passenger!')
  }
})