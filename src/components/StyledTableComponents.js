import { styled, TableCell,TableRow } from "@mui/material";
import { withStyles } from "@mui/styles";

export const StyledTableCell = withStyles({
    root: {
      border: `1px solid green`,
    },
  })(TableCell);

  export const StyledTableRow = styled(TableRow)(() => ({
    "&:nth-of-type(even)": {
      backgroundColor: "red",
    },
    // hide last border
    "&:last-child td, &:last-child th": {
      border: "1px solid red",
    },
  }));