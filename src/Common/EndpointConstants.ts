const BACKEND_PREFIX = 'http://localhost:8000'

// Authorization
export const LOGIN_ENDPOINT = BACKEND_PREFIX + '/api/v1/auth/login'
export const GET_LOGGEDIN_USER_ENDPOINT = BACKEND_PREFIX + '/api/v1/auth/getLoggedInUser'
export const LOG_OUT_ENDPOINT = BACKEND_PREFIX + '/api/v1/auth/logout'
export const SIGN_UP_ENDPOINT = BACKEND_PREFIX + '/api/v1/auth/signUp'

// Events
export const GET_EVENT_TYPES_ENDPOINT = BACKEND_PREFIX + '/api/v1/events/getEventTypes'
