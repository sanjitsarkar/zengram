import React, { forwardRef } from "react";
import UserCard from "./UserCard";

export const UserList = forwardRef(({ users, type }, loaderRef) => {
  return (
    <div className="flex flex-col gap-2   ">
      {users.length > 0 &&
        users.map((_user, i) => {
          if (i === users.length - 1)
            return (
              <UserCard
                ref={loaderRef}
                _user={_user}
                type={type}
                key={_user._id}
              />
            );
          return <UserCard _user={_user} type={type} key={_user._id} />;
        })}
    </div>
  );
});
