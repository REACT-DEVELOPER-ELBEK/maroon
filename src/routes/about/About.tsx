import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hooks/hooks';
import { fetchProducts } from '../../redux/slicer/slice';

const About = () => {
//     const data = useAppSelector((state) => state.products.data);
//   const dispatch = useAppDispatch();
//   dispatch(fetchProducts());

//   useEffect(() => {
//     data
//   }, [data]);
  return (
    <div>About</div>
  )
}

export default About