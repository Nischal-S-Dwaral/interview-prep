import React from 'react';
import styled from "styled-components";
import {mobile} from "../responsive";
import {Link} from "react-router-dom";

const Container = styled.div `
  height: 10vh;
  display: flex;
  justify-content: space-between;
  border-bottom: 0.5px solid wheat;
`;

const Left = styled.div `
  flex: 1;
  align-items: center;
  display: flex;
  gap: 2rem;
  margin-left: 1rem;
`;

const Name = styled.div `
  font-size: 1.3rem;
  font-weight: bold;
  color: white;
  cursor: pointer;
`;

const Right = styled.div `
  flex: 1;
  align-items: center;
  display: flex;
  font-weight: 400;
`;

const List = styled.div `
  flex: 10;

  ${mobile({
    display: "none"
  })}
`;

const UnorderedList = styled.ul `
  display: flex;
  gap: 2rem;
  margin-right: 4rem;
  list-style-type: none;
  color: white;
  justify-content: flex-end;

  &:hover {
    cursor: pointer;
  }
`;

const ListItem = styled.li `
  color: white;
  &:hover {
    color: #FCA61F;
  }
`;

const Navbar = () => {
    return (
        <Container>
            <Left>
                <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
                    <Name>Interview-Prep</Name>
                </Link>
            </Left>
            <Right>
                <List>
                    <UnorderedList>
                        <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
                            <ListItem>Home</ListItem>
                        </Link>
                        <Link to="/dsa" style={{ textDecoration: 'none', color: 'white' }}>
                            <ListItem>DSA</ListItem>
                        </Link>
                        <Link to="/systemDesign" style={{ textDecoration: 'none', color: 'white' }}>
                            <ListItem>System Design</ListItem>
                        </Link>
                        <Link to="/other" style={{ textDecoration: 'none', color: 'white' }}>
                            <ListItem>Other</ListItem>
                        </Link>
                    </UnorderedList>
                </List>
            </Right>
        </Container>
    );
};

export default Navbar;
