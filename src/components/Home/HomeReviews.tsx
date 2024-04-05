import style from "@/styles/HomeReivews/homeReviews.module.scss"
import Image from "next/image";

const HomeReviews = () =>
{
    return (
        <div className={`${style.review}`}>
            <div className="row" style={{display:"flex", justifyContent:"center"}}>
                <div className={`col-1-of-1 ${style.reviewBody}`}>
                    <h1 className={`${style.reviewTitle}`}>Fine ingredients</h1>
                    <Image src={"https://i.ibb.co/1KfK3M1/Vector-Smart-Object.png"}
                        width={500}
                        height={500}
                        style={{
                            width: "42%",
                            height: "26px",
                            background: "transparent"
                        }} alt="decoration" />
                    <p className={style.reviewParagraph}>
                        If you’ve been to one of our restaurants, you’ve seen – and tasted – what keeps our customers coming back for more. Perfect materials and freshly baked food, delicious Lambda cakes,  muffins, and gourmet coffees make us hard to resist! Stop in today and check us out!
                    </p>
                    <p style={{fontSize:"1.5rem", paddingBottom:"5.75rem"}}>
                        - food inc, New York
                    </p>
                </div>
            </div>
        </div>
    );
};

export default HomeReviews;