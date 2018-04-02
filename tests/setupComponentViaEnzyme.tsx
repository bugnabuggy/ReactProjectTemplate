import * as React from 'react';
import { mount, shallow } from 'enzyme';
import 'react-dom/test-utils';
import * as configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';

export function setup(Cmpnt:any, props?: any, isMount?: boolean ):any {
  if (isMount)
    return mount(<Cmpnt {...props} />);
  else
    return shallow(<Cmpnt {...props} />);
}

/*
export function setupConnected(Cmpnt:any, props?: any, state?:any):any {
    return mount(<Provider store={configureMockStore()({...state})}>
                    <Cmpnt {...props} />
                 </Provider>);
}*/