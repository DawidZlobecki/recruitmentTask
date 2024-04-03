import React from "react";
import { IconButton, PaginationItem, Typography } from "@mui/material";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';

interface PaginationProps {
    pageNumber: number;
    setPageNumber: (pageNumber: number) => void;
    hasNextPage: boolean;
    isLoading: boolean;
}

const Pagination = ({pageNumber, setPageNumber, hasNextPage, isLoading}: PaginationProps) => {

    const handlePrevClick = () => {
        if (pageNumber > 1) {
          setPageNumber(pageNumber - 1);
        }
      };
    
      const handleNextClick = () => {
        if (!hasNextPage) {
          setPageNumber(pageNumber + 1);
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