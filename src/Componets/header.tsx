import React from 'react';
import {Box, Tabs, Tab} from "@mui/material";

function Header(){
return(
    <Box>
        <Tabs>
            <Tab label="Home" href="/home"/>
            <Tab label="FAQ" href="/faq"/>
            <Tab label="About Us" href="/about"/>
        </Tabs>
    </Box>
)
}

export default Header;