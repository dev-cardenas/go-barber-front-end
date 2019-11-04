import React from 'react';
// import { MdNotifications } from 'react-icons/md';
//
import { Container, Badge, NotificationsList, Notification } from './styles';

export default function Notifications() {
  return (
    <Container>
      <Badge hasUnRead>
        {/* <MdNotifications color="#7159c1" size={20} /> */}
      </Badge>
      <NotificationsList>
        <Scroll>
          <Notification unread>
            <p>Tienes una nueva agenda</p>
            <time>2 dias atras</time>
            <button type="button">Marcar como leida</button>
          </Notification>
          <Notification>
            <p>Tienes una nueva agenda</p>
            <time>2 dias atras</time>
            <button type="button">Marcar como leida</button>
          </Notification>
        </Scroll>
      </NotificationsList>
    </Container>
  );
}
