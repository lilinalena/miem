import React from "react";


const MACHINE_STATE = {
    NOT_AVAILABLE: {
        title: "Аппарат недоступен",
        style: { color: "lightGray" },
    },
    AVAILABLE: {
        title: "Аппарат доступен для измерений",
        style: { color: "black" },
    },
    SELECTED: {
        title: "Аппарат выбран, измерение идет",
        style: { color: "black", fontWeight: "bold" },
    },
    CLOUDY: {
        title: "Облачно в данный момент",
        style: { color: "lightBlue" },
    },
};


const WEATHER = {
    CLOUDY: {
        title: "Облачно",
        src: "/weather/cloud.png",
    },
    RAINY: {
        title: "Дождь",
        src: "/weather/rain.png",
    },
    SUNNY: {
        title: "Солнечно",
        src: "/weather/sun.png",
    },
};


const data = [
    {
        name:  "Космический аппарат 1", state: MACHINE_STATE.CLOUDY, visibility: {from: "2:30", to: "5:30"},
        weather: WEATHER.CLOUDY,
        result: { time: { from: "15:50", to: "15:60" }, duration: "10.15", answers: 15, shots: 2 }
    },
    {
        name:  "Космический аппарат 2", state: MACHINE_STATE.SELECTED,
        visibility: {from: "6:30", to: "8:30"}, weather: WEATHER.CLOUDY,
        result: { time: { from: "16:50", to: "14:60" }, duration: "10.15", answers: 15, shots: 2 }
    },
    {
        name:  "Космический аппарат 3", state: MACHINE_STATE.AVAILABLE,
        visibility: {from: "15:30", to: "16:30"}, weather: WEATHER.CLOUDY,
        result: { time: { from: "15:50", to: "15:60" }, duration: "10.15", answers: 15, shots: 2 }
    },
    {
        name:  "Космический аппарат 4", state: MACHINE_STATE.NOT_AVAILABLE,
        visibility: {from: "15:30", to: "16:30"}, weather: WEATHER.CLOUDY,
        result: { time: { from: "15:50", to: "15:60" }, duration: "10.15", answers: 15, shots: 2 }
    },
];


export class ManualControl extends React.Component {
    constructor(props) {
        super(props);
    }

    timeToSeconds(time) {
        const [ hours, minutes ] = time.split(":");
        return Number(hours) * 60 + Number(minutes);
    }

    visibilityProgress(visibility) {
        const curTime = new Date();
        const curHours = curTime.getHours();
        const curMinutes = curTime.getMinutes();
        console.log([curHours.toString(), curMinutes.toString()].join(":"));

        const startSeconds = this.timeToSeconds(visibility.from);
        const endSeconds = this.timeToSeconds(visibility.to);
        const curSeconds = this.timeToSeconds([curHours.toString(), curMinutes.toString()].join(":"));

        console.log(startSeconds, endSeconds, curSeconds);
        if (curSeconds < startSeconds) {
            return 0;
        }
        if (curSeconds > endSeconds) {
            return 100;
        }
        return 100 * (curSeconds - startSeconds) / (endSeconds - startSeconds);
    }

    resultColumnText(result) {
        const time = "Время: " + result.time.from.toString() + " - " + result.time.to.toString();
        const duration = "Длит.: " + result.duration;
        const answers = result.answers.toString() + " ответов";
        const shots = result.shots.toString() + " за 24ч";
        return [time, duration, answers, shots].join(";");
    }
    render() {
        return (
            <table className="table table-bordered usual-table">
                <thead className="table-head">
                    <tr>
                        <td scope="col">Название КА</td>
                        <td scope="col">Видимость КА с - до</td>
                        <td scope="col">Облачность в направлении КА</td>
                        <td scope="col">Результаты измерений</td>
                    </tr>
                </thead>
                {
                    data.map(machine => {
                        console.log(machine.state.style);
                        return <tr>
                            <td style={machine.state.style} scope="col">{ machine.name }</td>
                            <td scope="col" style={{position: "relative"}}>
                                <div
                                    style={{
                                        background: "gray",
                                        height: "100%",
                                        width: this.visibilityProgress(machine.visibility).toString() + "%",
                                        position: "absolute",
                                        zIndex: -1,
                                        opacity: 0.7,
                                        left: 0,
                                        top: 0,
                                        paddingLeft: 0,
                                        paddingRight: 0,
                                    }}
                                >
                                </div>
                                { [machine.visibility.from, machine.visibility.to].join(":") }
                            </td>
                            <td scope="col"><img src={machine.weather.src} alt="" /></td>
                            <td>{ this.resultColumnText(machine.result) }</td>
                        </tr>;
                    })
                }
            </table>
        );
    }
}