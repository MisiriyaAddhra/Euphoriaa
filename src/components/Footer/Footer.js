import React from 'react';
import styled from 'styled-components';
import { FaInstagram, FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa6";
import playstore from "../../assets/play.png";
import apple from "../../assets/play (2).png";

const FooterContainer = styled.section`
   
  margin: 0 auto;
padding: 5% 10%;
background-color:#3C4242;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 5% 4%;
  }
 @media (max-width: 980px) {
    padding: 5% 4%;
  }
`;

const FooterTop = styled.div`
  display: flex;
  justify-content: space-between;

`;
const AppTitle = styled.h1`
color:#fff;
`
const AppContainer = styled.div``
const LinkBoxes = styled.div`
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
  width:100%;
 

  @media (max-width: 768px) {
    margin-bottom: 2rem;
  }
`;

const Box = styled.div`
  flex: 1;
  min-width: 150px;

`;

const Links = styled.ul`
  list-style: none;
  padding: 0;
 
`;

const Link = styled.a`
  text-decoration: none;
  color:#fff;
  line-height: 1.8;
  
  &:hover {
    color: #333;
  }
`;

const LinkTitle = styled.h4`
color:#fff;
font-size:1.5rem;
`

const FooterMiddleSection = styled.div`
 display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2% 0;
  border-bottom: 1px solid #BEBCBD;

   @media (max-width: 540px) {
      flex-direction: column;
  }
`;

const AppBoxes = styled.div`
  display: flex;
 flex-direction: column;
`;

const AppButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  gap:20px;

  img {
    width: 120px;
    height: auto;
  }

`;



const Social = styled.div`
`;

const Medias = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  gap: 3rem;

  @media (max-width: 640px) {
    gap: 2rem;
  }
`;

const MediaButton = styled.button`
  background: none;
  border: 1px solid #fff;
  background:#fff;
  border-radius:10px;
 padding: 20% 30%;
  cursor: pointer;
  font-size: 1.5rem;
  transition: color 0.3s ease;

  &:hover {
    color: #333;
  }
`;

const FooterBottom = styled.div`
  padding: 1rem;
  text-align: center;
`;

const Copyright = styled.p`
  font-size: 0.8rem;
  color: #fff;
`;

const FooterMiddle = () => {
    const footerLinks = [
        {
            title: "Need Help",
            links: ["Contact Us", "Track Order", "Return & Refunds", "FAQ's", "Career"]
        },
        {
            title: "Company",
            links: ["About Us", "Euphoria Blog", "Euphoriastan", "Collaboration", "Media"]
        },
        {
            title: "More Info",
            links: ["Terms & Conditions", "Privacy Policy", "Investor Relations", "Shipping Policy", "Sitemap"]
        },
        {
            title: "Location",
            links: ["support@euphoria.in", "Eklingpura Chouraha, Ahmedabad Main Road", "(NH 8- Near Mahadev Hotel) Udaipur, India- 313002"]
        }
    ];

    return (
        <FooterContainer>
            <FooterTop>
                <LinkBoxes>
                    {footerLinks.map((section, index) => (
                        <Box key={index}>
                            <LinkTitle>{section.title}</LinkTitle>
                            <Links>
                                {section.links.map((link, linkIndex) => (
                                    <li key={linkIndex}><Link href="#">{link}</Link></li>
                                ))}
                            </Links>
                        </Box>
                    ))}
                </LinkBoxes>
            </FooterTop>

            <FooterMiddleSection>


                <Social>
                    <Medias>
                        {[FaInstagram, FaFacebookF, FaTwitter, FaLinkedinIn].map((Icon, index) => (
                            <li key={index}>
                                <MediaButton>
                                    <Icon />
                                </MediaButton>
                            </li>
                        ))}
                    </Medias>
                </Social>

                <AppBoxes>
                    <AppTitle>Download The App</AppTitle>
                    <AppContainer>
                        <AppButton><img src={playstore} alt="Play Store" /></AppButton>
                        <AppButton><img src={apple} alt="App Store" /></AppButton>
                    </AppContainer>

                </AppBoxes>


            </FooterMiddleSection>

            <FooterBottom>
                <Copyright>
                    Copyright 2024 © Grogin WooCommerce WordPress Theme. All right reserved. Powered by KLBTheme.
                </Copyright>
            </FooterBottom>
        </FooterContainer>
    );
};

export default FooterMiddle;