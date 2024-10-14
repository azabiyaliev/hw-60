import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import * as React from 'react'


const AddForm = () => {

  const [msg, setMsg] = React.useState({
    author: '',
    message: '',
  });

  const onSubmit = (e:React.FormEvent) => {
    e.preventDefault();
    return setMsg(msg);
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMsg(prevState => {
      return {
        ...prevState,
        [e.target.name]: e.target.value
      }
    })
    console.log(e.target.value)
  }

  console.log(msg)

  return (
    <form onSubmit={onSubmit} className='border border-1 border-secondary rounded-3 shadow-lg'>
      <div className='d-flex align-items-center'>
        <Form.Control
          required
          className='w-75 mt-4 mx-3 me-4 mb-4'
          type="text"
          placeholder="Add author name"
          value={msg.author}
          name={'author'}
          onChange={onChange}
        />
      </div>
      <div className="d-flex align-items-center">
        <Form.Control
          required
          className='w-75 mx-3 me-4 mb-4'
          type="text" placeholder="Add message"
          value={msg.message}
          name={'message'}
          onChange={onChange}
        />
        <Button variant="outline-secondary mb-4">Send</Button>
      </div>
      <div>
      </div>
    </form>
  );
};

export default AddForm;