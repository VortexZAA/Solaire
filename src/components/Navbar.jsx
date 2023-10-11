import React, { useEffect, useState } from "react";
import { ethers } from "ethers";
import styled from "styled-components";

const Paper = styled.button`
  padding: 10px 20px;
  background-color: transparent;
  color: white;
  border: 1px solid white;
  border-radius: 32px;
  cursor: pointer;
  font-family: "Montserrat", sans-serif;
  font-size: 16px;
  transition: background-color 150ms ease-in-out;
  position: relative;
  top: -10px; /* Butonu 5 piksel yukarı kaldırır */

  &:hover {
    background-color: #00cf77; /* Yeşil renk üzerine gelindiğinde */
  }
`;

const Container = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  background: linear-gradient(to bottom, #20202090, #20202020);
  backdrop-filter: blur(8px);
`;

const Logo = styled.img`
  pointer-events: none;
  user-select: none;
  -webkit-user-drag: none;
  -webkit-touch-callout: none;
  max-height: 100px !important;
`;

const List = styled.nav`
  display: flex;
  gap: 20px;
  font-family: "Montserrat", sans-serif;
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const ListItem = styled.a`
  cursor: pointer;
  font-family: "Montserrat", sans-serif;

  &:hover {
    text-decoration: underline 1px white;
  }
`;

const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const Icon = styled.img`
  width: 30px;
  cursor: pointer;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: transparent;
  color: white;
  border: 1px solid white;
  border-radius: 32px;
  cursor: pointer;
  font-family: "Montserrat", sans-serif;
  font-size: 16px;
  transition: background-color 150ms ease-in-out;

  &:hover {
    background-color: #ffa500;
  }
`;

const Navbar = () => {
  const [account, setAccount] = useState("");
  const [balance, setBalance] = useState("");

  const connectMetaMask = async () => {
    try {
      if (window.ethereum) {
        await window.ethereum.request({ method: "eth_requestAccounts" });
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const currentAccount = await signer.getAddress();
        setAccount(currentAccount);

        const balance = await provider.getBalance(currentAccount);
        setBalance(ethers.utils.formatEther(balance));
      } else {
        console.log("MetaMask not detected.");
      }
    } catch (error) {
      console.error("MetaMask connection error:", error);
    }
  };

  return (
    <div className="h-16 " style={{ zIndex: "1000" }}>
      <Container className="py-2 px-3 md:px6 2xl:px-12 flex items-center gap-6">
        <img className="h-20" src="./img/logo.svg" />
        <div className="flex navbar justify-center text-sm md:text-xl font-medium items-center gap-12 w-full">
          <a
            href="https://qr.page/g/9kkbyDsTMe"
            className=" border rounded-full px-5 py-3"
            target="_blank"
            style={{ display: "flex", alignItems: "center" }}
          >
            Litepaper
          </a>

          <a
            href="https://qr.page/g/1SKuSTAhsDB"
            className=" border rounded-full px-5 py-3"
            target="_blank"
          >
            Onepager
          </a>

          <a href={"#home"}>Home</a>

          <a href={"#team"}>Team</a>

          <a href={"#participate"}>Participate</a>

          <a href={"#works"}>Works</a>

          <a href={"#timeline"}>Timeline</a>

          <a href={"#contact"}>Contact</a>
        </div>
        {/* <Icons>
          <Button onClick={connectMetaMask}>Connect Wallet</Button>
        </Icons> */}
      </Container>
    </div>
  );
};

export default Navbar;
