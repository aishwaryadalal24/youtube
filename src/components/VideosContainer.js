import { useEffect, useState } from 'react';
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';
import CategoryButton from './CategoryButton';

const buttonList = ['All', 'Mixes', 'Music', 'Games', 'Reels', 'T-Series', 'Films', 'News', 'Podcats']

const VideosContainer = () => {

    useEffect(() => {
        getVideosList();
     }, []);

     async function getVideosList() {
         const data = await fetch('https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&maxResults=50&chart=mostPopular&regionCode=IN&key=AIzaSyDXCReieqz1i3SeITX6jz8wn5Uuja-KmEk');
         const json = await data.json();
         setVideosList(json?.items);
     };

    const [videosList, setVideosList] = useState([]);

    return (
    <div className='flex flex-col'>
        <div className='flex flex-row'>{buttonList.map(buttonText=> <CategoryButton categoryName={buttonText}/>)}</div>
        <div className='flex flex-wrap'>{videosList.map(video => <Link to={"/video/"+ video.id}><VideoCard video={video}/></Link>)}</div>
    </div>)
}

export default VideosContainer;
