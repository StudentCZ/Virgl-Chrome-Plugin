export const addSaveButton = () => {
    const saveAppliedJob = document.createElement('button');
    document.body.append(saveAppliedJob)

    saveAppliedJob.innerText = 'Save to my jobs'
}