import React from "react";
import styled from "styled-components";
import logo from "../assets/logo.png";

export default function navbar() {
  return (
    <>
      <Nav>
        <div className="brand">
          <div className="container">
            <img src={logo} alt="" />
            TRIPOTO
          </div>
          <div className="toggle"></div>
        </div>
        <ul>
          <li>
            <a href="#hero">Home</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#recommend">Places</a>
          </li>
          <li>
            <a href="#testimonials">Reviews</a>
          </li>
        </ul>
        <button>Contact</button>
      </Nav>
    </>
  );
}

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  .brand {
    .container {
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 0.4rem;
      font-weight: 900;
      font-size: 1.2rem;
    }
    .toggle {
      display: none;
    }
  }
  ul {
    display: flex;
    list-style-type: none;
    gap: 1rem;
    li {
      a {
        text-decoration: none;
        color: #0077b6;
        font-size: 1.2rem;
        transition: 0.2s ease-in-out;
        &:hover {
          color: #023e8a;
        }
      }
      &:first-of-type {
        a {
          color: #023e8a;
          font-weight: 900;
        }
      }
    }
  }
  button{
    padding:0.5rem 1rem;
    cursor:pointer;
    border-radius:1rem;
    border:none;
    color:white;
    background-color:#48cae4;
    text-transform:uppercase;
    font-size:1.1rem;
    letter-spacing:0.1rem;
    transition: 0.3s ease-in-out;
        &:hover {
          color: #023e8a;
        }
  }


  @media screen and (min-width: 280px) and (max-width: 1080px){
    .brand{
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      .toggle{
        display: block;
      }
    }
    ul,button{
      display: none;
    }
  }
`;
