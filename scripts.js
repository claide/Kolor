var url = 'http://colormind.io/api/'
var data = {
    model: 'default'
}

var request = new XMLHttpRequest()

request.onreadystatechange = function() {
	if(request.readyState == 4 && request.status == 200) {
        var scheme = JSON.parse(request.responseText).result
        scheme.forEach(colour => {
            const column = document.createElement('div')
            const rgbContainer = document.createElement('p')

            column.setAttribute('class', 'column')
            rgbContainer.setAttribute('class', 'hex-container')

            app.appendChild(column)
            column.style.backgroundColor = `rgb(${colour})`
            column.appendChild(rgbContainer)

            rgbContainer.textContent = `${colour}`
        })
	}
}

request.open("POST", url, true)
request.send(JSON.stringify(data))

const app = document.getElementById('app')