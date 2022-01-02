import React from "react";
import './index.css';
import { FaBeer,FaHamburger,FaIceCream } from 'react-icons/fa';

const ItemList = (props) =>{
    const {class_name} = props;
    return (
      <div className={class_name}>
        <item>
          <a className="link" href="/recipes/kv">
            <icon_box>
              <FaBeer />
            </icon_box>
            Appetizer
          </a>
        </item>
        <item>
          <a className="link" href="/recipes/mc">
            <icon_box>
              <FaHamburger />
            </icon_box>
            Main Course
          </a>
        </item>
        <item>
          <a className="link" href="/recipes/tm">
            <icon_box>
              <FaIceCream />
            </icon_box>
            Dessert
          </a>
        </item>
      </div>
    );
}

export default ItemList;