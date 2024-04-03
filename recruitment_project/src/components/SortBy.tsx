import { MenuItem, Select } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { setSortBy } from "../slices/tagsSlice";

const SortBy = () => {

    const dispatch = useDispatch();
    const sortBy = useSelector((state: RootState) => state.tags.sortBy);
    
    const handleChange = (event: any) => {
        dispatch(setSortBy(event.target.value));
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
  </Select>
  );
}

export default SortBy