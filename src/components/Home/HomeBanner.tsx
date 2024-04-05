import Link from "next/link";
import style from "../../styles/HomeBanner/homeBanner.module.scss";
import styleButton from "../../styles/button/button.module.scss";
import Image from "next/image";
import logo from "../../../public/images/Asset-1.png";
import Button from "./Buttons/Button";

const menu = [
    { path: "/", item: "Home" },
    { path: "/", item: "About" },
    { path: "/", item: "Igredients" },
    { path: "/", item: "Menu" },
    { path: "/", item: "Reviews" },
    { path: "/", item: "Reservations" },
];

const HomeBanner = () =>
{
    return (
        <div className={`${style.heroWrapper}`}>
            <div className={`${style.home}`}>
                <div className={`${style.menuBar}`}>
                    <Image
                        src={logo}
                        alt='logo'
                        style={{
                            width: "122px",
                            height: "60px",
                            background: "transparent",
                            color: "white"
                        }}
                    />
                    <div className={`${style.menu}`}>
                        {
                            menu.map((m) => <Link href={m.path} key={m.path} className={`${style.menuText}`}>{m.item}</Link>)
                        }
                    </div>
                </div>
                <div className={`${style.bannerBody} row`}>
                    <div className="col-1-of-1">
                        <h2 style={{ background: "transparent", fontSize: "7.524rem" }} >the right ingredients
                            <br />for the right food</h2>
                        <Image src={"https://i.ibb.co/LrxYWfp/Vector-Smart-Object2.png"}
                        width={500}
                        height={500}
                            style={{
                                width: "31%",
                                height: "49px",
                                background: "transparent",
                                marginTop:"34px",
                                marginBottom:"34px"
                            }} alt="decoration" />
                        <div className={`${styleButton.buttonBody}`}>
                            <Button title="BOOK A TABLE" />
                            <Button title="SEE THE MENU" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeBanner;
