export const BUTTON_ID = 'virgl-save-job-button'

export const addButton = (label) => {
  const existingButton = document.getElementById(BUTTON_ID)

  if (existingButton) {
    existingButton.remove()
  }

  const saveAppliedJob = document.createElement('button')
  document.body.append(saveAppliedJob)

  saveAppliedJob.innerText = label
  saveAppliedJob.id = BUTTON_ID

  saveAppliedJob.style.setProperty('position', 'fixed')
  saveAppliedJob.style.setProperty('right', '2rem')
  saveAppliedJob.style.setProperty('bottom', '2rem')
  saveAppliedJob.style.setProperty('z-index', '1000')
  saveAppliedJob.style.setProperty('cursor', 'pointer')

  return saveAppliedJob
}
