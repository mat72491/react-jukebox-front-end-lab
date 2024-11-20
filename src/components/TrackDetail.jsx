const TrackDetail = (props) => {
    if (!props.selected) {
        return (
    <div>
        <h1>No Details</h1>
    </div>)} else {
            <div>
                <h1>{props.selected.title}</h1>
                <h2>Artist: {props.selected.artist}</h2>
            </div>
        
}}

export default TrackDetail