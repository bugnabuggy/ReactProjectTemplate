import * as React from 'react';
import { Switch, Route } from 'react-router-dom';

import { App } from './components/app';
import { MainContentComponent } from './components/contacts';
import { ReadMeComponent } from './components/readMe';


let colorTextApp = 'blue';

export function getRouts() {
    return (
        <Switch>
            <Route exact={true} path='/' render={(props)=>(
                <App {...props} data={"test2"} color={colorTextApp}/>
            )} />
            <Route path='/contacts' render={(props)=>(
                <MainContentComponent {...props}/>
            )} />
            <Route path='/readme' render={(props)=>(
                <ReadMeComponent {...props}/>
            )} />
        </Switch>
    );
}