import * as React from 'react';
import { Switch, Route } from 'react-router-dom';

import AppContainer from '../components/componentContainers/appContainer';
import wishListContainer from '../components/componentContainers/wishListContainer';
import { ContentComponent } from '../components/contacts';
import { ReadMeComponent } from '../components/readMe';

export const getRoutes = () => {
  return (
    <React.Fragment>
      <Switch>
        <Route exact={true} path='/' component={AppContainer}/>
        <Route exact={true} path='/contacts' component={ContentComponent}/>
        <Route exact={true} path='/readme' component={ReadMeComponent}/>
        <Route exact={true} path='/wishList' component={wishListContainer}/>
      </Switch>
    </React.Fragment>
  );
};