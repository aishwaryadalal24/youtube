const VideoCard = ({video}) => {
    console.log(video)
    return (
        <div className="shadow-lg p-4 m-2 w-72">
            <img src={video.snippet.thumbnails.medium.url}/>
            <h1 className="font-semibold">{video.snippet.title}</h1>
            <h1>Views: {video.statistics.viewCount}</h1>
            <h1>{video.snippet.channelTitle}</h1>
        </div>
    )
}


export default VideoCard;