function getFiles() { //obtenir le fichier séléctionné sur la page web par l'utilisateur
    const fileInput = document.querySelector('input[type="file"]')
    console.log(fileInput) //verifier si le fichier est bien séléctionné
    return fileInput.files
}

//make file objects
function makeFileObjects(fileInput) {
    console.log("in function") //verifier qu'on est dans la fonction.
    const obj = { hello: 'world' }
    const blob = new Blob([Text], { type: 'text/plain' })

    const files = [
        new File(['contents-of-file-1'], 'plain-utf8.txt'),
        new File([blob], fileInput),
    ]
    return files
}