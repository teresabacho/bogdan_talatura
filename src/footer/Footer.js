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
                <span className={style.rights}>@ 2021 All Rights Reserved</span>
                <div className={style.links}>
                 <a href="https://www.facebook.com/bogdan.tura.75"> <UilFacebook size={50} color={"#4f8dd0"} /></a>
                <a href="https://instagram.com/t.b.i.official?utm_medium=copy_link"> <UilInstagram size={50} color={"#4f8dd0"}/></a>
                </div>
            </div>
        </div>
    );
}

export default Footer;