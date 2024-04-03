import React, { useState } from "react";
import SelectInput from "@mui/material/Select/SelectInput";
import { Select, MenuItem } from '@mui/material';
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { setItemsOnPage } from "../slices/tagsSlice";



const PageAmountSelect: React.FC = () => {

  const dispatch = useDispatch();
  const itemsOnPage = useSelector((state: RootState) => state.tags.itemsOnPage);
 
  const handleChange = (event: any) => {
    dispatch(setItemsOnPage(event.target.value));
  };

  return (
    <Select
      value={itemsOnPage}
      onChange={handleChange}
      displayEmpty
      inputProps={{ 'aria-label': 'Ilość elementów na stronie' }}
    >
      {Array.from({ length: 10 }, (_, index) => 10 + index * 10).map((n) => (
        <MenuItem key={n} value={n}>{n}</MenuItem>
      ))}
    </Select>
  );
}

export default PageAmountSelect