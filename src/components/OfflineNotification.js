import React from "react";
import { Alert } from "antd";
import "antd/dist/antd.css";

const OfflineNotification = () => {
  return (
    <>
      <div className="offline-div">
        {!navigator.onLine && (
          <div className="mobile-alert">
            <Alert message="You are offline." type="warning" closable />
          </div>
        )}
      </div>
    </>
  );
};

export default OfflineNotification;
