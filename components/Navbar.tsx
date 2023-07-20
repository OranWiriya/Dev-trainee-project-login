import React from 'react';
import { Link as MuiLink } from '@mui/material';

function Navbar() {
  return (
    <nav className="w-full py-2 text-right bg-slate-100">
      <div className="text-lg">
        <MuiLink href="/login">Login</MuiLink>
        <MuiLink href="/register" className="mx-2">Register</MuiLink>
      </div>
    </nav>
  );
}

export default Navbar;
