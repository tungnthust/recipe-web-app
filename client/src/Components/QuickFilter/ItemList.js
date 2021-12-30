import React from "react";
import './index.css';
import { FaBeer,FaHamburger,FaIceCream } from 'react-icons/fa';

const ItemList = (props) =>{
    const {class_name} = props;
    return(
        <div className={class_name}>
                <item>
                    <a class="link" href="/recipes/kv">
                        <icon_box>
                            <FaBeer/>
                        </icon_box>
                        Khai vị
                    </a>
                </item>
                <item>
                    <a class="link" href="/recipes/mc">
                        <icon_box>
                            <FaHamburger/>
                        </icon_box>
                        Món chính
                    </a>
                </item>
                <item>
                    <a class="link" href="/recipes/tm">
                        <icon_box>
                            <FaIceCream/>
                        </icon_box>
                        Tráng miệng
                    </a>
                </item>
            </div>
    )
}

export default ItemList;