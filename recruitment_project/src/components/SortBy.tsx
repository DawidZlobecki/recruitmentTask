import { MenuItem, Select } from "@mui/material";
import React from "react";

interface SortByProps {
    sortBy: string;
    setSortBy: (sortBy: 'popular' | 'activity' | 'name') => void;
}

const SortBy = ({sortBy, setSortBy}: SortByProps) => {
    const handleChange = (event: any) => {
        setSortBy(event.target.value);
      };

    const handleNameOfSorting = (name: string) => {
        switch(name) {
            case 'popular':
                return 'Popularne';
            case 'activity':
                return 'Aktywność';
            case 'name':
                return 'Nazwa';
            default:
                return 'Popularne';

        }
    }
    return  (
    <Select
    value={sortBy}
    onChange={handleChange}
    displayEmpty
    inputProps={{ 'aria-label': 'Wiek' }}
  >
    {['popular', 'activity', 'name'].map(item => {
        return <MenuItem key={item} value={item}>{handleNameOfSorting(item)}</MenuItem>
    })}
    {/* {Array.from({ length: 10 }, (_, index) => 10 + index * 10).map((ageOption) => (
      <MenuItem key={ageOption} value={ageOption}>{ageOption}</MenuItem>
    ))} */}
  </Select>
  );
}

export default SortBy