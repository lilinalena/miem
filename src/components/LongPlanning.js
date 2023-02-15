import "./Table.css";


const data = [
    { name: "Космический аппарат 1", priority: "Высокий", normalPoints: 3, minSessions: 2, maxSessions: 3, minGap: 40 },
    { name: "Космический аппарат 2", priority: "Низкий", normalPoints: 3, minSessions: 2, maxSessions: 3, minGap: 40 },
    { name: "Космический аппарат 3", priority: "Не отслеживается", normalPoints: NaN, minSessions: NaN, maxSessions: NaN, minGap: NaN },
    { name: "Космический аппарат 4", priority: "Низкий", normalPoints: 3, minSessions: 2, maxSessions: 3, minGap: 40 },
    { name: "Космический аппарат 5", priority: "Средний", normalPoints: 3, minSessions: 2, maxSessions: 3, minGap: 40 },
    { name: "Космический аппарат 11", priority: "Низкий", normalPoints: 3, minSessions: 2, maxSessions: 3, minGap: 40 },
    { name: "Космический аппарат 12", priority: "Высокий", normalPoints: 3, minSessions: 2, maxSessions: 3, minGap: 40 },
    { name: "Космический аппарат 13", priority: "Не отслеживается", normalPoints: NaN, minSessions: NaN, maxSessions: NaN, minGap: NaN },
    { name: "Космический аппарат 14", priority: "Низкий", normalPoints: 3, minSessions: 2, maxSessions: 3, minGap: 40 },
];

const Statuses = {
    LOW: "Низкий",
    MEDIUM: "Средний",
    HIGH: "Высокий",
    NO_TRACK: "Не отслеживается",
};

export function LongPlanning(props) {
    return (
        <table className="table table-bordered usual-table">
            <thead className="table-head">
                <tr>
                    <td scope="col">Название КА</td>
                    <td scope="col">Приоритет</td>
                    <td scope="col">Кол-во нормальных точек за сеанс</td>
                    <td scope="col">Мин. кол-во сеансов за проводку</td>
                    <td scope="col">Макс. кол-во сеансов за проводку</td>
                    <td scope="col">Мин. зазор между сеансами</td>
                </tr>
            </thead>
            {
                data.map(machine => {
                    if (machine.priority === Statuses.NO_TRACK) {
                        return <tr>
                            <td scope="col">{ machine.name }</td>
                            <td scope="col">{ machine.priority }</td>
                            <td scope="col" className="empty-column">&#8203;</td>
                            <td scope="col" className="empty-column">&#8203;</td>
                            <td scope="col" className="empty-column">&#8203;</td>
                            <td scope="col" className="empty-column">&#8203;</td>
                        </tr>;
                    }
                    return <tr>
                        <td scope="col">{ machine.name }</td>
                        <td scope="col">{ machine.priority }</td>
                        <td scope="col">{ machine.normalPoints }</td>
                        <td scope="col">{ machine.minSessions }</td>
                        <td scope="col">{ machine.maxSessions }</td>
                        <td scope="col">{ machine.minGap }</td>
                    </tr>;
                })
            }
        </table>
    );
}