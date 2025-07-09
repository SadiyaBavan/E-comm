import { createBrowserRouter } from 'react-router-dom'
import { ForgotPassword, Login, Register, ResetPassword } from './authentication'
import Layouts from './authentication/Layouts'

const Routing = createBrowserRouter([
    {
        path: '/',
        element: <Layouts />, 
        children: [
            {
                path: 'login',
                element: <Login /> 
            },
            {
                path: 'register',
                element: <Register />
            },
            {
                path: 'forgot-password',
                element: <ForgotPassword /> 
            },
            {
                path: 'reset-password',
                element: <ResetPassword /> 
            }

        ]
    }
])
export default Routing
