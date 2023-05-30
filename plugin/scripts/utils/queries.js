const BASE_URL = 'http://localhost:3008'

const ROUTES = {
  JOB_DATA: '/jobData',
  GET_USER: '/user'
}

export const saveJobApplication = async (jobInfo) => {
  const user = await getUser()
  if (!user) throw new Error('Authentication failed')
  jobInfo.userId = user.id
  return await fetch(`${BASE_URL}${ROUTES.JOB_DATA}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(jobInfo)
  })
}

// todo: getUser will have some token as a parameter for fetching user
export const getUser = async () => {
  return Promise.resolve({ id: 12345567 })
  // return Promise.reject(null)
}
