const NowPlaying = ({track}) => {
    if (!track) {
        return(
            <div>No Track Playing</div>
        )
    }
    return (
        <>
        <h2>Now Playing</h2>
        <p>Name: {track.title}</p>
        <p>Artist: {track.artist}</p>
    </>
    )
}

export default NowPlaying