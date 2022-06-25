import React from 'react';
import Head from 'next/head';

import AppLayout from '../components/AppLayout';
import NicknameEditForm from '../components/NicknameEditForm';
import FollowList from '../components/followList';

const Profile = () => {
  const followerList = [
    { nickname: 'user1' },
    { nickname: 'user2' },
    { nickname: 'user3' },
  ];
  const followingList = [
    { nickname: 'user1' },
    { nickname: 'user2' },
    { nickname: 'user3' },
  ];
  return (
    <>
      <Head>
        <meta charSet="utf-8"></meta>
        <title>프로필</title>
      </Head>
      <AppLayout>
        <NicknameEditForm />
        <FollowList header="팔로워 목록" data={followerList} />
        <FollowList header="팔로잉 목록" data={followingList} />
      </AppLayout>
    </>
  );
};

export default Profile;
