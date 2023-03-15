import React from "react";
import { Divider, TextField, Autocomplete, Paper, InputAdornment  } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
const Search = () => {
  return (
    <Paper  sx={{width:'100%', display: "flex" ,alignItems:'center' ,p:0}} elevation={0}>
      <Autocomplete

        disablePortal
        id="combo-box-demo"
        options={[]}
        sx={{ width: 200, "& fieldset": { border: 'none' }, "& input::placeholder": {
          fontWeight: "bold",
          color:'text.primary',
          opacity:'100%'
        }}}
        renderInput={(params) => <TextField {...params} placeholder="Iran" />}
      />
       <Divider orientation="vertical" flexItem />
      <TextField
        sx={{
            "& fieldset": { border: 'none' }, "& input::placeholder": {
              fontWeight: "bold"
            },fontWeight: "bold",input:{color:'text.primary', fontWeight: "bold"}
        }}
        id="outlined-basic"
        fullWidth    
      
        placeholder="Search"
        
      />
      <SearchIcon sx={{color:'text.secondary',mr:2}}/>
    </Paper>
  );
};

export default Search;
