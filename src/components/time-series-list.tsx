import {ListGroup, ListGroupItem} from "reactstrap";

const TimeSeriesList = () => {

    const timeseries = [
        "Cras justo odio",
        "Dapibus ac facilisis in",
        "Morbi leo risus",
        "Dapibus ac facilisis in"
    ]

    return (
        <ListGroup>
            {timeseries.map((ts, i) => <ListGroupItem color={ i%2 ? "secondary" : "white"}>{ts}</ListGroupItem>)}
        </ListGroup>
    )
}

export default TimeSeriesList