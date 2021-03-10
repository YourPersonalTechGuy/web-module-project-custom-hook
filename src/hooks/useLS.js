import {useState} from 'react';

const useLS = (key, initialValue) => {
  const [ value, setValue ] = useState(()=> {
    if (localStorage.getItem(key)) {
        return JSON.parse(localStorage.getItem(key));
    }
    localStorage.setItem(key, JSON.stringify(initialValue));
    return initialValue;
  });

  const setLSV = value => {
    setValue(value);
    localStorage.setItem(key, JSON.stringify(value));
  }
  
  return [value, setLSV]
}

export default useLS;