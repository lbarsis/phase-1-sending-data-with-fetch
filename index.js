// Add your code here
function init() {
  // const form = document.querySelector('form')
  // form.addEventListener('submit', submitDog)
  // form.addEventListener('submit', submitData('Levi','lbarsis@gmail.com'))
}

// function submitDog(e) {
//   e.preventDefault()
//   const input = document.querySelector('#dogName').value

//   const results = document.querySelector('#results')


//   fetch(`http://localhost:3000/dogs`)
//   .then(resp => resp.json())
//   .then(dogs => dogs.forEach(dog => {
//     if (dog.dogName === input) {
//       listItem = document.createElement('li')
//       listItem.textContent = dog
//       results.appendChild(listItem)
//     }
//   }))
// // arr.filter((el) => el.toLowerCase().includes(query.toLowerCase()));
// }

function submitData(name, email) {
  const results = document.querySelector('#results')
  const body = document.querySelector('body')
  
  const configurationObject = {
    method:'POST',
    headers: {
      "Content-Type": 'application/json',
      "Accept": "application/json"
    },
    body: JSON.stringify({
      name: name,
      email: email
    })
  }

  return fetch('http://localhost:3000/users', configurationObject)
  .then(resp => resp.json())
  .then(user => {
    // listItem = document.createElement('li')
    // listItem.textContent = user.id
    body.append(user.id)
  })
  .catch(error => {
    alert('Unauthorized Access')
    body.append(error)
  })
}

document.addEventListener('DOMContentLoaded', init)
