// import { colorSchemeOption } from "./data.js"
const modes = ["Monochrome", "Monochrome-dark", "Monochrome-light", "Analogic", "Analogic-complement", "Complement", "Triad"]
const colorSchemeSelect = document.getElementById('colorSchemeSelect')
const hexColor = document.getElementById('hexColor')
let optionHtml = ''


document.getElementById('colorForm').addEventListener('submit', (e) => {
    e.preventDefault()
    let colorSchemeHtml = ''
    const hexVal = hexColor.value.slice(1, hexColor.value.length)
    const modeScheme = (colorSchemeSelect.value).toLowerCase()

    fetch(`https://www.thecolorapi.com/scheme?hex=${hexVal}&mode=${modeScheme}&count=5`, {method: 'GET'})
        .then(response => response.json())
        .then(data => {
            data.colors.map(color => {
                console.log(color.hex.value)
                colorSchemeHtml += 
                `
                <div class="colorBox" data-hex="${color.hex.value}">
                    <div style="background-color: ${color.hex.value}; width: 110; height: 100vh;"></div>
                    <div class="hexText">${color.hex.value}</div>
                </div>
                `
            })
            document.getElementById('colorSchemeDisplay').innerHTML = colorSchemeHtml
            document.querySelectorAll('.colorBox').forEach(colorBox => {
                colorBox.addEventListener('click', e => {
                    const hexValue = e.currentTarget.getAttribute('data-hex')
                    navigator.clipboard.writeText(hexValue)
                        // .then(() => console.log('Copied color to clipboard', hexValue))
                        // .catch(error => console.log('Could not copy color:', error))
                })
            })
        })
        .catch(error => console.log(error))
})






modes.map(mode => {
    optionHtml += `<option value="${mode}">${mode}</option>`
})

document.getElementById('colorSchemeSelect').innerHTML = optionHtml

// const hexToRgb = (hex) => {
//     const r = parseInt(hex.slice(1, 3), 16);
//     const g = parseInt(hex.slice(3, 5), 16);
//     const b = parseInt(hex.slice(5, 7), 16);
//     return {r , g, b}
// }


