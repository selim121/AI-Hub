// display size data
const displayData = allData => {
    const showAll = document.getElementById('see-more');
    if (allData.length > 6) {
        allData = allData.slice(0, 6);
        showAll.classList.remove('d-none');
    } else {
        showAll.classList.add('d-none');
    }
    allData.forEach(singleData => {
        const cardContainer = document.getElementById('card-container');
        const cardDiv = document.createElement('div');
        cardDiv.classList.add('col');
        cardDiv.innerHTML = `
        <div class="card shadow h-100">
            <div class="card-body">
                <img src="${singleData.image}" class="card-img-top card-img" alt="...">
                <p class="card-title mt-3 fw-semibold ">Features</p>
                <ol class="auh-feature-color">
                    <li >${singleData.features[0]}</li>
                    <li>${singleData.features[1]}</li>
                    <li>${singleData.features.length > 2 ? singleData.features[2] : 'Data unavailable'}</li>
                    <li>${singleData.features.length > 3 ? singleData.features[3] : 'Data unavailable'}</li>
                </ol>
            </div>
            <div class="card-footer bg-gradient">
                    <div class="d-flex justify-content-between align-items-center">
                        <div>
                            <p class="fw-semibold fs-5">${singleData.name}</p>
                            <div class="d-flex align-items-center auh-feature-color">
                                <i class="fa-solid fa-calendar-days"></i>
                                <p class="m-0 ms-2">${singleData.published_in}</p>
                            </div>
                        </div>
                        <button  onclick="loadModalData('${singleData.id}')" class="auh-arrow-btn" data-bs-toggle="modal" data-bs-target="#details"><i class="fa-solid fa-arrow-right"></i></button>
                    </div>
                </div>
        </div>
        `;
        cardContainer.appendChild(cardDiv);
    });
    loader(false);

    document.getElementById('btn-sorting').addEventListener('click', function (data) {
        disabledButton();
        loader(true);
        const loadAllData = async () => {
            const cardContainer = document.getElementById('card-container');
            cardContainer.innerHTML = '';
            const URL = `https://openapi.programming-hero.com/api/ai/tools`;
            const res = await fetch(URL);
            const data = await res.json();
            display(data);
        }

        const display = data => {
            data = data.data.tools;
            data.sort(function (a, b) {
                return new Date(a.published_in) - new Date(b.published_in);
            })
            displayData(data);
        }

        loadAllData();
        loader(false);


    })
}

//display all data
const displayAllData = data => {
    const cardContainer = document.getElementById('card-container');
    cardContainer.innerHTML = '';
    const showAll = document.getElementById('see-more');
    showAll.classList.add('d-none');
    data.forEach(singleData => {
        const cardContainer = document.getElementById('card-container');
        const cardDiv = document.createElement('div');
        cardDiv.classList.add('col');
        cardDiv.innerHTML = `
        <div class="card shadow h-100">
            <div class="card-body">
                <img src="${singleData.image}" class="card-img-top card-img" alt="...">
                <p class="card-title mt-3 fw-semibold ">Features</p>
                <ol class="auh-feature-color">
                    <li >${singleData.features[0]}</li>
                    <li>${singleData.features[1]}</li>
                    <li>${singleData.features.length > 2 ? singleData.features[2] : 'Data unavailable'}</li>
                    <li>${singleData.features.length > 3 ? singleData.features[3] : 'Data unavailable'}</li>
                </ol>
            </div>
            <div class="card-footer bg-gradient">
                    <div class="d-flex justify-content-between align-items-center">
                        <div>
                            <p class="fw-semibold fs-5">${singleData.name}</p>
                            <div class="d-flex align-items-center auh-feature-color">
                                <i class="fa-solid fa-calendar-days"></i>
                                <p class="m-0 ms-2">${singleData.published_in}</p>
                            </div>
                        </div>
                        <button onclick="loadModalData('${singleData.id}')" class="auh-arrow-btn" data-bs-toggle="modal" data-bs-target="#details"><i class="fa-solid fa-arrow-right"></i></button>
                    </div>
                </div>
        </div>
        `;
        cardContainer.appendChild(cardDiv);
    });
    loader(false);

    document.getElementById('btn-sorting').addEventListener('click', function (data) {
        disabledButton();
        loader(true);
        const loadAllData = async () => {
            const cardContainer = document.getElementById('card-container');
            cardContainer.innerHTML = '';
            const URL = `https://openapi.programming-hero.com/api/ai/tools`;
            const res = await fetch(URL);
            const data = await res.json();
            display(data);
        }

        const display = data => {
            data = data.data.tools;
            data.sort(function (a, b) {
                return new Date(a.published_in) - new Date(b.published_in);
            })
            displayAllData(data);
        }

        loadAllData();
        loader(false);
    })
}

loadData();