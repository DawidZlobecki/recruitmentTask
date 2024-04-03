import React from "react";
import { IconButton, PaginationItem, Typography } from "@mui/material";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { setPageNumber } from "../slices/tagsSlice";

const Pagination = () => {

    const dispatch = useDispatch();
    const pageNumber = useSelector((state: RootState) => state.tags.pageNumber);
    const isLoading = useSelector((state: RootState) => state.tags.isLoading);
    const hasNextPage =  useSelector((state: RootState) => state.tags.hasNextPage);


    const handlePrevClick = () => {
        if (pageNumber > 1) {
          dispatch(setPageNumber(pageNumber - 1));
        }
      };
    
      const handleNextClick = () => {
        if (!hasNextPage) {
          dispatch(setPageNumber(pageNumber + 1));
        }
      };

    return (
    <div className="PaginationWrapper">
      <IconButton onClick={handlePrevClick} disabled={pageNumber === 1}>
        <NavigateBeforeIcon />
      </IconButton>
      <Typography>Strona nr {pageNumber}</Typography>
      <IconButton onClick={handleNextClick} disabled={!hasNextPage || isLoading}>
        <NavigateNextIcon />
      </IconButton>
    </div>
    )
}

export default Pagination