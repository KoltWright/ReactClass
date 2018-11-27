import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";

import CommentDetial from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <div>
          <h4>Warning!</h4>
          Are you sure you want to do this?
        </div>
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetial
          avatar={faker.image.avatar()}
          author="Sam"
          timeAgo="Today at 4:45PM"
          comment="Nice blog post!"
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetial
          avatar={faker.image.avatar()}
          author="Alex"
          timeAgo="Today at 2:00AM"
          comment="Sweet brohime!"
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetial
          avatar={faker.image.avatar()}
          author="Jane"
          timeAgo="Yesterday at 5:00PM"
          comment="Dalfinately!"
        />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
