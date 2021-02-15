import data from './titanic-data.js'

const titanic = document.querySelector('#titanic')

titanic.style.display = 'grid'
titanic.style.justifyContent = 'center'
titanic.style.gridTemplateColumns = 'repeat(34, 12px)'
titanic.style.gridGap = '7px'
titanic.style.backgroundColor = 'white'

const passengers = data.map(p => {
  return document.createElement('div')
})

// Loop over each passenger and append them to the titanic
passengers.forEach(p => {
  titanic.appendChild(p)
})

function sortSurvival() {
  data.sort((a,b) => {
    if (a.fields.survived < b.fields.survived) {
      return -1
    } else if (a.fields.survived > b.fields.survived) {
      return 1
    }
      return 0
  })
}

function sortEmbarked() {
  data.sort((a,b) => {
    if (a.fields.embarked < b.fields.embarked){
      return -1
    } else if (a.fields.embarked > b.fields.embarked) {
      return 1
    }
    return 0
  })
} 

function sortAge() {
  data.sort((a,b) => {
    return a.fields.age - b.fields.age
  })
}

function sortSex() {
  data.sort((a,b) => {
    if (a.fields.sex < b.fields.sex) {
      return -1
    } else if (a.fields.sex > b.fields.sex) {
      return 1
    }
    return 0
  })
}

function sortClass() {
  data.sort((a,b) => {
    if (a.fields.pclass < b.fields.pclass) {
      return -1
    } else if (a.fields.pclass > b.fields.pclass) {
      return 1
    }
    return 0
  })
}

function sortFare() {
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


function renderPassengerStyles() {
  passengers.forEach((p, i) => {
  p.classList.add('passenger')
  p.dataset.id = i
  
  p.style.width = '15px'
  p.style.height = '15px'
  
  p.style.borderRadius = data[i].fields.sex === 'female' ? '50%' : '0'
 
  p.style.opacity = data[i].fields.survived === 'Yes' ? '1.0' : '.5'
  
  p.style.backgroundColor = portColor[data[i].fields.embarked]
})
}
renderPassengerStyles()

const passengerDetails = document.querySelector('#passenger-details')
document.body.addEventListener('mouseover', (e) => {
  if (e.target.matches('.passenger')) {
      const id = e.target.dataset.id
      const fields = data[id].fields
      passengerDetails.style.display = 'block'
      passengerDetails.style.position = 'absolute'
      passengerDetails.style.left = `${e.pageX - 290}px`
      passengerDetails.style.top = `${e.pageY - 200}px`
      passengerDetails.style.backgroundColor = 'white'
      passengerDetails.style.width = '200px'
      passengerDetails.style.height = '180px'
      passengerDetails.style.border = '1px solid orange'
      passengerDetails.style.padding = '1em'
      passengerDetails.innerHTML = `
      <strong>${fields.name}</strong>
      <ul>
        <li>Age: ${fields.age}</li>
        <li>Survived: ${fields.sex}</li>
        <li>Class: ${fields.pclass}</li>
        <li>Age: ${fields.survived}</li>
        <li>Survived: ${fields.embarked}</li>
        <li>Class: ${fields.fare}</li>
      </ul>`
  }
} )

document.body.addEventListener('mouseout', (e) => {
  if (e.target.matches('.passenger')) {
    // hide passenger details div when mouse over div
    passengerDetails.style.display = 'none'
  }
})

document.body.addEventListener('click', (e) => {
  if (e.target.matches('.sort-by-age')) {
    // call the function to sort by age written above and sorts data
    sortAge()
    // render the new styles when you click the button and the data sorts differently
    renderPassengerStyles()
  } else if (e.target.matches('.sort-by-fare')) {
    sortFare()
    renderPassengerStyles()
  } else if (e.target.matches('.sort-by-embarked')) {
    sortEmbarked()
    renderPassengerStyles()
  } else if (e.target.matches('.sort-by-class')) {
    sortClass()
    renderPassengerStyles()
  } else if (e.target.matches('.sort-by-sex')) {
    sortSex()
    renderPassengerStyles()
  } else if (e.target.matches('.sort-by-survival')) {
    sortSurvival()
    renderPassengerStyles()
}
})
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

