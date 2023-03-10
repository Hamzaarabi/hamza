const createNewProjectCard = (title, imageUrl, text) => {
    const newCard = document.createElement('div')
    newCard.classList.add('card')
  
    const cardTitle = document.createElement('h3')
    cardTitle.classList.add('card__title')
    cardTitle.innerText = title
    newCard.appendChild(cardTitle)
  
    const cardImage = document.createElement('img')
    cardImage.classList.add('card__img')
    cardImage.src = imageUrl
    cardImage.alt = ''
    newCard.appendChild(cardImage)
  
    const cardDescription = document.createElement('p')
    cardDescription.classList.add('card__text')
    cardDescription.innerText = text
    newCard.appendChild(cardDescription)
  
    return newCard
  } 
  
  const resetForm = () => {
    document.querySelector('#project-title').value = ''
    document.querySelector('#project-img-link').value = ''
    document.querySelector('#project-text').value = ''
  }
  
  const handleSubmit = (event) => {
    event.preventDefault()
    const formTitle = document.querySelector('#project-title').value
    const formImageUrl = document.querySelector('#project-img-link').value
    const formText = document.querySelector('#project-text').value
    const newProjectCard = createNewProjectCard(formTitle, formImageUrl, formText)
    document.querySelector('#cards').appendChild(newProjectCard)
    resetForm()
  }

  function valider(x) {
    x.innerHTML = ""
    let c = 0

    var email = document.getElementById('email')
    var expEmail = new RegExp("[a-zA-Z0-9]+[_-]?[a-zA-Z0-9]+@{1}gmail\.com{1}")
    
    if(expEmail.exec(email.value)){
        c++
    } else {
        x.innerHTML += "!! Email format incorrect.."+"<br>"
        x.style.color = 'red' 
        x.style.display ='block'
      }

        var pw = document.getElementById('password')
            var expPw = /^[a-zA-Z0-9@]{8,16}$/
            if(expPw.exec(pw.value)){
                c++
            } else {
                x.innerHTML += "!! Password format incorrect ..."+"<br>"
                x.style.color = 'red' 
                x.style.display ='block'
              }

                
                if(c==2){
                  x.innerHTML = "Correct ..."
                  x.style.color = "green"
                  x.style.display ='block'
              } 

    }