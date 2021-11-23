import React from "react";
import Button from "@mui/material/Button";
import { ArrowDropDown } from "@mui/icons-material";
import { Add } from "@mui/icons-material";
import Stack from "@mui/material/Stack";

import "./styles.css";

function Header() {
  return (
    <div className="contained-feed">
      <header>
        <div className="contained-endomarketing">
          <div>
            <img
              className="endomarketing-logo"
              src="/images/endo.svg"
              alt="01"
            />
          </div>
          <div className="button-endomarketing">
            <Stack direction="row" spacing={2}>
              <Button variant="outlined" endIcon={<ArrowDropDown />}>
                TIPO
              </Button>
              <Button variant="contained" endIcon={<Add />}>
                CRIAR
              </Button>
            </Stack>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
