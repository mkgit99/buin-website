import React, { useEffect } from 'react';
import Footer from '../components/Footer';
import CookieBanner from '../components/CookieBanner';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import '../styles/Page.css';
import '../styles/animations.css';
  
export default function Services() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='page-container'>
      <div className="page">
        <h1 className="animated-title">Usługi</h1>
        {/* <ul className="services-list">
          <li data-animate><strong>Konsultacje cold callingowe</strong> – analiza i strategia Twojej marki.</li>
          <li data-animate><strong>Warsztaty cold callingowe</strong> – rozwój kompetencji zespołu.</li>
          <li data-animate><strong>Konsultacje networkingowe</strong> – od pomysłu po realizację i analizę.</li>
          <li data-animate><strong>Warsztaty networkingowe</strong> – analiza i strategia Twojej marki.</li>
          <li data-animate><strong>Konsultacje ICP (Ideal Customer Profile)</strong> – rozwój kompetencji zespołu.</li>
          <li data-animate><strong>Audyt sprzedażowy</strong> – analiza i strategia Twojej marki.</li>
        </ul> */}
        <ul className="services-list" data-animate>
          <Accordion
            sx={{
              boxShadow: 3,
              transition: 'background-color 0.3s ease',
              backgroundColor: '#f9f9f9',
              '&.Mui-expanded': {
                backgroundColor: '#f0f0f0'
              },
              '&:not(.Mui-expanded):hover': {
                backgroundColor: '#f0f0f0', // your hover color
              }
            }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <Typography component="span" className='accordion' ><strong>Konsultacje cold callingowe</strong></Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography className='accordion' >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                malesuada lacus ex, sit amet blandit leo lobortis eget.
              </Typography>
            </AccordionDetails>
          </Accordion>


          <Accordion sx={{
            boxShadow: 3,
            transition: 'background-color 0.3s ease',
            backgroundColor: '#f9f9f9',
            '&.Mui-expanded': {
              backgroundColor: '#f0f0f0'
            },
            '&:not(.Mui-expanded):hover': {
              backgroundColor: '#f0f0f0', // your hover color
            }
          }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <Typography component="span" className='accordion' ><strong>Warsztaty cold callingowe</strong></Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography className='accordion' >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                malesuada lacus ex, sit amet blandit leo lobortis eget.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion sx={{
            boxShadow: 3,
            transition: 'background-color 0.3s ease',
            backgroundColor: '#f9f9f9',
            '&.Mui-expanded': {
              backgroundColor: '#f0f0f0'
            },
            '&:not(.Mui-expanded):hover': {
              backgroundColor: '#f0f0f0', // your hover color
            }
          }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <Typography component="span" className='accordion' ><strong>Konsultacje networkingowe</strong></Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography className='accordion' >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                malesuada lacus ex, sit amet blandit leo lobortis eget.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion sx={{
            boxShadow: 3,
            transition: 'background-color 0.3s ease',
            backgroundColor: '#f9f9f9',
            '&.Mui-expanded': {
              backgroundColor: '#f0f0f0'
            },
            '&:not(.Mui-expanded):hover': {
              backgroundColor: '#f0f0f0', // your hover color
            }
          }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <Typography component="span" className='accordion' ><strong>Warsztaty networkingowe</strong></Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography className='accordion' >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                malesuada lacus ex, sit amet blandit leo lobortis eget.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion sx={{
            boxShadow: 3,
            transition: 'background-color 0.3s ease',
            backgroundColor: '#f9f9f9',
            '&.Mui-expanded': {
              backgroundColor: '#f0f0f0'
            },
            '&:not(.Mui-expanded):hover': {
              backgroundColor: '#f0f0f0', // your hover color
            }
          }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <Typography component="span" className='accordion' ><strong>Konsultacje ICP (Ideal Customer Profile)</strong></Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography className='accordion' >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                malesuada lacus ex, sit amet blandit leo lobortis eget.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion sx={{
            boxShadow: 3,
            transition: 'background-color 0.3s ease',
            backgroundColor: '#f9f9f9',
            '&.Mui-expanded': {
              backgroundColor: '#f0f0f0'
            },
            '&:not(.Mui-expanded):hover': {
              backgroundColor: '#f0f0f0', // your hover color
            }
          }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <Typography component="span" className='accordion' ><strong>Audyt sprzedażowy</strong></Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography className='accordion' >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                malesuada lacus ex, sit amet blandit leo lobortis eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </ul>
      </div>
      <Footer />
      <CookieBanner />
    </div>
  );
}