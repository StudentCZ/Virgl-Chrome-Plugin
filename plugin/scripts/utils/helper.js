export const addSaveButton = () => {
  const saveAppliedJob = document.createElement('button')
  document.body.append(saveAppliedJob)

  saveAppliedJob.innerText = 'Save to my jobs'

  saveAppliedJob.style.setProperty('position', 'fixed');
  saveAppliedJob.style.setProperty('right', '2rem');
  saveAppliedJob.style.setProperty('bottom', '2rem');
  saveAppliedJob.style.setProperty('z-index', '50');
  saveAppliedJob.style.setProperty('cursor', 'pointer');

  return saveAppliedJob;
}


