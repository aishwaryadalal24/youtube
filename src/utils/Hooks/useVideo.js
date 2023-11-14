import { useState, useEffect } from "react";

const useVideo = ( id ) => {
    const [video, setVideo] = useState({});
    useEffect(() => {
        getVideoDetails();
    }, []);

    async function getVideoDetails() {
        const data= await fetch('https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id='+ id +'&key=AIzaSyC37Jx_26xkDXhWKFCwLSQLIXx7a2Wj9Ac');
        const json = await data.json();
        setVideo(json.items[0]);
    } 

    return video;
}

export default useVideo;
