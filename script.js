import "bootstrap";``
import "bootstrap/dist/css/bootstrap.min.css"
import "axios";

const form = document.querySelector('[data-form]')
const queryParamsContainer = document.querySelector('[data-params]')
const requestHeadersContainer = document.querySelector('[data-request-headers]')

document
    .querySelector('[data-add-params-btn]')
    .addEventListener('click', () => {
        queryParamsContainer.append(createkeyValuePair())
    })

    document
    .querySelector('[data-add-request-headers-btn]')
    .addEventListener('click', () => {
        requestHeadersContainer.append(createkeyValuePair())
    })

queryParamsContainer.append(createkeyValuePair())
requestHeadersContainer.append(createkeyValuePair())

form.addEventListener('submit', (e) => {
    e.preventDefault()

    axios({
        url: document.querySelector('[data-url]').value,
        method: document.querySelector('[data-method]').value,
        params: ,
        headers: keyValuePairsToObjects
    })
})


function createkeyValuePair() {
    const element =  document.querySelector("[data-key-value-template]").content.cloneNode(true)
    element.querySelector('[data-remove-btn]').addEventListener('click',(e) => {
        e.target.closest('[data-key-value-pair]').remove()
    })
    return element
}