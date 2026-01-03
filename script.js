const key = [
    document.querySelector('#key-a'),
    document.querySelector('#key-s'),
    document.querySelector('#key-d'),
    document.querySelector('#key-f'),
    document.querySelector('#key-g'),
    document.querySelector('#key-h'),
    document.querySelector('#key-j'),
    document.querySelector('#key-k'),
    document.querySelector('#key-l')
]

const sound = [
    document.querySelector('#key-a audio'),
    document.querySelector('#key-s audio'),
    document.querySelector('#key-d audio'),
    document.querySelector('#key-f audio'),
    document.querySelector('#key-g audio'),
    document.querySelector('#key-h audio'),
    document.querySelector('#key-j audio'),
    document.querySelector('#key-k audio'),
    document.querySelector('#key-l audio')
]

const root = document.querySelector(':root')

root.addEventListener('keydown', function(event) {
    switch(event.key){
        case "a":
            sound[0].currentTime = 0
            sound[0].play()
            if (!key[0].classList.contains('keydown')){
                key[0].classList.add('keydown')
            } 
            break
        
        case "s":
            sound[1].currentTime = 0
            sound[1].play()
            if (!key[1].classList.contains('keydown')){
                key[1].classList.add('keydown')
            } 
            break
        
        case "d":
            sound[2].currentTime = 0
            sound[2].play()
            if (!key[2].classList.contains('keydown')){
                key[2].classList.add('keydown')
            } 
            break
        
        case "f":
            sound[3].currentTime = 0
            sound[3].play()
            if (!key[3].classList.contains('keydown')){
                key[3].classList.add('keydown')
            } 
            break
        
        case "g":
            sound[4].currentTime = 0
            sound[4].play()
            if (!key[4].classList.contains('keydown')){
                key[4].classList.add('keydown')
            } 
            break
        
        case "h":
            sound[5].currentTime = 0
            sound[5].play()
            if (!key[5].classList.contains('keydown')){
                key[5].classList.add('keydown')
            } 
            break
        
        case "j":
            sound[6].currentTime = 0
            sound[6].play()
            if (!key[6].classList.contains('keydown')){
                key[6].classList.add('keydown')
            }
            break
        
        case "k":
            sound[7].currentTime = 0
            sound[7].play()
            if (!key[7].classList.contains('keydown')){
                key[7].classList.add('keydown')
            } 
            break
        
        case "l":
            sound[8].currentTime = 0
            sound[8].play()
            if (!key[8].classList.contains('keydown')){
                key[8].classList.add('keydown')
            } 
            break
    }
})

root.addEventListener('keyup', function(event){
    switch(event.key){
        case "a":
            key[0].classList.remove('keydown')
            break
        
        case "s":
            key[1].classList.remove('keydown')
            break
        
        case "d":
            key[2].classList.remove('keydown')
            break
        
        case "f":
            key[3].classList.remove('keydown')
            break
        
        case "g":
            key[4].classList.remove('keydown')
            break
        
        case "h":
            key[5].classList.remove('keydown')
            break
        
        case "j":
            key[6].classList.remove('keydown')
            break
        
        case "k":
            key[7].classList.remove('keydown')
            break
        
        case "l":
            key[8].classList.remove('keydown')
            break
    }
})