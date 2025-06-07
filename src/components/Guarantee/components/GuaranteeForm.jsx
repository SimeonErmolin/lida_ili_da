import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

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
      const response = await fetch('http://62.113.36.252/api/application/', {
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
          type="text"
          placeholder="+7(___)___-__-__"
          className="guarantee-input"
          {...register('phone_number')}
        />
        <button type="submit" className="guarantee-btn">
          Отправить
        </button>
      </form>
      <p className="input-error-message">{errors.phone_number?.message}</p>
      <p className="disclaimer-form">
        Нажимая на кнопку, вы даёте согласие на обработку персональных данных и
        соглашаетесь с{' '}
        <a href="#" className="policy">
          политикой конфиденциальности
        </a>
      </p>
    </div>
  );
};

export default GuaranteeForm;
