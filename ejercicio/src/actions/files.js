import { saveAs } from "file-saver"


export function write(data) {

    console.log('string: ',data)
    const blob = new Blob([data], { type: 'text/plain;charset=utf-8' } )
    saveAs(blob, './usuarios.txt')
}


