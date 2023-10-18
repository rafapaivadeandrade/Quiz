import { useState, useEffect, useRef } from 'react';
import { ContainerFormModal, Option } from '../FormBackground';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { ContainerModal } from '../Modal/styles';

function Question({ question, setAnswer, currentQuestionIndex }) {
    const time = useRef(null);
    const timeImage = useRef(null)
    const [seconds, setSeconds] = useState(10);
    const percentage = Math.round(seconds / 10 * 100);
    const [correctOrwrong, setCorrectOrWrong] = useState(null);
    const [activeImage, setActiveImage] = useState(false);

    const goToNextQuestion = (index = null) => {
        if (index === 0 || index === 1) {
            setActiveImage(true);
            if (question.correctOptionIndex === index) {
                setCorrectOrWrong(true);
            }
            else {
                setCorrectOrWrong(false);
            }
            timeImage.current = setTimeout(() => {
                setActiveImage(false);
                setAnswer(index)
            }, 3000);
            return () => {
                if (time.current) clearInterval(time.current);
                if (timeImage.current) clearInterval(timeImage.current);
            }
        }
        setAnswer(index)
    }

    useEffect(() => {
        setSeconds(10);
        time.current = setInterval(() => {
            setSeconds((second) => {
                const newSecond = second - 1
                if (newSecond <= 0) {
                    setActiveImage(false);
                    goToNextQuestion()
                    return 10;
                }
                return newSecond;
            });
        }, 1000)

        return () => {
            if (time.current) clearInterval(time.current);
        }
    }, [question])

    return (
        <ContainerModal question={true}>
            <ContainerFormModal activeImage={activeImage}>
                <img className='leftImage' src='left.svg' />
                <img className='rightImage' src='right.svg' />

                <div className='question'>
                    <div className='questionType'>
                        <div>
                            <span>{question.label}
                            </span>
                        </div>
                        <div>
                            <span>{question.points} pontos</span>
                        </div>
                    </div>
                    <div className='main'>
                        <CircularProgressbar
                            value={percentage}
                            text={seconds}
                            styles={buildStyles({
                                textColor: '#043673',
                                pathColor: '#043673',
                                tailColor: 'rgba(255,255,255,.2)',
                            })} />
                        <div className='title'>
                            {!activeImage ? (
                                <></>
                            ) : !!correctOrwrong ? (
                                <img src="certo.svg" />
                            ) : (
                                <img src="errado.svg" />
                            )}
                            <p>{currentQuestionIndex}. {question.title}</p>
                        </div>
                        <div className='options'>
                            {question.options.map((option, index) => {
                                return (
                                    <div
                                        className={"option"}
                                        key={index}
                                        onClick={() => goToNextQuestion(index)}>
                                        {option === 'MITO' ? (
                                            <img src="/like.svg" />
                                        ) : (
                                            <img src="/notlike.svg" />
                                        )}
                                        <span>
                                            {option}
                                        </span>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </ContainerFormModal>
        </ContainerModal>
    )
}

export default Question;
