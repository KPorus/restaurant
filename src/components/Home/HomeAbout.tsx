import Image from 'next/image';
import style from "@/styles/HomeAbout/homeAbout.module.scss"
const HomeAbout = () =>
{
    return (
        <div className={`row ${style.about}`}>
            <div className='col-1-of-2' style={{ marginTop: "3.75rem" }}>
                <div>
                    <h1 className={style.aboutTitle}>Just the right food</h1>
                    <Image src={"https://i.ibb.co/Tb7WXLS/Vector-Smart-Object1.png"}
                        width={100}
                        height={100}
                        style={{
                            width: "42%",
                            height: "26px",
                            background: "transparent"
                        }} alt="decoration" />
                    <p className={`${style.aboutBody}`}>
                        If you’ve been to one of our restaurants, you’ve seen – and tasted – what keeps our customers coming back for more. Perfect materials and freshly baked food, delicious Lambda cakes,  muffins, and gourmet coffees make us hard to resist! Stop in today and check us out!
                    </p>
                    <Image src={"https://i.ibb.co/jDYfKss/cook.png"}
                        width="500"
                        height="500"
                        style={{
                            width:"38%",
                            height: "100%",
                            background: "transparent"
                        }} alt="cook" />
                </div>
            </div>
            <Image src={"https://i.ibb.co/jfB8n0Y/dish.png"} width="500"
                height="500" style={{
                    height: "100%",
                    marginTop: "3.75rem",
                    marginBottom: "4.6875rem",
                    // borderRadius:"1rem",
                    // boxShadow: "1px 1px 2px 2px #4c4c4c"
                }} alt='Home about' className='col-1-of-2' />
        </div>
    );
};

export default HomeAbout;