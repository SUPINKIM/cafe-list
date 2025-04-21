import { FC } from 'react';
import { actions, StackflowActivities } from '@/stackflow';

const Bottom: FC = () => {
  console.log(actions);

  const handleClickNavigate = (key: keyof StackflowActivities) => {
    actions.push(key, {});
  };
  
  return <ul>
    <li onClick={() => handleClickNavigate('Home')}>Home</li>
    <li onClick={() => handleClickNavigate('Search')}>Search</li>
  </ul>;
};

export default Bottom;