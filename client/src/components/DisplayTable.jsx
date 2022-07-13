import React, { useState } from "react";
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
import axios from "axios";

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

export const DisplayTable = ({ data, setData, isLoggedin }) => {
  console.log(data);

  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const eachFileUploadToMongo = async (file) => {
    console.log(file);
    setIsLoading(true);
    axios
      .post("http://localhost:2244/googleFile/save", {
        description: file.description,
        embedUrl: file.embedUrl,
        iconUrl: file.iconUrl,
        id: file.id,
        isShared: file.isShared,
        lastEditedUtc: file.lastEditedUtc,
        mimeType: file.mimeType,
        name: file.name,
        parentId: file.parentId,
        serviceId: file.serviceId,
        sizeBytes: file.sizeBytes,
        type: file.type,
        url: file.url,
      })
      .then((res) => {
        console.log(res);
        if (res.data.success) {
          setIsLoading(false);
        } else {
          console.log("Ex-1");
          setIsLoading(false);
          setIsError(true);
        }
      })
      .catch(() => {
        console.log("Ex-2");
        setIsLoading(false);
        setIsError(true);
      });
  };

  const handleFileUploadToMongo = async () => {
    console.log(data);
    if (data) {
      await Promise.all(data.map((item) => eachFileUploadToMongo(item)));
    }
  };

  console.log(isLoading);

  return (
    data && (
      <>
        {isError ? (
          <div>Something went wrong</div>
        ) : isLoggedin ? (
          <TableContainer
            component={Paper}
            sx={{
              maxWidth: 700,
              margin: "auto",
              marginTop: "20px",
              opacity: isLoading ? "0.6" : "1",
            }}
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
        ) : null}

        {isLoggedin ? (
          <Stack
            spacing={2}
            direction="row"
            sx={{
              marginTop: "50px",
              justifyContent: "center",
              display: "flex",
            }}
          >
            <Button
              variant="contained"
              color="error"
              onClick={() => setData(undefined)}
            >
              Remove Selected Files
            </Button>
            <Button
              variant="contained"
              endIcon={<FileUploadIcon />}
              onClick={handleFileUploadToMongo}
            >
              {isLoading ? "....Uploading" : "Upload Files"}
            </Button>
          </Stack>
        ) : null}
      </>
    )
  );
};
