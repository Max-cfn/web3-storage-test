import Web3Storage from 'web3.storage'

//const token = process.env.API_TOKEN
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDIyNDU1MWVmOENGRUFGOThjNkQzZkZGQTlFMmRFQjU3NmM0QTIyMjgiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2NTYwNTk4ODc0MzAsIm5hbWUiOiJ6b2IxKHRlc3QpIn0.5iEpHoKv7XGIqSc9EMaouuR2xXNM7VmIjRZhQDkXUSw'
const client = new Web3Storage({ token })

async function retrieveFiles() {
    console.log("zob1")
    const cid =
        'bafybeiaeeeo632g7qxszov4zbschx4uff6rv2k3y4f4elyjcknpseabfsa'

    const res = await client.get(cid)
    console.log(`Got a response! [${res.status}] ${res.statusText}`)
    if (!res.ok) {
        throw new Error(`failed to get ${cid} - [${res.status}] ${res.statusText}`)
    }
    const files = await res.files()


    for (const file of files) {
        console.log(`${file.cid}: ${file.name} (${file.size} bytes)`)
            //fonction pour faire patienter
        setTimeout(1000);
    }

}

retrieveFiles()