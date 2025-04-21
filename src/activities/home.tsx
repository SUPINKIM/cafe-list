import { StackflowActivities, useFlow } from '@/stackflow';
import { AppScreen } from '@stackflow/plugin-basic-ui';
import { ActivityComponentType } from '@stackflow/react';

const Home: ActivityComponentType = () => {
  
  const { push } = useFlow();

  const handleClickNavigate = (key: keyof StackflowActivities) => {
    push(key, {});
  };
    
  return <AppScreen appBar={{ title: 'Home' }}>
    <div>Home</div>

    <li onClick={() => handleClickNavigate('Search')}>to Search</li>
  </AppScreen>;
};

export default Home;