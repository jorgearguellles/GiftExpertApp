import '@testing-library/jest-dom';
import { useFetchGifts } from '../../hooks/useFetchGifts';
import { renderHooks } from "@testing-library/react-hooks";

describe("<useFetchGifts />", ()=>{

  test("Should return initial state", ()=>{

    // const {data, loading} = useFetchGifts('Matrix');
    renderHooks( () => useFetchGifts('Matrix'));
    

  })
})