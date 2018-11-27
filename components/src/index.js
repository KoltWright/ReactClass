import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';

import CommentDetial from './CommentDetail';

const App = () => {
    return ( 
        <div className = "ui container comments" >
        <CommentDetial 
        avatar = {
            faker.image.avatar()
        }
        author = "Sam"
        timeAgo = "Today at 4:45PM"
        comment = "Nice blog post!" 
        />
        <CommentDetial 
            avatar = {
                faker.image.avatar()
            }
            author = "Alex"
            timeAgo = "Today at 2:00AM"
            comment = "Sweet brohime!" 
        />
        <CommentDetial 
            avatar = {
                faker.image.avatar()
            }
            author = "Jane"
            timeAgo = "Yesterday at 5:00PM"
            comment = "Dalfinately!" 
        />
        </div>
    );
};

ReactDOM.render( <
    App / > ,
    document.querySelector('#root')
);