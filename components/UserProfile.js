import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { Card, Avatar, Button } from 'antd';
import { logoutAction } from '../reducers/user';

const UserProfile = ({ setIsLoggedIn }) => {
  const dispatch = useDispatch();
  const onLogOut = useCallback(() => {
    dispatch(logoutAction());
  }, []);

  return (
    <Card
      actions={[
        <div key="follows">
          팔로우
          <br />0
        </div>,
        <div key="followings">
          팔로잉
          <br />0
        </div>,
      ]}
    >
      <Card.Meta avatar={<Avatar>user</Avatar>} title="user"></Card.Meta>
      <Button style={{ paddingLeft: 20 }} onClick={onLogOut}>
        로그아웃
      </Button>
    </Card>
  );
};

export default UserProfile;
