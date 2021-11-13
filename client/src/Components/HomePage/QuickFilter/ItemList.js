import React from "react";
import './index.css';
import { FaBeer,FaBreadSlice,FaHamburger,FaIceCream,FaPizzaSlice,FaSeedling,FaBacon,FaEgg,FaFish } from 'react-icons/fa';

const ItemList = (props) =>{
    const {class_name} = props;
    return(
        <div className={class_name}>
                <item>
                    <a class="link" href="/">
                        <icon_box>
                            <FaBeer/>
                        </icon_box>
                        Beer
                    </a>
                </item>
                <item>
                    <a class="link" href="/">
                        <icon_box>
                            <FaBreadSlice/>
                        </icon_box>
                        Breads
                    </a>
                </item>
                <item>
                    <a class="link" href="/">
                        <icon_box>
                            <FaHamburger/>
                        </icon_box>
                        Hamburger
                    </a>
                </item>
                <item>
                    <a class="link" href="/">
                        <icon_box>
                            <FaIceCream/>
                        </icon_box>
                        Ice cream
                    </a>
                </item>
                <item>
                    <a class="link" href="/">
                        <icon_box>
                            <FaPizzaSlice/>
                        </icon_box>
                        Dessert
                    </a>
                </item>
                <item>
                    <a class="link" href="/">
                        <icon_box>
                            <FaSeedling/>
                        </icon_box>
                        Vegetarian
                    </a>
                </item>
                <item>
                    <a class="link" href="/">
                        <icon_box>
                            <FaBacon/>
                        </icon_box>
                        Meat
                    </a>
                </item>
                <item>
                    <a class="link" href="/">
                        <icon_box>
                            <FaFish/>
                        </icon_box>
                        Fish
                    </a>
                </item>
                <item>
                    <a class="link" href="/">
                        <icon_box>
                            <FaEgg/>
                        </icon_box>
                        Egg
                    </a>
                </item>
            </div>
    )
}

export default ItemList;