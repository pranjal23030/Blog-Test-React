import { useEffect, useState } from "react";

function LearningUseEffect() {
  // First type

  //   useEffect(() => {
  //     console.log("Hey");
  //   }, []);

  // Second type
  const [count, setCount] = useState(0);

  const [like, setLike] = useState(1);

  const [latitude, setLatitude] = useState(123123);
  const [longitude, setLongitude] = useState(231231);

  const increaseCount = () => {
    setCount(count + 1);
  };
  const decreaseCount = () => {
    setCount(count - 1);
  };

  const likeChange = () => {
    setLike(like + 1);
  };

  useEffect(() => {
    console.log("oi");
  }, [count]);

  useEffect(() => {
    // if state change, then sends to the backends, frontend to backend
    console.log("Like change change ");
  }, [like]);

  // Third type

  //   useEffect(() => {
  //     console.log("all the time exec");
  //     setLatitude(latitude + 0.1);
  //     setLongitude(longitude + 0.2);
  //   });

  return (
    <>
      <h1>{count}</h1>
      <button onClick={increaseCount}>+</button>
      <button onClick={decreaseCount}>-</button>
      <h1>Like: {like}</h1>
      <button onClick={likeChange}>Like me</button>
    </>
  );
}

export default LearningUseEffect;
