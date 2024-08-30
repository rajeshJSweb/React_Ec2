/**
 * It's suggested to configure the RESTful endpoints in this file
 * so that there is only one source of truth, future update of endpoints
 * could be done from here without refactoring on multiple places throughout the app
 */

const rootAPI = 'http://localhost:8080'
// const rootAPI = 'http://51.79.74.33:8080'
// const rootAPI = 'https://api.thefurne.com'

const API = {
  auth: {
    login: `${rootAPI}/api/auth/login`,
    signUp: '/api/auth/register',
    user: `${rootAPI}/api/auth/users`,
  },
  conversation: `${rootAPI}/api/conversations/generate`,

};

export { API };

