//display modal data
const detailsDisplay = data =>{
        loader(true);
        const featureLength = Object.keys(data.data.features);
        const modalContainer = document.getElementById('modal-container');
        modalContainer.innerHTML = '';
        const containerDiv = document.createElement('div');
        containerDiv.classList.add('p-3');
        containerDiv.innerHTML = `
        <p class="fw-semibold">${data.data.description}</p>
        <div class="d-flex justify-content-evenly align-items-center fs-7 g-2">
            <div class="auh-subscription" style="color: #4be106;">
                <p class="auh-subscription m-0 text-center">
                    ${data.data.pricing === null ? 'Data unavailable' : data.data.pricing[0].price}<br>${data.data.pricing === null ? 'Data unavailable' : data.data.pricing[0].plan}
                </p>
            </div>
            <div class="auh-subscription" style="color: #e36545;">
                <p class="auh-subscription m-0 text-center">
                    ${data.data.pricing === null ? 'Data unavailable' : data.data.pricing[1].price}<br>${data.data.pricing === null ? 'Data unavailable' : data.data.pricing[1].plan}
                </p>
            </div>
            <div class="auh-subscription" style="color: #f60000;">
                <p class="auh-subscription m-0 text-center">
                    ${data.data.pricing === null ? 'Data unavailable' : data.data.pricing[2].price}<br>${data.data.pricing === null ? 'Data unavailable' : data.data.pricing[2].plan}
                </p>
            </div>
        </div>
        <div class="row mt-4">
            <div class="col">
                <p class="fw-semibold">Features</p>
                <ul class="auh-feature-color fs-7">
                    <li>${data.data.features[1].feature_name}</li>
                    <li>${data.data.features[2].feature_name}</li>
                    <li>${featureLength.length > 2 ? data.data.features[3].feature_name : 'Data unavailable'}</li>
                    <li>${featureLength.length > 3 ? data.data.features[4].feature_name : 'Data unavailable'}</li>
                </ul>
            </div>
            <div class="col">
                <p class="fw-semibold">Integrations</p>
                <ul class="auh-feature-color fs-7">
                <li>${data.data.integrations === null ? 'Data unavailable' : data.data.integrations[0] === undefined ? 'Data unavailable' : data.data.integrations[0]}</li>
                <li>${data.data.integrations === null ? 'Data unavailable' : data.data.integrations[1] === undefined ? 'Data unavailable' : data.data.integrations[1]}</li>
                <li>${data.data.integrations === null ? 'Data unavailable' : data.data.integrations[2] === undefined ? 'Data unavailable' : data.data.integrations[2]}</li>
                <li>${data.data.integrations === null ? 'Data unavailable' : data.data.integrations[3] === undefined ? 'Data unavailable' : data.data.integrations[3]}</li>
                </ul>
            </div>
        </div>
        `;
        modalContainer.appendChild(containerDiv);

        const modalImage= document.getElementById('modal-image');
        modalImage.innerHTML = '';
        const imageDiv = document.createElement('div');
        imageDiv.classList.add('p-3');
        imageDiv.innerHTML = `
        <div class="card border-0">
            <img src="${data.data.image_link[0]}" class="card-img-top card-img" alt="Card image">
            <div class="card-body">
                <h5 class="card-title text-center fw-semibold">${data.data.input_output_examples === null ? 'Data unavailable' : data.data.input_output_examples[0].input}</h5>
                <p class="card-text text-center">${data.data.input_output_examples === null ? 'Data unavailable' : data.data.input_output_examples[0].output}</p>
                <button id="btn-accuracy" class="d-none auh-accuracy-btn btn-sm" style="position: absolute; top: 1px; right: 1px;">${data.data.accuracy.score === null ? 'Data unavailable' : data.data.accuracy.score*100}% accuracy</button>
            </div>
        </div>
      
        `;
        modalImage.appendChild(imageDiv);

        if(data.data.accuracy.score !== null){
            const btnAccuracy = document.getElementById('btn-accuracy');
            btnAccuracy.classList.remove('d-none');
        }

        loader(false);
}

