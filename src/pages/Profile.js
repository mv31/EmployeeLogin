import { useState, useEffect } from "react";
import React from "react";
import {  useNavigate } from "react-router-dom";
import Usefetch from "./UseFetch";
import {
  CircularProgress,
  Typography,
  Table,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TableBody,
  Button,
} from "@mui/material";
import { StyledTableCell } from "../components/StyledTableComponents";
import EmployeeDetail from "../components/EmployeeDetail";


function Profile({ auth }) {
  const { data, loading, error } = Usefetch(
    "https://retoolapi.dev/GFHqAV/getemployees"
  );
  const [showprofile, setshowprofile] = useState(false);
  const [id, setid] = useState(null);
  let navigate = useNavigate();

  return (
    <div style={{ padding: "5%" }}>
      {!showprofile ? (
        <>
          {" "}
          <div>
            <Typography style={{ fontSize: 30, padding: "1%" }}>
              Employees List
            </Typography>
          </div>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead style={{ background: "green" }}>
                <TableRow>
                  <StyledTableCell
                    style={{ minWidth: "20%", fontWeight: 600, color: "white" }}
                    align="center"
                  >
                    S.No
                  </StyledTableCell>
                  <StyledTableCell
                    style={{ minWidth: "20%", fontWeight: 600, color: "white" }}
                    align="center"
                  >
                    Name
                  </StyledTableCell>
                  <StyledTableCell
                    style={{ minWidth: "20%", fontWeight: 600, color: "white" }}
                    align="center"
                  >
                    Company Name
                  </StyledTableCell>
                  <StyledTableCell
                    style={{ minWidth: "20%", fontWeight: 600, color: "white" }}
                    align="center"
                  >
                    Designation
                  </StyledTableCell>
                  <StyledTableCell
                    style={{ minWidth: "20%", fontWeight: 600, color: "white" }}
                    align="center"
                  >
                    Logo
                  </StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {loading && (
                  <TableRow>
                    <StyledTableCell
                      colSpan={6}
                      style={{ textAlign: "center" }}
                    >
                      <CircularProgress color="success" />
                    </StyledTableCell>
                  </TableRow>
                )}
                {data?.map((val, index) => (
                  <TableRow key={index}>
                    {val?.name && (
                      <>
                        <StyledTableCell style={{ minWidth: "1%" }}>
                          {val?.id}
                        </StyledTableCell>

                        <StyledTableCell>
                          <Button
                            onClick={() => {
                              setshowprofile(true);
                              setid(val?.id);
                            }}
                          >
                            {val?.name}
                          </Button>
                        </StyledTableCell>
                        <StyledTableCell>{val?.company}</StyledTableCell>
                        <StyledTableCell>{val?.designation}</StyledTableCell>
                        <StyledTableCell>
                          <img
                            src={val?.company_logo}
                            style={{ height: 60, width: 60 }}
                          />
                        </StyledTableCell>
                      </>
                    )}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>{" "}
        </>
      ) : (
        <EmployeeDetail id={id} showprofile={showprofile} />
      )}
    </div>
  );
}

export default Profile;
