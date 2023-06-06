import React, {useState} from "react";
import "./Questions.scss"
import sub1 from "../../pages/Questions/img/sub1.png"
import sub2 from "../../pages/Questions/img/sub2.png"
import query from "../../pages/Questions/img/bigQuery.png"
import ques from "../../pages/Questions/img/ques.png"
const Questions = () => {

    const data = [
        {
            card: {
                title: "Подпишитесь сейчас за 250,00 $ / год",
                desc: "И получи доступ ко всем нашим материалам и начинай развиваться сейчас вместе со всеми",
                sub: "Подписаться",
                know: "Узнать больше"
            },
            accord: {
                name: "Появились вопросы?",
                question1: "Сколько всего насчитывается материала всего?",
                question2: "Потеряю ли я оставшесея время если перейду на другой до окончания этого?",
                question3: "Могу ли я отказаться от автопродления подписки?",
                question4: "Откуда мне узнавать про новые статьи и курсы?",
                title: "К сожелению мы уже утратили счет материала спустьа столько лет работы и уже их настолько много что их уже не"

            }
        }
    ];

    function AccordionItem({ title, content }) {
        const [isExpanded, setIsExpanded] = useState(false);

        const toggleAccordion = () => {
            setIsExpanded(!isExpanded);
        };

        return (
            <div className={`accordion-item relative border-b border-gray-300 mb-2 ${isExpanded ? 'expanded' : ''}`}>
                <h2 className="accordion-heading ">
                    <button
                        className="accordion-button flex items-center relative   justify-between w-full p-[0.4rem]  text-left  "
                        onClick={toggleAccordion}
                        aria-expanded={isExpanded}
                    >
                        <span className="text-white font-[400] text-[25px] font-sans w-[540px] ">{title}</span>
                        <svg
                            className={`accordion-icon w-9 h-9 rotate-0 shrink-0 text-white mb-[30px] ${isExpanded ? 'rotate-[-180deg] duration-500 ' : ' rotate-0 duration-500'}`}
                            fill="currentColor"
                            viewBox=" 0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                clipRule="evenodd"
                            ></path>
                        </svg>
                    </button>
                </h2>
                {isExpanded && (
                    <div className="accordion-content p-[0.7rem] text-white text-[16px] w-[570px] font-sans  ">
                        {content}
                    </div>
                )}
            </div>

        );
    }

    return (
        <div className="question  pt-[90px] pb-[200px]  px-[0]   bg-[#595FEB]">
            <div className="container mx-auto">
                {
                    data?.map((el) => (
                        <div className=" py-[50px] backdrop-blur-lg relative px-[53px] flex  rounded-[10px] border border-indigo-50">
                            <img src={sub1} className="absolute top-0 left-0 w-[80px]" alt=""/>
                            <div className="flex flex-col  mr-[210px]">
                                <h2 className="text-white font-[600] text-[32px] mb-[5px]  font-sans ">{el.card.title}</h2>
                                <h4 className="text-white font-[300] text-[25px] space-x-0.5  font-sans w-[635px]">{el.card.desc}</h4>
                            </div>
                            <div className="flex flex-col ">
                                <button className="py-[8px] px-[17px] mt-[10px] mb-[20px]  text-[#595FEB] font-sans font-[500] bg-white rounded-[10px] ">{el.card.sub}</button>
                                <button className="py-[8px] px-[17px]  text-white border  font-sans font-[800] border-fuchsia-50 rounded-[10px]  ">{el.card.know}</button>
                            </div>
                            <img src={sub2} className="absolute bottom-0 right-[250px] w-[200px] " alt=""/>
                        </div>
                    ))
                }
                {
                    data.map((el)=>(
                        <div className="pt-[230px]  items-center ">
                            <h2 className="text-white text-[30px] font-[600] font-sans ">{el.accord.name}</h2>
                            <div className="flex  ">
                                <div className="relative">
                                    <img src={ques} className='absolute left-0 top-[120px]' alt=""/>
                                    <img src={query} className="ml-[200px] mt-[50px] "  width={250}  alt=""/>
                                </div>
                                <div className="ml-[120px] ">

                                    <div id="accordion-collapse" className="accordion ">
                                        <AccordionItem
                                            title={el.accord.question1}
                                            content={
                                                el.accord.title
                                            }
                                         />
                                        <AccordionItem
                                            title={el.accord.question2}
                                            content={
                                                el.accord.title
                                            }
                                        />
                                        <AccordionItem
                                            title={el.accord.question3}
                                            content={
                                                el.accord.title
                                            }
                                        />
                                        <AccordionItem
                                            title={el.accord.question4}
                                            content={
                                                el.accord.title
                                            }
                                        />
                                    </div>
                                </div>
                            </div>

                        </div>
                    ))
                }
            </div>

        </div>
    );
}

export default Questions;
