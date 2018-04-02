import 'mocha';
import * as React from 'react';
import { assert } from 'chai';

import { setup } from '../setupComponentViaEnzyme';
import {App} from '../../src/components/app';

let props = {};

describe('Test App component', ()=>{

    it('testing the filling of a state', ()=>{
        debugger
        let appComponent = setup(App, props);
    });

    it('testing the filling of a state', ()=>{
        let appComponent = setup(App, props);
    });

    it('testing the filling of a state', ()=>{
        let appComponent = setup(App, props);
        assert.equal(2,2);
    });

});