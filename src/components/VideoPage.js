import { useParams } from "react-router-dom";
import useVideo from "../utils/Hooks/useVideo";
import { useDispatch } from "react-redux";
import { closeSidebar } from "../utils/sidebarSlice";
import CommentsContainer from "./CommentsContainer";

const VideoPage = () => {
    const { id } = useParams();

    const videoDetails = useVideo(id);
    const dispatch = useDispatch();
    dispatch(closeSidebar());

    return (
    <div className="m-10 p-5 flex flex-col">
        <div className="rounded">
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
        <CommentsContainer/>
    </div>
    );
};

export default VideoPage;