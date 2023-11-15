import { useState, useEffect } from "react";

const useVideo = ( id ) => {
    const [video, setVideo] = useState({});
    useEffect(() => {
        getVideoDetails();
    }, []);

    async function getVideoDetails() {
        const data= await fetch('https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id='+ id +'&key=AIzaSyDXCReieqz1i3SeITX6jz8wn5Uuja-KmEk');
        const json = await data.json();
        setVideo(json.items[0]);
    } 

    return video;
}

export default useVideo;
