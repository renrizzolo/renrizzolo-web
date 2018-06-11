import React from 'react';
import styled from 'react-emotion';

export const Heading = styled('h1')`
  margin: 0;
  @media screen and (max-width: 420px){
    margin-top: 1rem;
  }
`;
export const LargeHeading = styled('h1')`
  font-size: 3.5rem;
  line-height: 1.4;
  margin: 0;
  @media screen and (max-width: 768px) {
    font-size: 2rem;
  }
`;
export const ImgEl = styled('img')`
    width:100%;
    height: auto;
`;
export const Img = (props) => (
    <figure itemprop="image" itemscope ="" itemtype ="https://schema.org/ImageObject">
        <ImgEl {...props}/>
    </figure>
)