
import { GiftGridItem } from '../../components/GiftGridItem';
import { shallow } from "enzyme";

describe("< GiftGridItem /> testing",()=>{
  
  const title = "Title here";
  const url = "https://www.urlImages.com";
  const wrapper = shallow(<GiftGridItem title={title} urlImg={url} />);

  test("1. Should render correctly", ()=>{

    expect(wrapper).toMatchSnapshot();

  });

  test("2. Should have a P label with Title attribute", ()=>{

    const pLabel = wrapper.find('p');
    const textTitle = pLabel.text().trim()

    expect(textTitle).toBe(title);
  })

  test("3. Should to have a img-url = url by props & alt = alt by props", ()=>{

    const imgLabel = wrapper.find('img');

    // console.log(imgLabel.html()); // To see the element
    // console.log(imgLabel.props()); // to use the elements props

    // console.log(imgLabel.props().src); // A. to see SRC prop
    // console.log(imgLabel.prop('src')); // A'. to see SRC prop

    // console.log(imgLabel.props().alt); // B. to see ALT props
    // console.log(imgLabel.prop('alt')); // B'. to see ALT props

    const imgProp = imgLabel.prop('src');
    const altProp = imgLabel.prop('alt');

    expect(imgProp).toBe(url);
    expect(altProp).toBe(title);

  })

  test("4. Should to have just className = animate__zoomIn", ()=>{

    const divLabel = wrapper.find('div');
    const classN = divLabel.prop('className');
    
    expect(classN.includes('animate__zoomIn')).toBeTruthy();

  })

  test("5. Should to have a className = card animate__animated animate__zoomIn", ()=>{

    const divLabel = wrapper.find('div');
    const classN = 'card animate__animated animate__zoomIn'

    expect(divLabel.prop('className')).toBe(classN);

  })
})