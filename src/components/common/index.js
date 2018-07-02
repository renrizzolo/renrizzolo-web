import React from 'react';
import styled, { css } from 'react-emotion';

export const Heading = styled('h1')`
  margin: 0;
  @media screen and (max-width: 420px){
    margin-top: 1rem;
    font-size: 1.2rem;
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
    vertical-align: bottom;
    
`;
export const Img = (props) => (
  <figure itemprop="image" itemscope="" itemtype="https://schema.org/ImageObject" className={css`overflow: hidden`}>
        <ImgEl {...props}/>
    </figure>
)

export const Grid = styled('div')`
  overflow: hidden;
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: repeat(3, 1fr);
  grid-gap:2rem;
  @media screen and (max-width: 899px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 420px) {
    grid-template-columns: auto;
      grid-gap: 1rem;

  }
`