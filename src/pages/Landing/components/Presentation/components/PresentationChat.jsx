import React, { useEffect, useRef, useState } from 'react';
import { BaseUrl } from '../../../../../App.jsx';

const BOT_GREETING = [
  {
    sender: 'bot',
    text: `Здравствуйте! Я бот-консультант – создан, чтобы сделать выбор
двери максимально простым и понятным.
Я могу:
проанализировать фото, подсказать с выбором, объяснить "техничку"
простым языком.

Расскажите, что именно подбираете – и мы начнем.`,
  },
];

const LOCAL_STORAGE_KEY = 'presentation_chat_messages';
const TOAST_DURATION = 3000;

const PresentationChat = ({ chatIsVisible }) => {
  const chatWrapperRef = useRef(null);
  const [showToast, setShowToast] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [messages, setMessages] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(LOCAL_STORAGE_KEY);
      const parsed = JSON.parse(stored);

      if (Array.isArray(parsed) && parsed.length > 0) {
        setMessages(parsed);
      } else {
        throw new Error('Parsed is not a non-empty array');
      }
    } catch (err) {
      console.warn('Ошибка чтения localStorage:', err);
      setMessages(BOT_GREETING);
    } finally {
      setIsLoaded(true);
    }
  }, []);

  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(messages));
    }
  }, [messages, isLoaded]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleUnavailableFeature = () => {
    setShowToast(true);
    setTimeout(() => setShowToast(false), TOAST_DURATION);
  };

  const handleInputChange = (e) => setInputValue(e.target.value);

  const handleSendMessage = async () => {
    const trimmed = inputValue.trim();
    if (!trimmed) {
      handleUnavailableFeature();
      return;
    }

    const newUserMessage = { sender: 'user', text: trimmed };
    const updatedMessages = [...messages, newUserMessage];

    setMessages(updatedMessages);

    setInputValue('');

    try {
      const response = await fetch(`${BaseUrl}chatgpt/web`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text: trimmed }),
      });

      if (!response.ok) {
        throw new Error('Сервер вернул ошибку');
      }

      const data = await response.json();

      if (!data || !data.result) {
        throw new Error('Некорректный ответ сервера');
      }

      setMessages((prev) => [...prev, { sender: 'bot', text: data.result }]);
    } catch (error) {
      console.error('Ошибка при отправке запроса:', error);
      setMessages((prev) => [
        ...prev,
        {
          sender: 'bot',
          text: 'Произошла ошибка при обработке запроса. Пожалуйста, попробуйте позже.',
        },
      ]);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') handleSendMessage();
  };

  const isInputEmpty = inputValue.trim() === '';
  const sendIcon = isInputEmpty
    ? '/assets/presentation/microphone.png'
    : '/assets/presentation/send-white.png';

  const scrollToBottom = () => {
    if (chatWrapperRef.current) {
      chatWrapperRef.current.scrollTop = chatWrapperRef.current.scrollHeight;
    }
  };

  return (
    <section className={`chat-section ${chatIsVisible ? 'visible' : 'hidden'}`}>
      <div className="chat">
        <div className="chat-header">
          <div className="chat-header__inner">
            <div className="chat-header__inner--left">
              <div
                className="back-arrow"
                onClick={handleUnavailableFeature}
              ></div>
            </div>
            <div className="chat-header__inner--center">
              <div className="chat-title">Консультант по дверям</div>
              <div className="chat-subtitle">бот</div>
            </div>
            <div className="chat-header__inner--right">
              <div className="user-icon">К</div>
            </div>
          </div>
        </div>

        <div className="chat-wrapper" ref={chatWrapperRef}>
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`message ${msg.sender === 'user' ? 'user' : ''}`}
            >
              <p>{msg.text}</p>
            </div>
          ))}
        </div>

        <div className="chat-footer">
          <div className="chat-footer__inner">
            <button
              className="footer-btn footer-btn__skrepka"
              onClick={handleUnavailableFeature}
            >
              <img src="/assets/presentation/skrepka.png" alt="Скрепка" />
            </button>

            <div className="chat-footer__inner--input">
              <input
                type="text"
                placeholder="Сообщение"
                value={inputValue}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
              />
              <button
                className="footer-btn footer-btn__stickers"
                onClick={handleUnavailableFeature}
              >
                <img src="/assets/presentation/stickers.png" alt="Стикеры" />
              </button>
            </div>

            <button
              className={`footer-btn ${isInputEmpty ? 'footer-btn__microphone' : 'footer-btn__send-btn'}`}
              onClick={handleSendMessage}
            >
              <img src={sendIcon} alt="Отправить" />
            </button>
          </div>
        </div>
      </div>

      {showToast && (
        <div className="toast">
          <p>Эта функция доступна только в Telegram</p>
          <p>Откройте бота там и получите доступ ко всем фишкам!</p>

          <div className="toast__btns">
            <button className="toast__btns--btn">
              <p>Telegram</p>
              <img src="/assets/icons/chat/telegram.svg" alt="" />
            </button>
            <button className="toast__btns--btn">
              <p>WhatsApp</p>
              <img src="/assets/icons/chat/whatsapp.svg" alt="" />
            </button>
            <button className="toast__btns--btn">
              <p>VK</p>
              <img src="/assets/icons/chat/vk.svg" alt="" />
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default PresentationChat;
