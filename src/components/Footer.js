import React, { Component } from 'react'
import styled from 'react-emotion';
import Bloki from 'bloki';
import Container from './Container';

const FooterEl = styled('div')`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid;
  width: 100%;
  padding: 1rem 0;
}
`;
const Links = styled('div')`
    img {
        max-height: 40px;
        margin-left: 15px;
        vertical-align: middle;
    }
`;
const TagLine = styled('p')`
    font-size: 13px;
    color: dimgrey;
`;
const Footer = () => {
    return (
        <FooterEl>
            <TagLine>Copyright 2018 Ren Rizzolo</TagLine>
            <Links>
                <a href="https://github.com/renrizzolo">
                    <img src={require('../img/GitHub-Mark-64px.png')} />
                </a>
                <img src={require('../img/powered_by_graphcms.svg')} />
            </Links>
        </FooterEl>
    )
};
export default Footer;
