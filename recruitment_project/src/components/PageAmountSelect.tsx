import React, { useState } from "react";
import SelectInput from "@mui/material/Select/SelectInput";
import { Select, MenuItem } from '@mui/material';

interface PageAmountSelectProps {
  itemsOnPage: number;
  setItemsOnPage: (pageNumber: number) => void;
}

const PageAmountSelect: React.FC<PageAmountSelectProps> = ({itemsOnPage, setItemsOnPage})=> {

  const handleChange = (event: any) => {
    setItemsOnPage(event.target.value);
  };

  return (
    <Select
      value={itemsOnPage}
      onChange={handleChange}
      displayEmpty
      inputProps={{ 'aria-label': 'Wiek' }}
    >
      {Array.from({ length: 10 }, (_, index) => 10 + index * 10).map((ageOption) => (
        <MenuItem key={ageOption} value={ageOption}>{ageOption}</MenuItem>
      ))}
    </Select>
  );
}

export default PageAmountSelect