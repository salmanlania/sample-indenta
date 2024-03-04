import React from 'react'
import { AppBar, Toolbar, Typography } from '@mui/material';

export default function IndentaInfo() {
  return (
    <div >
      <AppBar position="static" sx={{ background: 'white' , color : 'black'}}>
        <Toolbar sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '5rem', gap: '2rem', marginBottom: '2rem' }}>
          <Typography
            variant="h3"
            component="div"
            sx={{
              textAlign: 'center',
              margin: 'auto',
              maxWidth: '90rem',
              fontSize: '2.4rem',
              marginBottom: '1rem',
              fontWeight : 'bold',
            }}
          >
            Why Indenta DSA
          </Typography>
          <Typography
            variant="body1"
            component="div"
            sx={{
              textAlign: 'center',
              margin: 'auto',
              maxWidth: '77rem',
              fontSize: '1.2rem',
            }}
          >
            By partnering with Indenta DSA and embracing our AI and data-driven sales
            solutions, our partners can revolutionize their credit card services, offering
            customers tailored experiences while optimizing their operational efficiency and
            risk management processes.
          </Typography>
          {/* <Typography
            variant="body1"
            component="div"
            sx={{
              textAlign: 'center',
              margin: 'auto',
              maxWidth: '87rem',
              fontSize: '1.1rem',
            }}
          >
            Once you set your teams up for success by leveraging our telemarketing services, you’ll be confident in your ability to successfully achieve company objectives.
          </Typography> */}
        </Toolbar>

      </AppBar>
    </div>
  )
}
