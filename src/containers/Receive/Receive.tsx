import { useEffect, useState } from 'react';
import { Toast } from 'react-bootstrap';
import dayjs from 'dayjs'


const Receive = () => {
  const url = 'http://146.185.154.90:8000/messages';
  const [messages, setMessages] = useState<IMessage[]>([]);
  dayjs.locale('ru');

  useEffect(() => {
      const fetchData = async () => {
        const messPromises = [];
        messPromises.push(fetch(url).then(res => res.json()));
        const messData = await Promise.all(messPromises);
        const msgData = messData[0];
        console.log(msgData);
        setMessages(msgData.map((msg: IMessage) => ({message: msg.message, author: msg.author, datetime: msg.datetime, _id: msg._id})));
      }
       fetchData().catch(e => console.log(e));
    }, []);

  console.log(messages);

  return (
    <>
      {messages.map(message => (
        <div key={message._id} className="mb-2">
          <Toast>
            <Toast.Header closeButton={false}>
              <strong className="me-auto">{message.author}</strong>
              <small>{dayjs(message.datetime).format('D MMMM YYYY, HH:mm')}</small>
            </Toast.Header>
            <Toast.Body>{message.message}</Toast.Body>
          </Toast>
        </div>
      ))}
    </>
  );
};

export default Receive;