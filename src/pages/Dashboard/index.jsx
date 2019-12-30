import React, { useState, useMemo } from 'react';
import { format, subDays, addDays } from 'date-fns';
import es from 'date-fns/locale/es';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import api from '~/services/api';

import { Container, Time } from './styles';

export default function Dashboard() {
  const [date, setDate] = useState(new Date());

  const dateFormatted = useMemo(
    () => format(date, "d 'de' MMMM", { locale: es }),
    [date]
  );

  function handlePrevDay() {
    setDate(subDays(date, 1));
  }

  function handleNextDay() {
    setDate(addDays(date, 1));
  }

  return (
    <Container>
      <header>
        <button onClick={handlePrevDay} type="button">
          <MdChevronLeft size={36} color="#fff" />
        </button>
        <strong>{dateFormatted}</strong>
        <button onClick={handleNextDay} type="button">
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
