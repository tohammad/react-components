import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';
import faker from 'faker';
const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <CommentDetail author="hammad" timeAgo= "Today at 6:00 pm" comment="nice blog" avatar={faker.image.avatar()}></CommentDetail>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author="sam" timeAgo= "Today at 5:00 pm" comment="very nice blog" avatar={faker.image.avatar()}></CommentDetail>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author="dan" timeAgo= "Today at 4:00 pm" comment= "excellent blog" avatar={faker.image.avatar()}></CommentDetail>
            </ApprovalCard>
        </div>
    );
};

ReactDOM.render(<App/>, document.querySelector('#root'));