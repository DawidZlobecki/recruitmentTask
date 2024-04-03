import React, { useState } from "react";
import SelectInput from "@mui/material/Select/SelectInput";
import { Select, MenuItem } from '@mui/material';

interface PageAmountSelectProps {
  itemsOnPageNumber: number;
  setItemsOnPageNumber: (pageNumber: number) => void;
}

const PageAmountSelect: React.FC<PageAmountSelectProps> = ({itemsOnPageNumber, setItemsOnPageNumber})=> {

  const handleChange = (event: any) => {
    setItemsOnPageNumber(event.target.value);
  };

  return (
    <Select
      value={itemsOnPageNumber}
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