//load all data
const loadData = async () => {
    loader(true);
    const URL = `https://openapi.programming-hero.com/api/ai/tools`;
    const res = await fetch(URL);
    const data = await res.json();
    displayData(data.data.tools);
    enableButton();
}

//load data for modal
const loadModalData = async (id) => {
    loader(true);
    const URL = `https://openapi.programming-hero.com/api/ai/tool/${id}`;
    const res = await fetch(URL);
    const data = await res.json();
    detailsDisplay(data)
}

// see more event handler
document.getElementById('btn-see-more').addEventListener('click', function () {
    enableButton();
    loader(true);
    const URL = `https://openapi.programming-hero.com/api/ai/tools`;
    fetch(URL).then(res => res.json()).then(data => displayAllData(data.data.tools)).catch(console.error())
})

//spinner before data loading
const loader = isLoading => {
    const loaderSection = document.getElementById('loader')
    if (isLoading) {
        loaderSection.classList.remove('d-none');
    } else {
        loaderSection.classList.add('d-none');
    }
}

//sort button disable
function disabledButton() {
    document.getElementById('btn-sorting').disabled = true;
}

//sort button enable
function enableButton() {
    document.getElementById('btn-sorting').disabled = false;
}