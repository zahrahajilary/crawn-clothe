import React, {Component} from 'react'
import './sing-in.style.scss'
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import {auth, singInWithGoogle} from "../../firebase/firbase.utils";

class SingIn extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = async (event) => {
        const {email, password} = this.state;
        try {
            auth.signInWithEmailAndPassword(email, password)

            this.setState({
                email: '',
                password: ''
            })
        } catch (error) {
            console.error(error.message)
        }
        event.preventDefault();
    };

    handleChange = (event) => {
        const {name, value} = event.target;
        this.setState({[name]: value})
    };

    render() {
        const {password, email} = this.state;
        return (
            <div className="sing-in">
                <h2> I already have an account</h2>
                <span>sing in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput name="email" type="email"
                               value={this.state.email}
                               handleChange={this.handleChange}
                               required={true}
                               label={'Email'}
                    />

                    <FormInput name="password" type="password"
                               handleChange={this.handleChange}
                               value={this.state.password}
                               required={true}
                               label={'Password'}
                    />

                    <div className="buttons">
                        <CustomButton type="submit">Sing IN</CustomButton>
                        <CustomButton onClick={singInWithGoogle} isGoogleSingIn>Sing IN With Google</CustomButton>
                    </div>

                </form>
            </div>
        )
    }
}

export default SingIn
