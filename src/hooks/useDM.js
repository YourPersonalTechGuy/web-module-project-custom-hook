import useLS from './useLS';

const useDM = (initialValues) => {
    const [ values, setValues ] = useLS("DM", initialValues);
  
    return [values, setValues];
}

export default useDM;