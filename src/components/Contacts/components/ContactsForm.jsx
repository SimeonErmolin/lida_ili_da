import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schemaForm = yup.object({
  fio: yup.string().required('Введите имя'),
  phone_number: yup
    .string()
    .required('Введите номер телефона')
    .matches(/^\+?\d{10,15}$/, 'Неверный формат номера'),
  email: yup
    .string()
    .required('Введите адрес электронной почты')
    .email('Неверный формат email'),
  message: yup.string(),
  personal_data_agreement: yup
    .boolean()
    .oneOf([true], 'Нужно согласиться на обработку персональных данных'),
  advertising_agreement: yup.boolean(),
});

const ContactsForm = () => {
  const {
    register: register,
    handleSubmit: handleSubmit,
    reset: reset,
    formState: { errors: errors },
  } = useForm({ resolver: yupResolver(schemaForm) });

  const onSubmitForm = async (data) => {
    try {
      const response = await fetch('http://62.113.36.252/api/application/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json', // обязательно указываем тип контента
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        console.error('Ошибка при отправке:', errorData);
        alert('Что-то пошло не так. Попробуйте ещё раз.');
        return;
      }

      alert('Наш менеджер скоро с Вами свяжется');
      reset();
    } catch (error) {
      console.error('Ошибка сети:', error);
      alert('Сетевая ошибка. Проверьте интернет-соединение.');
    }
  };

  return (
    <form
      action=""
      className="contacts-form__form"
      onSubmit={handleSubmit(onSubmitForm)}
    >
      <div>
        <input
          type="text"
          placeholder="Фамилия Имя"
          className="contacts-form__form--input"
          {...register('fio')}
        />
        <p className="input-error-message">{errors.fio?.message}</p>
      </div>

      <div>
        <input
          type="text"
          placeholder="+7 (___)___-__-__"
          className="contacts-form__form--input"
          {...register('phone_number')}
        />
        <p className="input-error-message">{errors.phone_number?.message}</p>
      </div>

      <div>
        <input
          type="text"
          placeholder="Электронная почта"
          className="contacts-form__form--input"
          {...register('email')}
        />
        <p className="input-error-message">{errors.email?.message}</p>
      </div>

      <div>
        <textarea
          rows="6"
          placeholder="Можете написать вопрос"
          className="contacts-form__form--text-area"
          {...register('message')}
        ></textarea>
      </div>

      <div className="form">
        <div>
          <div className="contacts-form__form--checkboxes">
            <input
              type="checkbox"
              className="checkbox"
              {...register('personal_data_agreement')}
            />
            <p>
              Даю{' '}
              <a href="#" className="agree-personal-data">
                согласие на обработку персональных данных
              </a>
            </p>
          </div>
          <p className="input-error-message">
            {errors.personal_data_agreement?.message}
          </p>
        </div>

        <div className="contacts-form__form--checkboxes">
          <input
            type="checkbox"
            className="checkbox"
            {...register('advertising_agreement')}
          />
          <p>
            Даю согласие на получение персональных предложений и рекламных
            материалов
          </p>
        </div>

        <button type="submit" className="contacts-form__form--btn">
          Отправить заявку
        </button>
      </div>
    </form>
  );
};

export default ContactsForm;
