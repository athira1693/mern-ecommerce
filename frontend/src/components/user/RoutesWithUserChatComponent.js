import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import UserChatComponent from './UserChatComponent';

const RoutesWithUserChatComponent = () => {
  return (
    <>
      <UserChatComponent />
      <Outlet />
    </>
  );
};

export default RoutesWithUserChatComponent;
