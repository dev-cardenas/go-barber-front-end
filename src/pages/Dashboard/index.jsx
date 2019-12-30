import React from 'react';
import api from '~/services/api';

import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

import { Container, Time } from './styles';

export default function Dashboard() {
  return (
    <Container>
      <header>
        <button type="button">
          <MdChevronLeft size={36} color="#fff" />
        </button>
        <strong>31 de Mayo</strong>
        <button type="button">
          <MdChevronRight size={36} color="#fff" />
        </button>
      </header>

      <ul>
        <Time>
          <strong past>08:00</strong>
          <strong>Diego</strong>
        </Time>
        <Time available>
          <strong>09:00</strong>
          <strong>Diego</strong>
        </Time>
        <Time>
          <strong>08:00</strong>
          <strong>Diego</strong>
        </Time>
      </ul>
    </Container>
  );
}
