import React from "react";
import { green } from "@material-ui/core/colors";
import FilterListIcon from '@material-ui/icons/FilterList';

const Title = (props) => {
  const { title } = props;
  return (
    <div className="name">
      <FilterListIcon style={{ color: green[500] }} />
      {title}
    </div>
  );
};

export default Title;
