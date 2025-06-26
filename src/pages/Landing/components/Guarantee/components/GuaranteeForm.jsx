import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { BaseUrl } from '../../../../../App.jsx';

const schemaForm = yup.object({
  phone_number: yup
    .string()
    .required('Введите номер телефона')
    .matches(/^\+?\d{10,15}$/, 'Неверный формат номера'),
});

const GuaranteeForm = () => {
  const {
    register: register,
    handleSubmit: handleSubmit,
    reset: reset,
    formState: { errors: errors },
  } = useForm({ resolver: yupResolver(schemaForm) });

  const onSubmitForm = async (data) => {
    const finalData = {
      ...data,
      consent: true,
    };

    try {
      const response = await fetch(`${BaseUrl}application`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(finalData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error('Ошибка при отправке:', errorData);
        alert('Что-то пошло не так. Попробуйте снова.');
        return;
      }

      alert('Наш менеджер скоро с Вами свяжется');
      reset();
    } catch (error) {
      console.error('Сетевая ошибка:', error);
      alert('Ошибка сети. Проверьте подключение.');
    }
  };

  return (
    <div className="modal-guarantee__footer--form">
      <form action="" className="form" onSubmit={handleSubmit(onSubmitForm)}>
        <input
          type="tel"
          inputMode="tel"
          placeholder="+7 (___)___-__-__"
          className="guarantee-input"
          {...register('phone_number')}
          onChange={(e) => {
            e.target.value = e.target.value.replace(/[A-Za-zА-Яа-я]/g, '');
          }}
        />

        {errors.phone_number && (
          <span className="input-error-message">
            {errors.phone_number?.message}
          </span>
        )}

        <button type="submit" className="guarantee-btn">
          Отправить
        </button>
      </form>

      <p className="disclaimer-form">
        Нажимая на кнопку, вы даёте согласие на обработку персональных данных и
        соглашаетесь с{' '}
        <a
          href="/policy-conf.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="policy"
        >
          политикой конфиденциальности
        </a>
      </p>
    </div>
  );
};

export default GuaranteeForm;
