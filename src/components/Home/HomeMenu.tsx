import style from "@/styles/HomeMenu/homeMenu.module.scss"
import Image from "next/image";
import Title from "./HomeTitle/Title";
import MenuBodyContain from "./HomeMenuBody/MenuBodyContain";

const HomeMenu = () =>
{
    return (
        <div className={`${style.menu}`}>
            <div className={`${style.menuBody}`}>
                <MenuBodyContain title="Appetisers"></MenuBodyContain>
                <MenuBodyContain title="Starters"></MenuBodyContain>
                <MenuBodyContain title="Salads"></MenuBodyContain>
                <MenuBodyContain title="Main Dishes"></MenuBodyContain>
            </div>
        </div >
    );
};

export default HomeMenu;