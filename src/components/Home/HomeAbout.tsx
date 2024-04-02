import Image from 'next/image';
import dish from "../../../public/images/dish.jpg";
import style from "@/styles/HomeAbout/homeAbout.module.scss"
import dec from "../../../public/images/Vector-Smart-Object1.png";
const HomeAbout = () => {
    return (
        <div className={`row ${style.aboutBody}`}>
            <div className='col-1-of-2'>
                <div>
                    <h1 className={style.aboutTitle}>Just the right food</h1>
                    <Image src={dec}
                        style={{
                            width: "235px",
                            height: "175px",
                            background: "transparent"
                        }} alt="decoration" />
                </div>
            </div>
            <Image src={dish} style={{
                width: "427px",
                height: "387px",
                
            }} alt='Home about' className='col-1-of-2'/>
        </div>
    );
};

export default HomeAbout;