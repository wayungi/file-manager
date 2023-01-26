/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { FiBell } from 'react-icons/fi';
import { AiOutlineQuestionCircle } from 'react-icons/ai';
import { RiGridFill } from 'react-icons/ri';
import { RxHamburgerMenu } from 'react-icons/rx';
import { CiSearch } from 'react-icons/ci';

const Header = () => (
  <header>
    <div>
      <div><RiGridFill /></div>
      <div><RxHamburgerMenu /></div>
      <form>
        <div>
          <CiSearch />
          <input type="text" name="seacrh" />
        </div>
      </form>
      <div><AiOutlineQuestionCircle /></div>
      <div><FiBell /></div>
    </div>
  </header>
);

export default Header;
