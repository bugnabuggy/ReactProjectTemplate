import 'mocha';
import { assert } from 'chai';

import { setup } from '../setupComponentViaEnzyme';
import { App } from '../../src/components/app';

const props = {
};

describe('test', () => {
  it('enter login and password', () => {
    const cmpnt = setup(App, props);
    const instance = cmpnt.instance() as App;
    const changeLogin = {
      target: {
        name: 'login',
        value: 'fdas',
      },
    };
    const changePassword = {
      target: {
        name: 'password',
        value: 'fdagfdhs',
      },
    };
    assert.equal(instance.state.login, '');
    cmpnt.find(`[name="login"]`).simulate('change', changeLogin);
    assert.equal(instance.state.login, changeLogin.target.value);
    assert.equal(instance.state.password, '');
    cmpnt.find(`[name="password"]`).simulate('change', changePassword);
    assert.equal(instance.state.password, changePassword.target.value);
  });
});