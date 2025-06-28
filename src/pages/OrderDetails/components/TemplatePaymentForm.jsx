import React from 'react';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { BaseUrl } from '../../../App.jsx';

const schema = yup.object().shape({
  fio: yup.string().required('Введите ФИО'),
  phone_number: yup
    .string()
    .required('Введите номер телефона')
    .matches(/^\+?\d{10,15}$/, 'Неверный формат номера'),
  email: yup
    .string()
    .required('Введите адрес электронной почты')
    .email('Неверный формат email'),
  personal_data_agreement: yup
    .boolean()
    .oneOf([true], 'Согласитесь с условиями оферты'),
});

const TemplatePaymentForm = ({ currentTariffCost }) => {
  const isMobile = window.innerWidth < 1024;

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: 'onChange',
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    try {
      const payload = {
        ...data,
        amount: currentTariffCost,
      };

      const response = await fetch(`${BaseUrl}application`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const { identifier } = await response.json();

      if (response.ok) {
        window.location.href = `/orders/${identifier}`;
      } else {
        const errorData = await response.json().catch(() => ({}));
        console.error('Ошибка при отправке:', errorData);
        alert('Что-то пошло не так. Попробуйте ещё раз.');
        return;
      }

      reset();
    } catch (e) {
      console.error('Ошибка при создании заказа:', e);
    }
  };

  return (
    <>
      {!isMobile && <p className="fields__title">Оформление заказа</p>}

      <form className="fields__form" onSubmit={handleSubmit(onSubmit)}>
        <div className="fields__form--inputs">
          <div>
            <p>ФИО</p>
            <input
              type="text"
              placeholder="Иванов Иван Иванович"
              {...register('fio')}
            />
            {errors.fio && (
              <span className="input-error-message">{errors.fio.message}</span>
            )}
          </div>

          <div>
            <p>Телефон</p>
            <input
              type="tel"
              inputMode="tel"
              placeholder="+7 (___)___-__-__"
              {...register('phone_number')}
            />
            {errors.phone_number && (
              <span className="input-error-message">
                {errors.phone_number.message}
              </span>
            )}
          </div>

          <div>
            <p>Email</p>
            <input
              type="text"
              placeholder="email@email.com"
              {...register('email')}
            />
            {errors.email && (
              <span className="input-error-message">
                {errors.email.message}
              </span>
            )}
          </div>
        </div>

        <div className="fields__form--submit">
          <div>
            <div className="form-submit-checkbox">
              <input type="checkbox" {...register('personal_data_agreement')} />
              <p>
                Я принимаю условия{' '}
                <a
                  href="/offer_with_guarantee.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  публичной оферты
                </a>
              </p>
            </div>

            {errors.personal_data_agreement && (
              <span className="input-error-message">
                {errors.personal_data_agreement.message}
              </span>
            )}
          </div>

          <button type="submit" className={!isValid ? 'disabled' : ''}>
            Далее
          </button>
        </div>
      </form>
    </>
  );
};

export default TemplatePaymentForm;
