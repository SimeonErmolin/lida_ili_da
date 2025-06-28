import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './OrderDetails.scss';
import TemplatePayment from './components/TemplatePayment.jsx';
import TemplateOrderFormed from './components/TemplateOrderFormed.jsx';
import { BaseUrl } from '../../App.jsx';

const OrderDetails = () => {
  const { identifier } = useParams();
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null);
  const [paymentLinkData, setPaymentLinkData] = useState(null);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    const fetchOrderData = async () => {
      try {
        const applicationResponse = await fetch(
          `${BaseUrl}application/?identifier=${identifier}`
        );

        if (!applicationResponse.ok) {
          setNotFound(true);
          return;
        }

        const applicationData = await applicationResponse.json();

        setUserData(applicationData);
      } catch (error) {
        console.error('Ошибка при загрузке данных:', error);
        setNotFound(true);
      }
    };

    fetchOrderData();
  }, [identifier]);

  useEffect(() => {
    if (notFound) {
      navigate('/404');
    }
  }, [notFound, navigate]);

  if (!userData) return null;

  return (
    <TemplatePayment
      currentTariffCost={userData.amount}
      isModal={false}
      children={
        <TemplateOrderFormed
          link={identifier}
          paymentStatus={userData.payment_status}
          name={userData.fio}
          phone={userData.phone_number}
          email={userData.email}
          paymentLink={paymentLinkData}
        />
      }
    />
  );
};

export default OrderDetails;
