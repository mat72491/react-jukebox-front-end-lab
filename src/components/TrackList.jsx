const TrackList = (props) => {
   const tracks = props.trackList.map((track) => (
    <a key={track._id} onClick={() => props.updateSelected(track)}>
        <li >{track.title} By: {track.artist}
            <button onClick={() => props.onPlay(track)}>Play</button>
            <button onClick={() => props.handleFormView(props.selected)}>Edit</button>
        <button onClick={() => props.handleRemoveTrack(props.selected._id)}>Delete</button>
        </li>
    </a>
   ))


return (
    <div>
        <h1>Track List</h1>
        {!props.trackList.length ? <h2>No tracks yet!</h2> : <ul>{tracks}</ul>}
        <button onClick={props.handleFormView}>{props.isFormOpen ? 'Close Form' : 'New Track' }</button>
    </div>
)
}
export default TrackList