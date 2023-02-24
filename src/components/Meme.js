import React from "react"
// import memesData from '../memesData'

export default function Meme(){
    const [meme, setMeme] = React.useState({
        topText: "",
        botoomText: "",
        randomImage: "https://i.imgflip.com/30b1gx.jpg"
    })
    const [allMemeImages, setAllMemeImages] = React.useState([])
    
    React.useEffect(()=> {
        async function getMemes(){
            const res = await fetch("https://api.imgflip.com/get_memes")
            const data = await res.json()
            setAllMemeImages(data.data.memes)
        }
        getMemes()
    }, [])
  
    function handleChange(event){
        const {name, value} = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }
    
    function getMemeImage(){
        const randomNumber = Math.floor(Math.random() * allMemeImages.length)
        const url = allMemeImages[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
    }

    return(
        <main>
            <div className="form">
                <input type="text" className="form-input" name="topText" value={meme.topText} onChange={handleChange} placeholder="Top text"/>
                <input type="text" className="form-input" name="botoomText" value={meme.botoomText} onChange={handleChange} placeholder="Botton text"/>
                <button type="" className="form-button" onClick={getMemeImage}>Get a new meme image 🖼️</button>
            </div>
            <div className="meme">
                <img src={meme.randomImage} className="meme-image"/>
                <h2 className="meme-text top"> {meme.topText}</h2>
                <h2 className="meme-text bottom"> {meme.botoomText}</h2>
            </div>   
        </main>
    )
}

