import {
  respondToText,
  sendText,
  notifyAdminOfNewTravelerSignUp
} from './twilio.controller'
import { protectedEndpoint } from '../auth/auth.service'

const base = '/api/twilio'

export default (app) => {
  app.post(base + '/send', protectedEndpoint(sendText))
  app.post(base + '/verify', respondToText)
  // this function is used in the traveler.controller
  // app.post(base + '/notifyAdminOfSignUp', notifyAdminOfNewTravelerSignUp)
}
