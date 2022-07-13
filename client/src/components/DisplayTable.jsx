import React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import FileUploadIcon from "@mui/icons-material/FileUpload";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export const DisplayTable = ({ data }) => {
  console.log(data);
  return (
    data && (
      <>
        <TableContainer
          component={Paper}
          sx={{ maxWidth: 700, margin: "auto", marginTop: "20px" }}
        >
          <Table sx={{ maxWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>Name</StyledTableCell>
                <StyledTableCell align="right">Type</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((row) => (
                <StyledTableRow key={row.id}>
                  <StyledTableCell component="th" scope="row">
                    {row.name}
                  </StyledTableCell>
                  <StyledTableCell align="right">{row.type}</StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        <Stack
          spacing={2}
          direction="row"
          sx={{
            marginTop: "50px",
            justifyContent: "center",
            display: "flex",
          }}
        >
          <Button variant="contained" color="error">
            Remove Selected Files
          </Button>
          <Button variant="contained" endIcon={<FileUploadIcon />}>
            Upload Files
          </Button>
        </Stack>
      </>
    )
  );
};
