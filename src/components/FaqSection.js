import React from 'react';
import styled from 'styled-components';
import { About } from '../style';
import Toggle from './Toggle';
import { AnimateSharedLayout } from 'framer-motion';
import { useScroll } from './useScroll';
import { scrollReveal } from '../animation';


const FaqSection = () => {
    const[element,controls] = useScroll();
    
    return(
        <Faq variants={scrollReveal} ref={element} animate={controls} initial='hidden'>
            <h2>Any questions?<span>FAQ</span></h2>
                <AnimateSharedLayout>
                    <Toggle title="How Do I Start?">
                        
                            <div className='answer'>
                                <p>Dolor ea nostrud exercitation sunt sit esse. Fugiat ut et minim reprehenderit incididunt sit id. Dolore sit et eu laborum laborum elit culpa. Minim elit enim mollit non non ex elit non aliqua anim. Exercitation amet aliqua sit nulla ea.</p>
                                <p>Consectetur fugiat eu nulla non ut consectetur fugiat minim proident.</p>
                            </div>
                        
                    </Toggle>
                    <Toggle title="Different Payment Methods?">
                        
                            <div className='answer'>
                                <p>Dolor ea nostrud exercitation sunt sit esse. Fugiat ut et minim reprehenderit incididunt sit id. Dolore sit et eu laborum laborum elit culpa. Minim elit enim mollit non non ex elit non aliqua anim. Exercitation amet aliqua sit nulla ea.</p>
                                <p>Consectetur fugiat eu nulla non ut consectetur fugiat minim proident.</p>
                            </div>
                        
                    </Toggle>
                    <Toggle title="How Do I Cancel?">
                        
                            <div className='answer'>
                                <p>Dolor ea nostrud exercitation sunt sit esse. Fugiat ut et minim reprehenderit incididunt sit id. Dolore sit et eu laborum laborum elit culpa. Minim elit enim mollit non non ex elit non aliqua anim. Exercitation amet aliqua sit nulla ea.</p>
                                <p>Consectetur fugiat eu nulla non ut consectetur fugiat minim proident.</p>
                            </div>
                        
                    </Toggle>
                    <Toggle title="How Do I Stop?">
                        
                            <div className='answer'>
                                <p>Dolor ea nostrud exercitation sunt sit esse. Fugiat ut et minim reprehenderit incididunt sit id. Dolore sit et eu laborum laborum elit culpa. Minim elit enim mollit non non ex elit non aliqua anim. Exercitation amet aliqua sit nulla ea.</p>
                                <p>Consectetur fugiat eu nulla non ut consectetur fugiat minim proident.</p>
                            </div>
                        
                    </Toggle>
                </AnimateSharedLayout>
        </Faq>

    );
}

const Faq = styled(About)`
    display: block;
    span{
        display: block;
    }
    h2{
        padding-bottom: 2rem;
        font-weight: lighter;
    }
    h4{
        padding-bottom: 2rem;
        padding-top: 2rem;
    }
    .faq-line{
        background: #cccccc;
        height: 0.2rem;
        width: 100%;
    }
    .question{
        padding: 3rem 0rem;
        cursor: pointer;
    }
    .answer{
        padding: 2rem 0rem;
        p{
            padding: 1rem 0rem;
        }
    }

`;

export default FaqSection;