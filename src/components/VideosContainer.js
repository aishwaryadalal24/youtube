import { useEffect, useState } from 'react';
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';

const VideosContainer = () => {

    useEffect(() => {
        getVideosList();
     }, []);

     async function getVideosList() {
         const data = await fetch('https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&maxResults=50&chart=mostPopular&regionCode=IN&key=AIzaSyCLWzMvBFHSaymKgHSAjY6QNcSl5-xV4F8');
         const json = await data.json();
         setVideosList(json?.items);
     };

    const [videosList, setVideosList] = useState([]);

    return (
    <div className='flex flex-wrap'>
        {videosList.map(video => <Link to={"/video/"+ video.id}><VideoCard video={video}/></Link>)}
    </div>)
}

export default VideosContainer;
