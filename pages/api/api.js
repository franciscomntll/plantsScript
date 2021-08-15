import fs from 'fs'

export default function handler(req, res) {
    const arr = []
    
    for (let x = -16; x < 17; x++) {
        
        for (let y = -16; y < 17; y++) {
            arr.push([x,y])
        }
        
    }
    try {
        fs.writeFile("prueba.json", JSON.stringify(arr), (err, result) => {
            console.log(result)
        })
    } catch (error) {
        console.log(error)
    }

    res.status(200).json({ name: 'John Doe' })
  }

  