// ASSESSMENT 3: React Commenting Challenge
// Add comments to the React Robot Listening Challenge
// Explain the purpose and functionality of the code directly below the 10 comment tags


// App.js
class App extends Component{
  constructor(){
    super()
    // 1. defining the state object with one key:value pair
    this.state = {
      userInput: "",
    }
  }

  robot = (e) => {
    // 2. take the value from the input and save it to the state key user input
    this.setState({ userInput: e.target.value })
  }

  render(){
    // 3. destructuring the user input from state
    let { userInput } = this.state

    return(
      <div>
        <h1>Robot Challenge</h1>

        <h3>Enter text here:</h3>
        <input
          {/* 4. defining an input field that receives text and passes it to the robot function */}
          onChange={ this.robot }
          {/* 5. referes to the state of the object */}
          value={ userInput }
        />

        <div>
          {/* 6. Component call for good robot*/}
          <GoodRobot
            {/* 7. passing the state attribute to the component to be used as props */}
            userInput={ userInput }
          />
          <BadRobot
            userInput={ userInput }
          />
          <KanyeBot
            userInput={ userInput }
          />
        </div>
      </div>
    )
  }
}
export default App


// GoodRobot.js
class GoodRobot extends Component{
  render(){
    return(
      // 8. Divison that wraps everything that is rendered to the page
      <div>
        <h3>Good Robot</h3>
        {/* 9. Getting the state attribute from App.js as props */}
        <h4>I hear you saying { this.props.userInput }. Is that correct?</h4>
      </div>
    )
  }
}
// 10. exporting the child component to be imported in another component
export default GoodRobot
