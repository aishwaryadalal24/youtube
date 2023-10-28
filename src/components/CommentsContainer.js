import React from 'react';
import { commentsData } from '../utils/commentsData';

const Comment = ({data}) => {
    return (
    <div>
        <div className='flex flex-row m-2 bg-gray-100'>
            <img className="m-2 h-8 grid-col-1" alt='profile' src='https://w7.pngwing.com/pngs/81/570/png-transparent-profile-logo-computer-icons-user-user-blue-heroes-logo-thumbnail.png'/>
            <div className='m-2 flex flex-col'>
                <h2 className='font-semibold text-lg'>{data.name}</h2>
                <p className='pl-2 font-normal text-md'>{data.text}</p>
            </div>
        </div>
        <div className='pl-5 ml-5 border-l-2 border-black '>
            {data.replies && data.replies.map(reply => <Comment data={reply}/>)}
        </div>
    </div>
    );
}

const CommentsContainer = () => {
    return (
        <div className='mt-10'>
            <h1 className='text-xl font-bold'>Comments</h1>
            {commentsData.map(comment => <Comment data={comment}/>)}
        </div>
    );
};

export default CommentsContainer;