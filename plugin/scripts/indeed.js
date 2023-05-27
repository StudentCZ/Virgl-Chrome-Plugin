(() => {
    chrome.runtime.onMessage.addListener((obj, _sender, _response) => {    
        const urlParams = new URLSearchParams(window.location.search);
        const jobNumber = urlParams.get('vjk') ?? urlParams.get('jk');
    
        const jobTitle = document.querySelector('.jobsearch-JobInfoHeader-title')?.textContent
        const jobCompany = document.querySelector('.jobsearch-CompanyInfoContainer a:first-child')?.textContent
        const jobDescription = document.querySelector('#jobDescriptionText')?.textContent
        const indeedApplyButtonWrapper = document.querySelector('#jobsearch-ViewJobButtons-container')
        const indeedApplyButton = document.querySelector('.jobsearch-ButtonContainer-inlineBlock');
        const indeedSaveButton = document.querySelector('#saveJobButtonContainer')

        const existingSaveButton = document.querySelector('.virgl-added-button');
        if (existingSaveButton) {
            indeedApplyButtonWrapper.removeChild(existingSaveButton);
        }

        const saveButton = document.createElement('button');
        saveButton.classList.add('virgl-added-button')
        indeedApplyButtonWrapper.append(saveButton)
        saveButton.textContent = "Virgl Save"
        saveButton.style.setProperty('order', '2')
        indeedApplyButton.style.setProperty('order', '1');
        indeedSaveButton.style.setProperty('order', '3')
    
        // todo: the jobTitle and jobCompany doesn't seem to show up on the dashboard. Coz of React
        // todo: check on mutation observer (might not work?)
        // todo: check on intervals and timeouts
    
        saveButton.addEventListener('click', () => {
            console.log('receive message from extension', obj)
            console.log('saving details:', {
                jobNumber,
                jobTitle,
                jobCompany,jobDescription
            })
        })
    })
})()
