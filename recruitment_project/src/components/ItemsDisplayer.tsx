import React from "react";
import { TagItem } from "../services/axios";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";

interface ItemsDisplayerProps {
    items: TagItem[];
    itemsOnPage: number;
}

const ItemsDisplayer = ({items, itemsOnPage}: ItemsDisplayerProps) => {
    return (
        <TableContainer sx={{maxWidth: '824px', marginTop: '25px'}}>
        <Table aria-label="Table with dates">
          <TableHead>
            <TableRow>
              <TableCell className="listItemHeader" sx={{fontSize: '18px'}}>Nazwa</TableCell>
              <TableCell className="listItemHeader" sx={{fontSize: '18px', textAlign: 'right'}}>Liczba powiązanych postów</TableCell>
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