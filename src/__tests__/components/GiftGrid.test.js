import '@testing-library/jest-dom';
import { shallow } from "enzyme";
import { GiftGrid } from '../../components/GiftGrid';
import { useFetchGifts } from "../../hooks/useFetchGifts";
// import { GiftGridItem } from "./GiftGridItem";
jest.mock("../../hooks/useFetchGifts.js")

describe("<GiftGrid /> testing", ()=>{
  
  const category = "Matrix"

  test("1. Should to render correctly", ()=>{
    useFetchGifts.mockReturnValue({
      data: [],
      loading: true,
    });
    const wrapper = shallow(<GiftGrid category={category} />);
    expect(wrapper).toMatchSnapshot();
  });

  test("2. Should to show items when img loading: useFetchGifts", ()=>{
    const gifts = [{
      id: 'ABC',
      url: 'https://www.google.com',
      title: 'Title here'
    },{
      id: 'DEF',
      url: 'https://www.google.com',
      title: 'Title here'
    }];
    useFetchGifts.mockReturnValue({
      data: gifts,
      loading: false,
    });
    const wrapper = shallow(<GiftGrid category={category} />);
    
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('p').exists()).toBe(false);
    expect(wrapper.find('GiftGridItem').length).toBe(gifts.length)

  });

});