import React, { useState } from "react";
import { TagItem } from "../services/axios";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

interface ItemsDisplayerProps {
    items: TagItem[];
    itemsOnPage: number;
    order: 'asc' | 'desc';
    setOrder: (order: 'asc' | 'desc') => void;
}

const ItemsDisplayer = ({items, itemsOnPage, order, setOrder}: ItemsDisplayerProps) => {
    const [isIconRotated, setIsIconRotated] = useState<boolean>(true);

    const arrowIconStyles = {
      transform: isIconRotated ? 'rotate(-90deg)' : 'rotate(90deg)',
      transition: 'transform 0.5s ease'
    }

    const handleItemsOrder = ()=> {
      setIsIconRotated(!isIconRotated);
      if(order === 'asc'){
        setOrder('desc')
      } else if(order === 'desc'){
        setOrder('asc')
      }
      console.log('ZMIANA! ', order)
    }

    return (
        <TableContainer sx={{maxWidth: '824px', marginTop: '25px'}}>
        <Table aria-label="Table with dates">
          <TableHead>
            <TableRow>
              <TableCell className="listItemHeader" sx={{fontSize: '18px'}}>Nazwa</TableCell>
              <TableCell onClick={handleItemsOrder} className="listItemHeader" sx={{fontSize: '18px', ...listItemHeaderStyles }}>Liczba powiązanych postów <NavigateNextIcon sx={arrowIconStyles}></NavigateNextIcon></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {items.map((item, index) => (
              <TableRow key={index}>
                <TableCell className="listItemRow">{index + 1}. {item.name}</TableCell>
                <TableCell className="listItemRow" sx={{textAlign: 'right'}}>{item.count}</TableCell>
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