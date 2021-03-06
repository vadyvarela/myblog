
import styled from 'styled-components'
import { Link } from "gatsby"

export const MenuWrapper = styled.nav`
  display: flex;
  justify-content: flex-end;
  background: #101010;
`

export const Navbar = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
`

export const MenuItem = styled.li`
  padding: 10px 15px;
  .active {
    color: #052049;
  }
`
export const LinkItem = styled(Link)`
  color: #fff;
  font-weight:bold;
  transition: 0.5s;

  &:hover {
    color: #052049;
  }
`

