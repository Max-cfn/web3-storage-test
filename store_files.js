//configurer web3 et le client
import { Web3Storage } from 'web3.storage'

function getAccessToken() {
    //on met un token en dur en attendant
    return 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDIyNDU1MWVmOENGRUFGOThjNkQzZkZGQTlFMmRFQjU3NmM0QTIyMjgiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2NTYwNTk4ODc0MzAsIm5hbWUiOiJ6b2IxKHRlc3QpIn0.5iEpHoKv7XGIqSc9EMaouuR2xXNM7VmIjRZhQDkXUSw'
        //return process.env.WEB3STORAGE_TOKEN
}

function makeStorageClient() {
    return new Web3Storage({ token: getAccessToken() })
}




//commencer la recherche de fichier et l'upload

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


//upload files to storage
async function storeFiles(files) {
    const client = makeStorageClient() //voir fct makeStorageClient
    const cid = await client.put(files)
    console.log('stored files with cid:', cid)
    return cid
}