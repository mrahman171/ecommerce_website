import React from 'react'
import css from './Footer.module.css'
import Logo from '../../assets/logo.png'
import {
    InboxIcon,
    PhoneIcon,
    LocationMarkerIcon,
    LoginIcon,
    UsersIcon,
    LinkIcon,
} from "@heroicons/react/outline";
const Footer = () => {
    return (
        <div className={css.cFooterWrapper}>
            <hr />
            <div className={css.cFooter}>
                <div className={css.logo}>
                    <img src={Logo} alt="" />
                    <span>amazon</span>
                </div>
                <div className={css.block}>
                    <div className={css.detail}>
                        <span>Contact us</span>
                        <span className={css.pngLine}>
                            < LocationMarkerIcon className={css.icon} />
                            <span>Dhaka Bangladesh</span>
                        </span>
                        <span className={css.pngLine}>
                            < PhoneIcon className={css.icon} />
                            <span>01723798226</span>
                        </span>
                        <span className={css.pngLine}>
                            < InboxIcon className={css.icon} />
                            <span>a.r@gmail.com</span>
                        </span>
                    </div>
                </div>
                <div className={css.block}>
                    <div className={css.detail}>
                        <span>Account</span>
                        <span className={css.pngLine}>
                            < LoginIcon className={css.icon} />
                            <span>Sign in</span>
                        </span>
                    </div>
                </div>
                <div className={css.block}>
                    <div className={css.detail}>
                        <span>Company</span>
                        <span className={css.pngLine}>
                            < UsersIcon className={css.icon} />
                            <span>About us</span>
                        </span>
                    </div>
                </div>
                <div className={css.block}>
                    <div className={css.detail}>
                        <span>Resources</span>
                        <span className={css.pngLine}>
                            < LinkIcon className={css.icon} />
                            <span>Safety policy & terms</span>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer