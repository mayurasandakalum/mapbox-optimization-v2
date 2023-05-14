import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

// function createData(name, calories, fat, carbs, protein) {
//   return { name, calories, fat, carbs, protein };
// }

// const rows = [
//   createData(3, "08:00 - 18:00", "09:00 - 18:00", 24, 4.0),
//   createData(4, "08:00 - 18:00", "09:00 - 18:00", 37, 4.3),
//   createData(5, "08:00 - 18:00", "09:00 - 18:00", 24, 6.0),
//   createData(5, "08:00 - 18:00", "09:00 - 18:00", 67, 4.3),
//   createData(5, "08:00 - 18:00", "09:00 - 18:00", 49, 3.9)
// ];

export const MyTable = ({ rows, headers }) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 350 }} aria-label="simple table">
        <colgroup>
          {headers.map((h, idx, arr) => (
            <col style={{ width: 100 / arr.length + "%" }} />
          ))}
        </colgroup>
        <TableHead>
          <TableRow>
            {headers.map((h, idx, arr) => (
              <TableCell align="center">{h}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, idx) => {
            return (
              <TableRow
                key={row.key}
                style={row.style}
                onClick={!row.onClick ? () => {} : row.onClick}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                {headers.map((h, idx, arr) => (
                  <TableCell align="center">{row[h]}</TableCell>
                ))}
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export const TableHeader = ({ rows }) => {
  const [open, setOpen] = React.useState(false);
  return (
    <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
      <TableCell>
        <IconButton
          aria-label="expand row"
          size="small"
          onClick={() => setOpen(!open)}
        >
          {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
        </IconButton>
      </TableCell>
      {/* <TableCell component="th" scope="row">
        {row.name}
      </TableCell> */}
      {rows.map((r) => (
        <TableCell align="right">{r}</TableCell>
      ))}
      {/* <TableCell align="right">{row.calories}</TableCell>
      <TableCell align="right">{row.fat}</TableCell>
      <TableCell align="right">{row.carbs}</TableCell>
      <TableCell align="right">{row.protein}</TableCell> */}
    </TableRow>
  );
};
