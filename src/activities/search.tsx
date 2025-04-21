import { AppScreen } from '@stackflow/plugin-basic-ui';
import { ActivityComponentType } from '@stackflow/react';

const Search: ActivityComponentType = () => {
  return <AppScreen appBar={{ title: 'Search' }}>
    <div>Search</div>
  </AppScreen>;
};

export default Search;