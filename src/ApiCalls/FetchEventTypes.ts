import { GET_EVENT_TYPES_ENDPOINT } from '../Common/EndpointConstants'

export const fetchEventKinds = async () => {
  await fetch(GET_EVENT_TYPES_ENDPOINT, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data)
    })
    .catch((err) => {
      throw err
    })
}
