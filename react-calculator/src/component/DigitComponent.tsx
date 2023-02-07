import React from 'react';

type Props = {
  total: string;
  number: number;
}

const DigitComponent = ({total, number}: Props) => {
  return (
    <>
      <button onClick={() => {
      total = total + 1
      }
      } className="digit">{number}</button>
    </>
  );
};

export default DigitComponent;
