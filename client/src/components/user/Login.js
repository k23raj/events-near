import React from 'react'
import axios from "../../config/axios"
import { setUser } from '../../actions/user'
import { connect } from 'react-redux'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import '../../styleSheet/login.css'

class UserLogin extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            email: "",
            password: "",
            errorMsg: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleReset = this.handleReset.bind(this)

    }
    //Dynamic Change
    handleChange(e) {
        e.persist()
        this.setState(() => ({ [e.target.name]: e.target.value }))
    }

    handleReset(e) {
        this.setState(() => ({
            email: "",
            password: ""
        }))
    }
    handleSubmit(e) {
        e.preventDefault()

        const formData = {
            email: this.state.email,
            password: this.state.password
        }

        console.log('form data', formData)

        axios.post('/users/login', formData)
            .then((response) => {
                console.log(response.data)
                if (response.data.hasOwnProperty('errors')) {
                    this.setState({
                        errorMsg: response.data.errors
                    })
                } else {
                    console.log("response", response)
                    localStorage.setItem('userAuth', response.data.token)
                    this.props.dispatch(setUser(response.data.user))
                    this.props.history.push('/')
                }
            }).catch(err => {
                console.log(err)
            })
    }
    render() {
        return (
            <div xs={{ size: 4, offset: 2 }}>
                <h3>Login</h3>
                {this.state.errorMsg && <p>{this.state.errorMsg}</p>}
                <Form>
                    <FormGroup>
                        <Label for="exampleEmail">Email</Label>

                        <Input type="email" value={this.state.email} onChange={this.handleChange} id="exampleEmail" name="email" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="examplePassword">Password</Label>

                        <Input type="password" value={this.state.password} onChange={this.handleChange} name="password"
                            id="examplePassword" />
                    </FormGroup>
                    <FormGroup>
                        <Button onClick={this.handleSubmit} > Submit</Button>
                    </FormGroup>

                    <FormGroup>
                        <Button onClick={this.handleReset} >Reset</Button>
                    </FormGroup>


                </Form>
            </div>

        )
    }
}

export default connect()(UserLogin)