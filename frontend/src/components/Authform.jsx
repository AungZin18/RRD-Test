
import { Link,Form,useSearchParams } from 'react-router-dom'

const Authform = () => {
    const [searchParams]=useSearchParams()
    const isLogin = searchParams.get("mode")==="login"
    
  return (
<section className='form-section'>
<div>
    <p>{isLogin ? "Login to your account.":"Create a new account."}</p>
    <Form method='post'>
        <div>
            <label htmlFor="email">Email</label>
            <input type="email" name='email' id='email' required/>
        </div>
        <div>
            <label htmlFor="password">Password</label>
            <input type="password" name='password' id='password' required/>
        </div>
        <button className='btn login-btn'>{isLogin ? "Login":"Register"}</button>
    </Form>
    {
        isLogin ? ( <p className='create-acc'>Don't have an account? <Link to={"/auth?mode=signup"}>Register here</Link></p>):( <p className='create-acc'>Already have an account? <Link to={"/auth?mode=login"}>Login account</Link></p>)
    }
   
</div>
</section>
  )
}

export default Authform