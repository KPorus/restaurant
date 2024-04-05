import Image from 'next/image';
import style from "@/styles/HomeMenu/homeMenu.module.scss"

const Title = ({title}:{title:string}) => {
    return (
        <div style={{textAlign:"center"}}>
            <h1 className={`${style.menuTitle}`}>{title}</h1>
            <Image src={"https://i.ibb.co/Tb7WXLS/Vector-Smart-Object1.png"}
                width={100}
                height={100}
                style={{
                    width: "42%",
                    height: "26px",
                    background: "transparent"
                }} alt="decoration" />
        </div>
    );
};

export default Title;