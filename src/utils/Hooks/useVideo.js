import { useState, useEffect } from "react";

const useVideo = ( id ) => {
    const [video, setVideo] = useState({});
    console.log(id);
    useEffect(() => {
        getVideoDetails();
    }, []);

    async function getVideoDetails() {
        const data= await fetch('https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id='+ id +'&key=AIzaSyCLWzMvBFHSaymKgHSAjY6QNcSl5-xV4F8');
        const json = await data.json();
        setVideo(json.items[0]);
    } 

    return video;
}

export default useVideo;