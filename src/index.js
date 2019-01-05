import React from "react";
import ReactDOM from "react-dom";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard"
import faker from "faker";

const App = () => {
  return (
    <div className="ui container comments">

      <ApprovalCard>
        <CommentDetail 
          avatar={faker.image.avatar()} 
          content={faker.lorem.sentence()}
          author="Paul" 
          timeAgo="Today at 2.00am"
          />
      </ApprovalCard>


      <ApprovalCard>
        <CommentDetail 
          avatar={faker.image.avatar()} 
          content={faker.lorem.sentence()}
          author="Landy" 
          timeAgo="Yesterday at 5.00pm"
        />
      </ApprovalCard>


      <ApprovalCard>
        <CommentDetail 
          avatar={faker.image.avatar()} 
          content={faker.lorem.sentence()}
          author="John" 
          timeAgo="5 days ago"
        />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
