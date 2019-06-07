import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';



const App = () => {

    return ( 
        <div className="ui container comments">
            <CommentDetail 
                author="Bill" 
                timeAgo="Today at 4:50pm" 
                content="It's awesome maan :-)"
            />
            
            <CommentDetail 
                author="Jim" 
                timeAgo="Today at 5:50pm" 
                content="I really liked how you framed your thoughts"
            />

            <CommentDetail 
                author="Kane" 
                timeAgo="Yesterday at 7:36am" 
                content="That's Nice !!"
            />

            <CommentDetail 
                author="Sam" 
                timeAgo="Today at 2:57am" 
                content="Really nice "
            />

            <CommentDetail 
                author="Jim" 
                timeAgo="Today at 1:00pm" 
                content="I like the content"
            />

        </div>
    );
};



ReactDOM.render(<App />, document.querySelector('#root'))
