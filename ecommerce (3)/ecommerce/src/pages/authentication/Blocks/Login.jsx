import React from 'react'

const Login = () => {
  return (
    <>
      <div className="container-fluid m-0 p-0">
        <div className='banner-position'>
          <div className='banner-title text-white pt-5 text-center'>
            <h3>Welcome Back!</h3>
            <h3>Let's Get Started</h3>
          </div>
          <div className='box-card'>
            <div className='form-card  position-form p-4'>
              <h5>Access Your Account and Explore More</h5>
              <form>
                {/* email */}
                <label>Email Address</label>
                <input type="email"
                  className='w-100 p-3 my-2'
                />
                {/* /email */}
                {/* password */}
                <label >Password </label>
                <input type="password"
                  className='w-100 p-3 my-2'
                />
                {/* /password */}
                {/* forgot password  */}
                <span className='text-decoration-underline'>Forgot Password?</span>
                {/* /forgot password  */}
                {/* sign in  */}
                 <div className='sign-up-btn'>
                    <button type='button'>
                         <div className='circle-btn'>
                           
                         </div>
                          <span>sign in</span>

                    </button>
                 </div>
              

                {/* <FaArrowRightLong color="#DA7B67" size={24} /> */}

              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default {Login}
