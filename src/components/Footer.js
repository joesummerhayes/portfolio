import React from 'react';
import styled from 'styled-components';
import {MyConsumer} from '../context';


export default function Footer() {
    return (
        <MyConsumer>
            {value => {
                return (
                    <FooterWrapper>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 justify-content-around d-flex">
                            <p>copyright &copy; Joe Summerhayes {new Date().getFullYear()}. All rights reserved{" "}</p>
                            </div>
                            <div className="col-md-6 justify-content-around d-flex">
                            {value.socialData.map((item => {
                                return (
                                    <a key={item.id} href={item.url}>{item.icon}</a>
                                )
                            }))}
                            </div>
                        </div>
                     </div>
                     </FooterWrapper>
                )
             }}
        </MyConsumer>
    )
}



const FooterWrapper = styled.nav`
    background: var(--mainDark) !important;
    min-height: 3rem;
    padding: 1rem;
    .icon {
        font-size: 2rem;
    }    
`