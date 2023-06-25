import React from "react"

export default function Meme() {

    const [meme, setMeme] = React.useState ({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })

    // console.log(meme)

    const [allMemeImages, setAllMemeImages] = React.useState([])

    React.useEffect(() => {
        fetch(`https://api.imgflip.com/get_memes`)
            .then(res => res.json())
            .then(data => setAllMemeImages(data.data.memes))
    }, [])

    function getMemeImg () {
        const randomMeme = Math.floor(Math.random() * allMemeImages.length)
        const url = allMemeImages[randomMeme].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
    }


    function handleChange(event) {
        const {name, value} = event.target
        setMeme(prevData => {
            return {
                ...prevData,
                [name]: value
            }
        })
    }

    function handleSubmit(event) {
        event.preventDefault()
    }

    return (
        <main className="main-container" onSubmit={handleSubmit}>
            <form className="form-container"> 
                <input 
                    type="text" 
                    placeholder="Top Text"
                    onChange={handleChange}
                    name="topText"
                    value={meme.topText}
                />
                <input 
                    type="text" 
                    placeholder="Bottom Text"
                    onChange={handleChange}
                    name="bottomText"
                    value={meme.bottomText}
                />
                <button onClick={getMemeImg}>
                    Get a new meme image 🖼
                </button>
                <div className="meme">
                    <img src={meme.randomImage} className="meme--image" />
                    <h2 className="meme--text top">{meme.topText}</h2>
                    <h2 className="meme--text bottom">{meme.bottomText}</h2>
                </div>
            </form>
        </main>
    )
}