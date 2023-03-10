
const generateMasonryItems = async () => {

    const num = document.getElementById('num').value
    const masonryContainer = document.getElementsByClassName('masonry').item(0)
    const colors = await getRandomColors(num)

    masonryContainer.innerHTML = ""

    for (let i = 0; i < num; i++) {
        const item = document.createElement('div')

        item.classList = ['masonry-item']
        item.textContent = await getLoremIpsum()
        item.style.backgroundColor = colors[i]

        masonryContainer.appendChild(item)
    }

}

const getLoremIpsum = async () => {
    const request = await fetch("https://baconipsum.com/api/?type=meat-and-filler")
    const response = await request.json()

    return response[0]
}

const getRandomColors = async (num) => {
    const request = await fetch("https://www.colr.org/json/colors/random/" + num)
    const response = await request.json()

    return response.colors.map(s => `#${s.hex}`)
}