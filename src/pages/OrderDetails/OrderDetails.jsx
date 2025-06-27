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
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    const fetchOrderData = async () => {
      try {
        const applicationResponse = await fetch(
          `${BaseUrl}application?identifier=${identifier}`
        );

        if (!applicationResponse.ok) {
          setNotFound(true);
          return;
        }

        const applicationData = await applicationResponse.json();

        const paymentLinkResponse = await fetch(
          `${BaseUrl}application/payment-link?identifier=${identifier}`
        );

        if (!paymentLinkResponse.ok) {
          setNotFound(true);
          return;
        }

        const paymentLink = await paymentLinkResponse.json();

        // ПРОВЕРИТЬ ЧТО В ЭТОМ paymentLink

        setUserData(applicationData);
        setPaymentLinkData(paymentLink);
      } catch (error) {
        console.error('Ошибка при загрузке данных:', error);
        setNotFound(true);
      } finally {
        setLoading(false);
      }
    };

    fetchOrderData();
  }, [identifier]);

  useEffect(() => {
    if (notFound) {
      navigate('/404');
    }
  }, [notFound, navigate]);

  if (loading) return <div>Загрузка...</div>;

  if (!userData) return null;

  return (
    <TemplatePayment
      currentTariff="maximum"
      isModal={false}
      children={
        <TemplateOrderFormed
          link={identifier}
          paymentStatus={userData.payment_status || 'pending'}
          name={userData.fio}
          phone={userData.phone_number}
          email={userData.email}
          // paymentLink={paymentLinkData}
        />
      }
    />
  );
};

export default OrderDetails;
