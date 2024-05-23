import React from 'react';

type WrapperProps = {
  children: React.ReactNode;
  title: string;
};

function Wrapper({ children, title }: WrapperProps) {
  return (
    <div className="wrapper">
      <h1>{title}</h1>
      { children }
    </div>
  );
}

export default Wrapper;
