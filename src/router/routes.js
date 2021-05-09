import { routes as tasks } from '../views/base'
import { routes as auth } from '../views/auth'
import { routes as base } from '../views/tasks'

export default [...base, ...auth, ...tasks]
