import '@testing-library/jest-dom';
import { shallow } from "enzyme";
import {AddCategory} from "../../components/AddCategory";

describe("<AddCategory /> testing", ()=>{
  
  const setCategories = jest.fn(); // Jest functionality to make a function behavior. Now we can know when, how many was called
  let wrapper = shallow(<AddCategory setCategories={setCategories}/>);
  
  beforeEach(()=>{
    jest.clearAllMocks();
    wrapper = shallow(<AddCategory setCategories={setCategories}/>);
  });

  test("1. Should to render correctly", ()=>{
    expect(wrapper).toMatchSnapshot();
  });

  test("2. Should to change text input", ()=>{
    const input = wrapper.find('input');
    const value = "Hello World";

    // We need simulate event inside handleChange
    input.simulate('change', { target: { value } });
  });

  test("3. Shouldn't post info by submit", ()=>{
    wrapper.find('form').simulate('submit', { preventDefault(){} })
    expect(setCategories).not.toHaveBeenCalled();
  });

  test("4. Should call setCategories and clean the text box", ()=>{

    //1.  Simulate input Change
    const value = "Hello World";
    wrapper.find('input').simulate('change', { target: { value } });  
    //2.  Simulated submit 
    wrapper.find('form').simulate('submit', { preventDefault(){} }) 
    // 3. SetCategories should been called
    expect(setCategories).toHaveBeenCalled(); 
    expect(setCategories).toHaveBeenCalledTimes(1); 
    // 4. Box text have to be a ''
    const textBoxValue = wrapper.find('input').prop('value');
    expect( textBoxValue ).toBe('');
  });
})