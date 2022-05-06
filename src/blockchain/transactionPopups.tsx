import React from 'react';
import { notification } from 'antd';
// import { BlockExplorerLink } from '../components/common/BlockExplorerLink';
import { shortenAddress } from '../utils/helpers';
const placement = 'topRight';

const NotificationBody = ({
  txHash,
  message,
  description,
}: {
  txHash?: string;
  message: string;
  description?: string;
}) => {
  return (
    <div>
      {description ? <div>{description}</div> : ''}
      <div>{message}</div>
      {txHash ? (
        <div>
          View Transaction:{' '}
          {/* <BlockExplorerLink to={txHash}>
            {shortenAddress(txHash)}
          </BlockExplorerLink> */}
        </div>
      ) : (
        ''
      )}
    </div>
  );
};

const NotificationTitle = ({ text }: { text: string }) => {
  return <div className='text-white'>{text}</div>;
};

export const showWaitingForSignature = (
  title: string,
  notificationId: string
) => {
  notification.open({
    message: <NotificationTitle text={title} />,
    description: 'Waiting for signature...',
    className: 'bg-gray-500 text-white',
    key: notificationId,
    duration: 0,
    placement,
  });
  return notificationId;
};

export const hidePopup = (notificationId: string) => {
  notification.close(notificationId);
  return notificationId;
};

export const showPendingTransaction = (
  notificationId: string,
  title: string,
  txHash?: string
) => {
  notification.open({
    key: notificationId,
    message: <NotificationTitle text={title} />,
    className: 'bg-blue-500 text-white',
    description: (
      <NotificationBody txHash={txHash} message='Transaction Pending...' />
    ),
    placement,
    duration: 0,
  });
};

export const showTransactionRejectedByUser = (
  notificationId: string,
  title: string,
  txHash?: string,
  description?: string
) => {
  notification.open({
    key: notificationId,
    message: <NotificationTitle text={title} />,
    className: 'bg-red-500 text-white',
    description: (
      <NotificationBody
        txHash={txHash}
        description={description}
        message='User failed to sign transaction.'
      />
    ),
    placement,
  });
};

export const showTransactionFailed = (
  notificationId: string,
  title: string,
  txHash: string,
  description?: string
) => {
  notification.open({
    key: notificationId,
    message: <NotificationTitle text={title} />,
    className: 'bg-red-500 text-white',
    description: (
      <NotificationBody
        txHash={txHash}
        description={description}
        message='Transaction Failed.'
      />
    ),
    placement,
  });
};

export const showTransactionConfirmed = (
  notificationId: string,
  title: string,
  txHash: string,
  description?: string
) => {
  notification.open({
    key: notificationId,
    message: <NotificationTitle text={title} />,
    className: 'bg-green-500 text-white',
    description: (
      <NotificationBody
        txHash={txHash}
        description={description}
        message='Transaction Confirmed.'
      />
    ),
    placement,
  });
};
