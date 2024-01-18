import background from './../../assets/login-bg.png';
import GoogleSignin from './../../assets/btn_google_signin.png';
import './style/index.css';

const Login = () => {
    const googleSignIn = () => {
    };
    
    return(
        <>
            <img src={background} className="bg-image"/>

            <section className="login-box">
                <h2 id="welcome-msg">Welcome to InstaChat</h2>
                <p id="signin-label">Sign in with Google to chat with other fellow human beings worldwide.</p>
                <button className="sign-in">
                    <img
                        onClick={googleSignIn}
                        src={GoogleSignin}
                        alt="sign in with google"
                    />
                </button>
            </section>
        </>
    );
}

export default Login;