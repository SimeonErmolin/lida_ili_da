import { useEffect } from 'react';

import { Route, Routes } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router';
import Landing from './pages/Landing/Landing.jsx';
import OrderDetails from './pages/OrderDetails/OrderDetails.jsx';
import NotFound from './pages/NotFound/NotFound.jsx';
import PaymentRejected from './pages/PaymentRejected/PaymentRejected.jsx';
import PaymentSuccess from './pages/PaymentSuccess/PaymentSuccess.jsx';

export const BaseUrl = 'https://lidailida.ru/api/';

function App() {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.innerHTML = `
      (function(m,e,t,r,i,k,a){
        m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
        m[i].l=1*new Date();
        for (var j = 0; j < document.scripts.length; j++) {
          if (document.scripts[j].src === r) return;
        }
        k=e.createElement(t),a=e.getElementsByTagName(t)[0],
        k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
      })(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

      ym(102719241, "init", {
        clickmap:true,
        trackLinks:true,
        accurateTrackBounce:true,
        webvisor:true
      });
    `;
    document.head.appendChild(script);

    const noscript = document.createElement('noscript');
    noscript.innerHTML =
      '<div><img src="https://mc.yandex.ru/watch/102719241" style="position:absolute; left:-9999px;" alt="" /></div>';
    document.body.appendChild(noscript);
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/orders/:identifier" element={<OrderDetails />} />
        <Route path="/payment-success" element={<PaymentSuccess />} />
        <Route path="/payment-rejected" element={<PaymentRejected />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
