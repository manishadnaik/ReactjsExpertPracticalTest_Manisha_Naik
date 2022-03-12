import Dashboard from '../../components/Dashboard/Dashboard';

import { mount, shallow, render } from 'enzyme';
import User from '../../User';

describe('Dashboard testing', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<User />);
  });

  it('render the dashboard title', () => {
    expect(wrapper.find('h1').text()).toContain('Dashboard');
  });
});
