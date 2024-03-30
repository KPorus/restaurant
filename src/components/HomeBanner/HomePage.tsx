import Link from "next/link";
import style from "../../styles/HomeBanner/homeBanner.module.scss";
import Image from "next/image";
import logo from "../../../public/images/Asset-1.png";
import dec from "../../../public/images/Vector-Smart-Object1.png";

const menu = [
    { path: "/", item: "Home" },
    { path: "/", item: "About" },
    { path: "/", item: "Igredients" },
    { path: "/", item: "Menu" },
    { path: "/", item: "Reviews" },
    { path: "/", item: "Reservations" },
];

const HomePage = () =>
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
                <div className={`${style.bannerBody}`}>
                    <h2 style={{ background: "transparent", fontSize: "46px" }} >the right ingredients
                        <br />for the right food</h2>
                    <Image src={dec}
                        style={{
                            width: "235px",
                            height: "175px",
                            background: "transparent"
                        }} alt="decoration" />
                </div>
            </div>
        </div>
    );
};

export default HomePage;
