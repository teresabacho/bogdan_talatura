import React from 'react';
import style from './Footer.module.scss';
import styleContainer from '../common/styles/Container.module.scss';
import styleTitle from '../common/styles/Title.module.scss';
import Link from "./link/Link";
import { UilFacebook } from '@iconscout/react-unicons'
import { UilInstagram } from '@iconscout/react-unicons'


function Footer() {
    return (
        <div className={style.footerBlock}>
            <div className={`${styleContainer.container} ${style.footerContainer}`}>
                <div className={styleTitle.title}>
                    <h3>Bogdan Talatura</h3>
                </div>
                <span>@ 2023 All Rights Reserved</span>
                <div className={style.links}>
                 <a href="https://www.facebook.com/bogdan.tura.75" target={"_blank"}> <UilFacebook size={50} color={"rgb(211,164,44)"} /></a>
                <a href="https://www.instagram.com/b.talatura?igsh=MTNqbDBjeWRvNHV3ZA==" target={"_blank"}> <UilInstagram size={50} color={"rgb(211,164,44)"}/></a>
                </div>
            </div>
        </div>
    );
}

export default Footer;
