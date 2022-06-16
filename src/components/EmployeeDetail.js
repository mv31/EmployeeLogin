import { Link, Paper, Typography, CircularProgress } from "@mui/material";
import React from "react";
import Usefetch from "../pages/UseFetch";
function EmployeeDetail({ id, showprofie }) {
  const { data, loading, error } = Usefetch(
    `https://retoolapi.dev/H2F0Ui/getemployedetail?id=${id}`
  );

  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Typography style={{ fontSize: 25 }}>Employee Details</Typography>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {loading && <CircularProgress color="success" />}
        {data?.map((val, idx) => (
        <Paper
          style={{
            border: "1px solid #159580",
            borderRadius: 10,
            width: 300,
            padding: 10,
            // display: "flex",
            // flexDirection: "column",
          }}
        >
            <div style={{}}>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <img
                  src={val?.company_logo}
                  style={{ height: 60, width: 60 }}
                />
              </div>
              <div
                style={{
                  display: "flex",
                  gap: "10%",
                  justifyContent: "center",
                }}
              >
                <div style={{}}>
                  <Typography style={{ fontWeight: 600 }}>Name:</Typography>
                  <Typography style={{ fontWeight: 600 }}>Company:</Typography>
                  <Typography style={{ fontWeight: 600 }}>
                    Designation:
                  </Typography>
                  <Typography style={{ fontWeight: 600 }}>Rating:</Typography>
                  <Typography style={{ fontWeight: 600 }}>Interest:</Typography>
                </div>
                <div>
                  <Typography>{val?.name}</Typography>
                  <Typography>{val?.company}</Typography>
                  <Typography>{val?.designation}</Typography>
                  <Typography>{val?.rating}</Typography>
                  <Typography>{val?.interests}</Typography>
                </div>
              </div>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <Typography
                  style={{ fontWeight: 600 }}
                  sx={{ textDecoration: "underline" }}
                >
                  Job Description
                </Typography>
              </div>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <Typography>
                  {val?.job_descripton}{" "}
                  <a href={val?.view_more} target="_blank">
                    ViewMore
                  </a>{" "}
                </Typography>
              </div>

              {/* <a
              href={val?.view_more}
              onclick="window.open('print.html', 
                         'newwindow', 
                         'width=150,height=150'); 
                       return false;"
            >
              view_more
            </a> */}
            </div>
        </Paper>
          ))}
      </div>
    </>
  );
}

export default EmployeeDetail;
