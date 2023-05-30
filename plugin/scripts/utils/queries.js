const BASE_URL = 'http://localhost:3008'

const ROUTES = {
  JOB_DATA: '/jobData'
}

export const saveJobApplication = async (jobInfo) => {
  return await fetch(`${BASE_URL}${ROUTES.JOB_DATA}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(jobInfo)
  })
}
