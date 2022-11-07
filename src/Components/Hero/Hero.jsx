import React from 'react'
import css from './Hero.module.css'
import HeroImg from '../../assets/hero.png'
import { RiShoppingBagFill } from 'react-icons/ri'
import { BsArrowRight } from 'react-icons/bs'

function Hero() {
    return (
        <div className={css.Container}>
            { /*left side */}
            <div className={css.H_side}>
                <span className={css.text1}>
                    Skin Protection Cream
                </span>
                <div className={css.text2}>
                    <span>Trendy Collaction</span>
                    <span>Seedily say has suitable disposal and boy. Exercise joy man children rejoiced </span>
                </div>
            </div>

            { /*middle side */}

            <div className={css.wrapper}>
                <div className={css.blueCircle}>
                    <img src={HeroImg} alt="" width={600} />
                    <div className={css.cart2}>
                        <RiShoppingBagFill />
                        <div className={css.signup}>
                            <span>Best Signup offer</span>
                            <div>
                                <BsArrowRight />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            { /*right side */}
            <div className={css.H_side}>
                <div className={css.traffic}>
                    <span>1.5m</span>
                    <span>Monthly</span>
                </div>
                <div className={css.customers}>
                    <span>100k</span>
                    <span>Happy Customers</span>
                </div>
            </div>

        </div>
    )
}

export default Hero