import React from "react";

export interface NotificationProps {
  message: string;
}

const Notification = ({ message }: NotificationProps) => {
  return <div style={{ position: "absolute", top: 0, left: 0 }}>{message}</div>;
};

export default Notification;
