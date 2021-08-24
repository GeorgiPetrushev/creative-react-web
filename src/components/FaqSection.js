import React from 'react';
import styled from 'styled-components';
import { About } from '../style';

const FaqSection = () => {
    return(
        <Faq>
            <h2>Any questions?<span>FAQ</span></h2>
            <div className="question">
                <h4>How Do I Start?</h4>
                <div className='answer'>
                    <p>Dolor ea nostrud exercitation sunt sit esse. Fugiat ut et minim reprehenderit incididunt sit id. Dolore sit et eu laborum laborum elit culpa. Minim elit enim mollit non non ex elit non aliqua anim. Exercitation amet aliqua sit nulla ea.</p>
                    <p>Consectetur fugiat eu nulla non ut consectetur fugiat minim proident.</p>
                </div>
                <div className='faq-line'></div>
            </div>            
            <div className="question">
                <h4>Different Payment Methods?</h4>
                <div className='answer'>
                    <p>Enim dolore consequat veniam minim labore excepteur laboris exercitation aute enim Lorem nulla.</p>
                    <p>Dolor ea nostrud exercitation sunt sit esse. Fugiat ut et minim reprehenderit incididunt sit id. Dolore sit et eu laborum laborum elit culpa. Minim elit enim mollit non non ex elit non aliqua anim. Exercitation amet aliqua sit nulla ea.</p>
                    <p>Consectetur fugiat eu nulla non ut consectetur fugiat minim proident.</p>
                </div>
                <div className='faq-line'></div>
            </div>
            <div className="question">
                <h4>How Do I Cancel?</h4>
                <div className='answer'>
                    <p>Dolor ea nostrud exercitation sunt sit esse. Fugiat ut et minim reprehenderit incididunt sit id. Dolore sit et eu laborum laborum elit culpa. Minim elit enim mollit non non ex elit non aliqua anim. Exercitation amet aliqua sit nulla ea.</p>
                    <p>Consectetur fugiat eu nulla non ut consectetur fugiat minim proident.</p>
                    <p>Occaecat excepteur esse proident esse non consequat.</p>
                    <p>Nisi labore enim do consectetur esse exercitation reprehenderit ullamco duis dolor consectetur excepteur.</p>
                </div>
                <div className='faq-line'></div>
            </div>
            <div className="question">
                <h4>How Do I Stop?</h4>
                <div className='answer'>
                    <p>Dolor ea nostrud exercitation sunt sit esse. Fugiat ut et minim reprehenderit incididunt sit id. Dolore sit et eu laborum laborum elit culpa. Minim elit enim mollit non non ex elit non aliqua anim. Exercitation amet aliqua sit nulla ea.</p>
                    <p>Consectetur fugiat eu nulla non ut consectetur fugiat minim proident.</p>
                </div>
                <div className='faq-line'></div>
            </div>
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