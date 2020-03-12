import React, { Component } from "react";
import emailjs from "emailjs-com";



class Contact extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "",
            email: "",
            message: ""
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        emailjs.init("user_EgeJa9bXwF7bFpuThA7mK");
        emailjs.send("mihai_pivniceru", "template_zywWuuBu",
            { "from_name": this.state.name, "to_name": "", "from_email": this.state.email, "message_html": this.state.message })
            .then(alert("Message Succesfully Sent!"),
                (err) => {
                    console.log(err);
                })
            .then(
                this.setState({
                    name: "",
                    email: "",
                    message: ""
                })
            )
    }
    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value })
        console.log(this.state);
    }

    render() {
        return (
            <div className="contact">
                <h2>Contact</h2>
                <div className="contact-form">
                    <form onSubmit={this.handleSubmit}>
                        <input
                            className="name"
                            placeholder="Your Name"
                            type="text"
                            name="name"
                            value={this.state.name}
                            onChange={this.handleChange} />
                        <input
                            className="email"
                            placeholder=" Your E-mail Adress"
                            type="email"
                            name="email"
                            value={this.state.email}
                            onChange={this.handleChange}
                        />
                        <textarea
                            className="message"
                            placeholder="Your Message"
                            type="text"
                            name="message"
                            value={this.state.message}
                            onChange={this.handleChange} />
                        <input class="submit-button" type="submit" value="Send Message"></input>
                    </form>
                </div>
            </div>
        )
    }
}
export default Contact;