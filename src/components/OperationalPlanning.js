import React from "react";
import { ManualControl } from "./ManualControl";
import { AutomaticControl } from "./AutomaticControl";

export class OperationalPlanning extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            manual: true,
        };
        this.handleSwitchControl = this.handleSwitchControl.bind(this);
    };

    handleSwitchControl() {
        this.setState(state => ({
            manual: !state.manual,
        }));
    }

    render() {
        return (
            <>
                <div style={{marginTop: 20, marginBottom: 30}} className="form-check form-switch">
                    <input
                        className="form-check-input"
                        type="checkbox"
                        id="switchControlType"
                        defaultChecked={ this.state.manual }
                        onChange={ this.handleSwitchControl }
                    />
                    <label
                        className="form-check-label"
                        htmlFor="switchControlType"
                    >
                        Ручное управление: { this.state.manual ? "On" : "Off" }
                    </label>
                </div>
                { this.state.manual ? <ManualControl/> : <AutomaticControl/> }
            </>
        );
    }
}