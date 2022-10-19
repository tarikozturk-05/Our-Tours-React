import React from 'react';
import Tour from './Tour';
const Tours = ({setData,data}) => {
  // const [item, setItem] = useState("")

  return (
    <div>
      {
        data.map((item)=> <Tour key={item.id}  item={item} />)
      }

    </div>
  )
};

export default Tours;
