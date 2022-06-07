import React from 'react'
import { shallow } from 'enzyme/build'
import App from './App'
import panel from './views/panel/Panel.jsx'

it('mounts App without crashing', () => {
  const wrapper = shallow(<App />)
  wrapper.unmount()
})

it('mounts panel without crashing', () => {
  const wrapper = shallow(<panel />)
  wrapper.unmount()
})
