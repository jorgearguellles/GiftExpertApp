import '@testing-library/jest-dom';
import { shallow } from "enzyme";
import { GiftExpertApp } from '../GiftExpertApp';

describe("<GiftExpertApp /> testing", ()=>{

  test("1. Should render correctly", ()=>{
    const wrapper = shallow(<GiftExpertApp />)
    expect(wrapper).toMatchSnapshot();
  });
})