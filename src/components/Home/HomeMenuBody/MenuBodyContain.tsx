import React from 'react';
import Title from '../HomeTitle/Title';

const MenuBodyContain = ({ title }: { title: string}) => {
    return (
        <div style={{ textAlign: "center", paddingBottom:"1.5rem" }}>
            <Title title={title} />
            <div style={{ display: "inline-block" }}>
                <div style={{
                    display: "flex", color: "#cc9900", justifyContent: "space-between",
                    alignItems: "center", width: "440px"
                }}>
                    <h2>Tzatsiki</h2>
                    <span>$3.99</span>
                </div>
                <hr style={{ background: "#cc9900" }} />
                <p style={{ color: "#4c4c4c" }}>Refreshing traditional cucumber and garlic yoghurt dip.</p>
            </div>
            <div style={{ display: "inline-block" }}>
                <div style={{
                    display: "flex", color: "#cc9900", justifyContent: "space-between",
                    alignItems: "center", width: "440px"
                }}>
                    <h2>Tzatsiki</h2>
                    <span>$3.99</span>
                </div>
                <hr style={{ background: "#cc9900" }} />
                <p style={{ color: "#4c4c4c" }}>Refreshing traditional cucumber and garlic yoghurt dip.</p>
            </div>
        </div>
    );
};

export default MenuBodyContain;