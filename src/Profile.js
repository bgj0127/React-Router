import React from "react";

const data = {
  velopert: {
    name: "배길준",
    description: "리액트 최고...",
  },
  helo: {
    name: "홍길동",
    description: "리액트 최악...",
  },
};

const Profile = ({ match }) => {
  const { username } = match.params;
  const profile = data[username];
  if (!profile) {
    return <div>존재하지 않는 사용자입니다.</div>;
  }
  return (
    <div>
      <h3>
        {username}({profile.name})
      </h3>
      <p>{profile.description}</p>
    </div>
  );
};

export default Profile;
