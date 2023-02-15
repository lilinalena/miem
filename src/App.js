import React from "react";
import MenuBlock from "./components/MenuBlock";
import { LongPlanning } from "./components/LongPlanning";
import { OperationalPlanning } from "./components/OperationalPlanning";


const AppTypes = {
  control: "Контроль",
  operationalPlanning: "Оперативное планирование",
  longPlanning: "Долгосрочное планирование",
};

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      appType: "control"
    };
    this.handleAppTypeChange = this.handleAppTypeChange.bind(this);
  }

  handleAppTypeChange(type) {
    this.setState(state => ({
      appType: type
    }));
  }

  renderBody() {
    switch (this.state.appType) {
      case "longPlanning":
        return <LongPlanning/>;
      case "operationalPlanning":
        return <OperationalPlanning/>;
      default:
        return <div>&#8203;</div>;
    }
  }

  render() {
    return (
        <div className="container">
          <div className="row">
            { Object.keys(AppTypes).map(type => {
              console.log(type, this.state.appType);
              return <MenuBlock
                  name={ AppTypes[type] }
                  type={ type }
                  isActive={ type === this.state.appType }
                  onAppTypeChange={ this.handleAppTypeChange }
              />
            }) }
            <div className="col-2 offset-4">
              Username Userpassword
            </div>
          </div>
          <div className="row">
            { this.renderBody() }
          </div>
        </div>
    );
  }
}

export default App;
