import { Web3Storage, getFilesFromPath } from 'web3.storage'

//const token = process.env.API_TOKEN
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDIyNDU1MWVmOENGRUFGOThjNkQzZkZGQTlFMmRFQjU3NmM0QTIyMjgiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2NTYwNTk4ODc0MzAsIm5hbWUiOiJ6b2IxKHRlc3QpIn0.5iEpHoKv7XGIqSc9EMaouuR2xXNM7VmIjRZhQDkXUSw'
const client = new Web3Storage({ token })

async function retrieveFiles() {
    const cid =
        'bafybeiaeeeo632g7qxszov4zbschx4uff6rv2k3y4f4elyjcknpseabfsa'

    const res = await client.get(cid)
    const files = await res.files()

    for (const file of files) {
        console.log(`${file.cid}: ${file.name} (${file.size} bytes)`)
    }
}

retrieveFiles()