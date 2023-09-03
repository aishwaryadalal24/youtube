import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const VideoPage = () => {
    const { id } = useParams();

    const [videoDetails, setVideoDetails] = useState({});

    useEffect(() => {
        getVideoDetails();
    }, []);


    async function getVideoDetails() {
        const data= await fetch('https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id='+ id +'&key=AIzaSyCLWzMvBFHSaymKgHSAjY6QNcSl5-xV4F8');
        const json = await data.json();
        setVideoDetails(json.items[0]);
        console.log(videoDetails)
    }

    return (
        <div className="m-10 p-5 rounded">
            <iframe
                width= "1000"
                height="500"
                src={"https://www.youtube.com/embed/" + id}
                title="youtube video player"
                frameBorder='0'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; picture-in-picture'
                allowFullScreen
            />
            <h1 className="mt-5 font-bold">{videoDetails?.snippet?.title}</h1>
            <h3 className="font-semibold text-gray-500">{videoDetails?.snippet?.channelTitle}</h3>
            <h4> Views - {videoDetails?.statistics?.viewCount}</h4>
        </div>
    );
};

export default VideoPage;