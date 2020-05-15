import React, { useState } from 'react';
import { Button } from 'antd';
import { getUserInfo } from 'api/user';

export default function Home() {
  const [name, setName] = useState('');

  return (
    <div>
      This is Home page
      <div>
        Name is: {name}
      </div>
      <Button onClick={() => {
        getUserInfo().then((res: any) => {
          setName(res?.name || '')
        })
      }}>
        Get User
      </Button>
    </div>
  )
}