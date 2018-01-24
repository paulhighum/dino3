import React, { Component } from "react"
import "./App.css"
import Header from "./header"
import GetJobDetails from "./job-details"
import Form from "./imput-form"
import Preview from "./preview"
import Footer from "./footer"

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [],
      message: "",
      text: ""
    }
  }

  componentDidMount() {
    fetch("./listing.json")
      .then(response => response.json())
      .then(response => {
        this.setState({ data: response })
      })
  }

  handleClick = event => {
    event.preventDefault()
    event.target.reset()
    this.setState({message: "Your application was submitted!"})
  }

  previewToggle = event => {
    event.preventDefault()
    event.target.parentNode.childNodes[1].classList.toggle("hidden")
  }

  grabText = event => {
    event.preventDefault()
    this.setState({text: event.target.value})
  }

  render() {
    return (
      <div className="App">
        <Header />
        <main>
          <GetJobDetails details={this.state.data} />
          <Form handleClick={this.handleClick} message={this.state.message} grabText={this.grabText}/>
          <Preview previewToggle={this.previewToggle} text={this.state.text}/>
        </main>
        <Footer />
      </div>
    )
  }
}

export default App
