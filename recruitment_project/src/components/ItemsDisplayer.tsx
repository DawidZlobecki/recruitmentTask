import React, { useState } from "react";
import { Skeleton, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { setOrder } from "../slices/tagsSlice";
import { TagItem } from "../services/axios";

export interface ItemsDisplayerProps {
  itemsOnPage: number;
  order: "asc" | "desc";
  tags: TagItem[];
  isLoading: boolean;
}

const ItemsDisplayer = ({itemsOnPage, order, tags, isLoading}: ItemsDisplayerProps) => {
    const dispatch = useDispatch();
    const [isIconRotated, setIsIconRotated] = useState<boolean>(true);

    const arrowIconStyles = {
      transform: isIconRotated ? 'rotate(-90deg)' : 'rotate(90deg)',
      transition: 'transform 0.5s ease'
    }

    const handleItemsOrder = ()=> {
      setIsIconRotated(!isIconRotated);
      if(order === 'asc'){
        dispatch(setOrder('desc'))
      } else if(order === 'desc'){
        dispatch(setOrder('asc'))
      }
    }

    return (
        <TableContainer sx={{maxWidth: '824px', marginTop: '25px'}}>
        <Table aria-label="Table with dates">
          <TableHead>
            <TableRow>
              <TableCell className="listItemHeader" sx={{fontSize: '18px'}}>Nazwa</TableCell>
              <TableCell onClick={handleItemsOrder} className="listItemHeader" sx={{fontSize: '18px', ...listItemHeaderStyles }}>Liczba powiązanych postów <NavigateNextIcon sx={arrowIconStyles} /></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {isLoading 
            ? Array.from({ length: itemsOnPage }).map((_, index) => (
              <TableRow key={index}>
                <TableCell  sx={{padding: 0}} colSpan={2}><Skeleton width={'100%'} height={52} /></TableCell>
              </TableRow>
            ))
            : tags.map((item, index) => (
                <TableRow key={index}>
                  <>
                  <TableCell className="listItemRow">{index + 1}. {item.name}</TableCell>
                  <TableCell className="listItemRow" sx={{textAlign: 'right'}}>{item.count}</TableCell>
                  </>
                </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      )
}

export default ItemsDisplayer;

const listItemHeaderStyles = {
  textAlign: 'right',  
  display: 'flex', 
  justifyContent:'flex-end', 
  alignItems: 'flex-end'
}