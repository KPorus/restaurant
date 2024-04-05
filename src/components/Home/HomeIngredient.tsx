import style from "@/styles/HomeIngredient/homeIngredient.module.scss"
import Image from 'next/image';
const HomeIngredient = () =>
{
    return (
        <div className={`${style.ingredient}`}>
            <div className='row' style={{ display: "flex" }}>
                <div className='col-1-of-2'></div>
                <div className={`col-1-of-2 ${style.ingredientBody}`}>
                    <h1 className={`${style.ingredientTitle}`}>Fine ingredients</h1>
                    <Image src={"https://i.ibb.co/1KfK3M1/Vector-Smart-Object.png"}
                        width={500}
                        height={500}
                        style={{
                            width: "42%",
                            height: "26px",
                            background: "transparent"
                        }} alt="decoration" />
                    <p className={style.ingredientParagraph}>
                        If you’ve been to one of our restaurants, you’ve seen – and tasted – what keeps our customers coming back for more. Perfect materials and freshly baked food, delicious Lambda cakes,  muffins, and gourmet coffees make us hard to resist! Stop in today and check us out!
                    </p>
                    <div style={{marginBottom:"7rem"}}>
                        <Image src={"https://i.ibb.co/yVqC0yZ/image.png"}
                            className={`${style.ingredientImg}`}
                            width={900}
                            height={900}
                            style={{
                                width: "21%",
                                height: "21%",
                            }} alt="decoration" />

                        <Image src={"https://i.ibb.co/yVqC0yZ/image.png"}
                            className={`${style.ingredientImg}`}
                            width={900}
                            height={900}
                            style={{
                                width: "21%",
                                height: "21%",
                                margin:"0 3rem"
                            }} alt="decoration" />
                        <Image src={"https://i.ibb.co/yVqC0yZ/image.png"}
                            className={`${style.ingredientImg}`}
                            width={900}
                            height={900}
                            style={{
                                width: "21%",
                                height: "21%",
                            }} alt="decoration" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeIngredient;